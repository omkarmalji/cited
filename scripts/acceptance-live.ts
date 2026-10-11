import { request } from '@playwright/test';
import { mkdir,writeFile } from 'node:fs/promises';
import type { Check,Facts } from '../src/lib/types';

// Real API acceptance exercise. No fixes are approved or published by this script.
const businesses=[{name:'Monmouth Coffee',city:'London'},{name:'Schorem Haarsnijder en Barbier',city:'Rotterdam'},{name:'Bicycle Habitat',city:'New York'}];
const baseURL=process.env.CITED_ACCEPTANCE_URL||'http://localhost:3000';
async function main(){const results=await Promise.all(businesses.map(async input=>{
  const client=await request.newContext({baseURL,timeout:240000});
  const started=new Date().toISOString();let id:string|undefined;
  async function post(path:string,data?:unknown){const response=await client.post(path,{data,headers:{Origin:baseURL}});const value=await response.json();if(!response.ok())throw new Error(value.error||`HTTP ${response.status()}`);return value;}
  try{
    const resolved=await post('/api/resolve',input);
    const candidate=await (await client.get(`/api/candidates/${resolved.id}`)).json() as {facts:Facts};
    console.log(`${input.city}: resolved ${candidate.facts.name}, ${candidate.facts.category}.`);
    const created=await post('/api/checks',{candidateId:resolved.id,facts:candidate.facts});id=created.id;
    let check:Check;
    for(let step=0;step<55;step++){
      check=await(await client.get(`/api/checks/${id}`)).json();
      if(check.status==='error')throw new Error(check.error);
      if(check.status==='complete'){
        if(check.questions.length!==8||check.questions.some(q=>q.runs.length!==5))throw new Error('Incomplete counts.');
        if(check.findings.some(f=>!f.citationIds.length||f.citationIds.some(cid=>!check.sources.some(s=>s.id===cid))))throw new Error('Invalid finding citations.');
        if(check.fixes.some(f=>f.status==='approved'))throw new Error('Unexpected approval.');
        console.log(`${input.city}: PASS, 40 answers, ${check.sources.length} fetched sources, ${check.findings.length} cited findings, 4 drafts.`);
        return {input,id,started,finished:new Date().toISOString(),passed:true,facts:check.facts,sources:check.sources.map(s=>({url:s.url,fetchedAt:s.fetchedAt})),findings:check.findings,counts:check.questions.map(q=>q.runs.filter(r=>r.mentioned).length),models:[...new Set(check.questions.flatMap(q=>q.runs.map(r=>r.model)))]};
      }
      await post(`/api/checks/${id}/work`);
      console.log(`${input.city}: ${step+1} work steps.`);
    }
    throw new Error('Pipeline did not finish within 55 steps.');
  }catch(error){const message=error instanceof Error?error.message:String(error);console.error(`${input.city}: FAILED, ${message}`);return {input,id,started,finished:new Date().toISOString(),passed:false,error:message};}
  finally{await client.dispose();}
}));
await mkdir('.data',{recursive:true});await writeFile('.data/live-acceptance.json',JSON.stringify(results,null,2));
if(results.some(r=>!r.passed))process.exitCode=1;}
main().catch(error=>{console.error(error.message);process.exitCode=1;});
