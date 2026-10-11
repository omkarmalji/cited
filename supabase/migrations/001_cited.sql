-- Durable snapshots drive the incremental queue. Normalized tables provide
-- inspectable reporting data and enforce citation integrity at the DB boundary.
create table public.records(kind text not null,id text not null,data jsonb not null,updated_at timestamptz not null default now(),primary key(kind,id));
alter table public.records enable row level security;
create index records_owner on public.records((data->>'owner'));
create table public.businesses(id text primary key,name text not null,city text not null,country text,category text,website text,facts jsonb not null,confirmed_at timestamptz not null);
create table public.checks(id text primary key,business_id text references public.businesses(id),created_at timestamptz not null,status text not null,summary jsonb not null);
create table public.questions(id text primary key,check_id text references public.checks(id) on delete cascade,text text not null,kind text not null,status_label text not null);
create table public.runs(question_id text references public.questions(id) on delete cascade,run_index int check(run_index between 0 and 4),mentioned boolean not null,answer text not null,model text not null,primary key(question_id,run_index));
create table public.sources(id int not null,check_id text references public.checks(id) on delete cascade,url text not null check(url ~ '^https?://'),title text not null,domain text not null,fetched_at timestamptz not null,excerpt text not null check(length(excerpt)>0),primary key(check_id,id));
create table public.findings(id bigint generated always as identity primary key,check_id text references public.checks(id) on delete cascade,kind text not null,body text not null,citation_ids int[] not null check(cardinality(citation_ids)>0));
create table public.fixes(id text primary key,check_id text references public.checks(id) on delete cascade,type text not null,title text not null,body text not null,status text not null check(status in ('draft','edited','approved')),approved_at timestamptz,slug text,check((status='approved')=(approved_at is not null)));
create table public.examples(id text primary key,business_id text references public.businesses(id),check_id text references public.checks(id),label text not null);
create table public.quotas(id text primary key,count int not null default 0);
do $$ declare t text;begin foreach t in array array['businesses','checks','questions','runs','sources','findings','fixes','examples','quotas'] loop execute format('alter table public.%I enable row level security',t);end loop;end $$;
-- No anon policies: only server service_role accesses report snapshots.
create function public.check_findings() returns trigger language plpgsql as $$ begin
  if exists(select 1 from unnest(new.citation_ids) cid where not exists(select 1 from public.sources where check_id=new.check_id and id=cid)) then raise exception 'Finding references a missing source';end if;return new;end $$;
create trigger finding_sources before insert or update on public.findings for each row execute function public.check_findings();
create function public.sync_check() returns trigger language plpgsql set search_path=public as $$
declare c jsonb;b jsonb;q jsonb;r jsonb;s jsonb;f jsonb;begin
  if new.kind not in ('checks','examples') then return new;end if;c=new.data;b=c->'facts';
  if c->>'status'='complete' then
    if coalesce(jsonb_typeof(c->'questions'),'null')<>'array' then raise exception 'Complete reports require 8 questions and 5 runs each';end if;
    if jsonb_array_length(c->'questions')<>8 or exists(select 1 from jsonb_array_elements(c->'questions') x where coalesce(jsonb_typeof(x->'runs'),'null')<>'array' or jsonb_array_length(x->'runs')<>5) then raise exception 'Complete reports require 8 questions and 5 runs each';end if;
  end if;
  insert into businesses values(c->>'businessId',b->>'name',b->>'city',b->>'country',b->>'category',b->>'website',b,(c->>'confirmedAt')::timestamptz) on conflict(id) do update set facts=excluded.facts,confirmed_at=excluded.confirmed_at;
  insert into checks values(c->>'id',c->>'businessId',(c->>'createdAt')::timestamptz,c->>'status',jsonb_build_object('sample',c->'sample','progress',c->'progress','previousTotal',c->'previousTotal')) on conflict(id) do update set status=excluded.status,summary=excluded.summary;
  delete from findings where check_id=c->>'id';delete from sources where check_id=c->>'id';delete from questions where check_id=c->>'id';delete from fixes where check_id=c->>'id';
  for s in select value from jsonb_array_elements(c->'sources') loop insert into sources values((s->>'id')::int,c->>'id',s->>'url',s->>'title',s->>'domain',(s->>'fetchedAt')::timestamptz,s->>'excerpt');end loop;
  for q in select value from jsonb_array_elements(c->'questions') loop insert into questions values(q->>'id',c->>'id',q->>'text',q->>'kind',q->>'status');for r in select value from jsonb_array_elements(q->'runs') loop insert into runs values(q->>'id',(r->>'index')::int,(r->>'mentioned')::boolean,r->>'answer',r->>'model');end loop;end loop;
  for f in select value from jsonb_array_elements(c->'findings') loop insert into findings(check_id,kind,body,citation_ids) values(c->>'id','rival',f->>'body',array(select value::int from jsonb_array_elements_text(f->'citationIds')));end loop;
  for f in select value from jsonb_array_elements(c->'fixes') loop insert into fixes values(f->>'id',c->>'id',f->>'type',f->>'title',f->>'body',f->>'status',(f->>'approvedAt')::timestamptz,f->>'slug');end loop;
  if new.kind='examples' then insert into examples values(new.id,c->>'businessId',c->>'id',b->>'name') on conflict(id) do update set check_id=excluded.check_id;end if;return new;
end $$;
create trigger snapshot_sync after insert or update on public.records for each row execute function public.sync_check();
create function public.claim_check(check_id text,lease_token text,lease_until timestamptz) returns jsonb language plpgsql security definer set search_path=public as $$
declare payload jsonb;begin select data into payload from records where kind='checks' and id=check_id for update;
if payload is null or payload->>'status' in ('complete','error') or coalesce((payload->>'leaseUntil')::timestamptz,'epoch')>now() then return null;end if;
payload=payload||jsonb_build_object('leaseToken',lease_token,'leaseUntil',lease_until);update records set data=payload,updated_at=now() where kind='checks' and id=check_id;return payload;end $$;
create function public.finish_check(check_id text,lease_token text,payload jsonb) returns void language plpgsql security definer set search_path=public as $$ begin
update records set data=payload||jsonb_build_object('owner',data->>'owner'),updated_at=now() where kind='checks' and id=check_id and data->>'leaseToken'=lease_token;if not found then raise exception 'Check lease expired';end if;end $$;
create function public.consume_quota(quota_key text,quota_max int) returns boolean language plpgsql security definer set search_path=public as $$ declare used int;begin
insert into quotas values(quota_key,1) on conflict(id) do update set count=quotas.count+1 returning count into used;return used<=quota_max;end $$;
create function public.transfer_reports(previous_owner text,next_owner text) returns void language plpgsql security definer set search_path=public as $$ begin
update records set data=jsonb_set(data,'{owner}',to_jsonb(next_owner)),updated_at=now() where kind in ('checks','candidates','pages','cache') and data->>'owner'=previous_owner;end $$;
revoke all on function public.claim_check(text,text,timestamptz),public.finish_check(text,text,jsonb),public.consume_quota(text,int),public.transfer_reports(text,text) from public,anon,authenticated;
grant execute on function public.claim_check(text,text,timestamptz),public.finish_check(text,text,jsonb),public.consume_quota(text,int),public.transfer_reports(text,text) to service_role;
create function public.replace_check(check_id text,expected_updated_at timestamptz,payload jsonb) returns boolean language plpgsql security definer set search_path=public as $$ begin
update records set data=payload,updated_at=now() where kind='checks' and id=check_id and updated_at=expected_updated_at;return found;end $$;
revoke all on function public.replace_check(text,timestamptz,jsonb) from public,anon,authenticated;
grant execute on function public.replace_check(text,timestamptz,jsonb) to service_role;
create function public.schedule_recheck(check_id text,expected_due text,next_payload jsonb) returns boolean language plpgsql security definer set search_path=public as $$
declare current_payload jsonb;begin
select data into current_payload from records where kind='checks' and id=check_id for update;
if current_payload is null or current_payload->>'status'<>'complete' or coalesce((current_payload->>'weeklyEnabled')::boolean,false)=false or current_payload->>'nextRecheckAt' is distinct from expected_due or expected_due::timestamptz>now() then return false;end if;
next_payload=next_payload||jsonb_build_object('owner',current_payload->>'owner');
insert into records(kind,id,data) values('checks',next_payload->>'id',next_payload) on conflict(kind,id) do nothing;
update records set data=current_payload||jsonb_build_object('weeklyEnabled',false,'latestRecheckId',next_payload->>'id'),updated_at=now() where kind='checks' and id=check_id;return true;end $$;
revoke all on function public.schedule_recheck(text,text,jsonb) from public,anon,authenticated;
grant execute on function public.schedule_recheck(text,text,jsonb) to service_role;
