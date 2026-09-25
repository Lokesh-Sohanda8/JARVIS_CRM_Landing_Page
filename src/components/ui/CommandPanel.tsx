import React, { useState } from 'react';
import { Icon } from './Icon';

export function CommandPanel(){
  const [query,setQuery]=useState('');
  const [status,setStatus]=useState('Ask JARVIS anything about your pipeline…');
  const suggestions=['Show hot leads','Who needs follow-up?','Find manufacturing leads'];
  const run=(q:string)=>{setQuery(q);setStatus(q==='Show hot leads'?'12 hot leads found · 4 need action today':q==='Who needs follow-up?'?'7 overdue · 3 due before noon':'2,418 matching companies · 74 decision-makers');};
  return <div className="command-panel panel"><div className="panel-top"><span>JARVIS / COMMAND</span><span className="command-state"><i/> READY</span></div><div className="command-body"><div className="command-orb"><div className="orb-core"><Icon name="spark" size={23}/></div><span className="orb-ring one"/><span className="orb-ring two"/></div><div className="command-copy"><span className="eyebrow">ASK THE OPERATING SYSTEM</span><h3>Turn a question into a next action.</h3><p>{status}</p></div><div className="command-input"><Icon name="search" size={16}/><input value={query} onChange={e=>setQuery(e.target.value)} onKeyDown={e=>e.key==='Enter'&&run(query)} placeholder="e.g. show me leads untouched for 7 days"/><button onClick={()=>run(query||'Show hot leads')}><Icon name="arrow" size={15}/></button></div><div className="suggestions">{suggestions.map(s=><button key={s} onClick={()=>run(s)}>{s}<Icon name="chevron" size={13}/></button>)}</div></div></div>
}
