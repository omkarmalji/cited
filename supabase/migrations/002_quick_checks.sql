-- Quick snapshots have their own exact completion invariant. Legacy reports remain deep.
-- No grants, policies, ownership or existing report data are changed.
create or replace function public.sync_check() returns trigger language plpgsql set search_path=public as $$
declare c jsonb;b jsonb;q jsonb;r jsonb;s jsonb;f jsonb;begin
  if new.kind not in ('checks','examples') then return new;end if;c=new.data;b=c->'facts';
  if c->>'status'='complete' then
    if coalesce(c->>'mode','deep') not in ('quick','deep') then raise exception 'Unknown check mode';end if;
    if c->>'mode'='quick' then
      if coalesce(jsonb_typeof(c->'questions'),'null')<>'array' then raise exception 'Quick reports require 5 broad questions and 1 run each';end if;
      if jsonb_array_length(c->'questions')<>5 or exists(select 1 from jsonb_array_elements(c->'questions') x where x->>'kind' is distinct from 'broad' or coalesce(jsonb_typeof(x->'runs'),'null')<>'array' or jsonb_array_length(x->'runs')<>1) then raise exception 'Quick reports require 5 broad questions and 1 run each';end if;
    else
      if coalesce(jsonb_typeof(c->'questions'),'null')<>'array' then raise exception 'Complete reports require 8 questions and 5 runs each';end if;
      if jsonb_array_length(c->'questions')<>8 or exists(select 1 from jsonb_array_elements(c->'questions') x where coalesce(jsonb_typeof(x->'runs'),'null')<>'array' or jsonb_array_length(x->'runs')<>5) then raise exception 'Complete reports require 8 questions and 5 runs each';end if;
    end if;
  end if;
  insert into businesses values(c->>'businessId',b->>'name',b->>'city',b->>'country',b->>'category',b->>'website',b,(c->>'confirmedAt')::timestamptz) on conflict(id) do update set facts=excluded.facts,confirmed_at=excluded.confirmed_at;
  insert into checks values(c->>'id',c->>'businessId',(c->>'createdAt')::timestamptz,c->>'status',jsonb_build_object('sample',c->'sample','mode',coalesce(c->'mode','"deep"'::jsonb),'progress',c->'progress','previousTotal',c->'previousTotal')) on conflict(id) do update set status=excluded.status,summary=excluded.summary;
  delete from findings where check_id=c->>'id';delete from sources where check_id=c->>'id';delete from questions where check_id=c->>'id';delete from fixes where check_id=c->>'id';
  for s in select value from jsonb_array_elements(c->'sources') loop insert into sources values((s->>'id')::int,c->>'id',s->>'url',s->>'title',s->>'domain',(s->>'fetchedAt')::timestamptz,s->>'excerpt');end loop;
  for q in select value from jsonb_array_elements(c->'questions') loop insert into questions values(q->>'id',c->>'id',q->>'text',q->>'kind',q->>'status');for r in select value from jsonb_array_elements(q->'runs') loop insert into runs values(q->>'id',(r->>'index')::int,(r->>'mentioned')::boolean,r->>'answer',r->>'model');end loop;end loop;
  for f in select value from jsonb_array_elements(c->'findings') loop insert into findings(check_id,kind,body,citation_ids) values(c->>'id','rival',f->>'body',array(select value::int from jsonb_array_elements_text(f->'citationIds')));end loop;
  for f in select value from jsonb_array_elements(c->'fixes') loop insert into fixes values(f->>'id',c->>'id',f->>'type',f->>'title',f->>'body',f->>'status',(f->>'approvedAt')::timestamptz,f->>'slug');end loop;
  if new.kind='examples' then insert into examples values(new.id,c->>'businessId',c->>'id',b->>'name') on conflict(id) do update set check_id=excluded.check_id;end if;return new;
end $$;
