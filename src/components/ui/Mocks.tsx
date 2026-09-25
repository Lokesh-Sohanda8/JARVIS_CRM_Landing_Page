import React, { useEffect, useState } from 'react';
import { Icon } from './Icon';

export function RadarVisual(){
  const [scan,setScan]=useState(0);
  useEffect(()=>{const t=setInterval(()=>setScan(s=>(s+1)%360),35);return()=>clearInterval(t)},[]);
  const dots=[{x:68,y:30,c:'mint'},{x:30,y:58,c:'amber'},{x:78,y:68,c:'white'},{x:52,y:76,c:'mint'},{x:38,y:39,c:'amber'}];
  return <div className="radar-card panel"><div className="panel-top"><span>JARVIS / RADAR</span><span className="live"><i/> LIVE</span></div><div className="radar-stage"><div className="radar-grid"/><div className="radar-sweep" style={{transform:`rotate(${scan}deg)`}}/><div className="radar-ring r1"/><div className="radar-ring r2"/><div className="radar-ring r3"/><div className="radar-cross x"/><div className="radar-cross y"/>{dots.map((d,i)=><span key={i} className={`radar-dot ${d.c}`} style={{left:`${d.x}%`,top:`${d.y}%`}}/>)}<div className="radar-center"/><div className="radar-label rl1">HOT LEAD / 92</div><div className="radar-label rl2">ANOMALY / 03</div></div><div className="radar-footer"><div><b>87</b><span>priority score</span></div><div><b>14</b><span>follow-ups</span></div><div><b>03</b><span>anomalies</span></div></div></div>
}

export function PipelineMock(){
  return <div className="panel mock"><div className="panel-top"><span>PIPELINE / LIVE BOARD</span><span>6 stages</span></div><div className="kanban">{[['NEW','18','Apex Industries','Nexora Labs'],['CONTACTED','11','Vantage Foods','BluePeak'],['QUALIFIED','07','Kinetic Systems','Orion Retail'],['PROPOSAL','04','Northstar','Acme Group']].map(([s,n,...ls],i)=><div className="lane" key={s}><div className="lane-head"><span>{s}</span><b>{n}</b></div>{ls.map((l,j)=><div className="mini-lead" key={l}><span className={`avatar a${(i+j)%4}`}>{l[0]}</span><div><b>{l}</b><small>{j?'Decision maker':'Priority lead'}</small></div><span className="score">{j?68:92}</span></div>)}</div>)}</div></div>
}

export function RegistryMock(){
  return <div className="panel mock registry-mock"><div className="panel-top"><span>GLOBAL INTELLIGENCE</span><span>FILTERS · 4</span></div><div className="registry-head"><div><small>SEARCH</small><b>manufacturing · Pune</b></div><div className="count">2,418 <small>matches</small></div></div><div className="registry-row header"><span>COMPANY</span><span>INDUSTRY</span><span>DIRECTORS</span><span>STATUS</span></div>{[['Vertex Components','Manufacturing','4','Verified'],['Helix Mobility','Automotive','7','Verified'],['Asterion Works','Industrial','3','Review'],['Crown Dynamics','Engineering','5','Verified']].map((r,i)=><div className="registry-row" key={i}>{r.map((v,j)=><span key={j} className={j===3?'status':''}>{v}</span>)}</div>)}<button className="dark-action"><Icon name="database" size={15}/> Pull selected records <Icon name="arrow" size={15}/></button></div>
}

export function MaskMock(){
  return <div className="panel mask-mock"><div className="panel-top"><span>TELECALLER / CONTACT PROTECTION</span><span className="green-text" style={{color:'var(--mint)'}}>POLICY ACTIVE</span></div><div className="profile-line"><div className="big-avatar">AR</div><div><b>Arjun Rao</b><span>Director · Vertex Components</span></div><span className="verified">✓ verified</span></div><div className="secret-grid"><div><small>PHONE</small><b>+91 98•••• 1234</b></div><div><small>EMAIL</small><b>ar••••@vertex.co</b></div></div><div className="action-row"><button><Icon name="phone"/> Call</button><button><Icon name="whatsapp"/> WhatsApp</button><button><Icon name="mail"/> Gmail</button></div><div className="protection-note"><Icon name="shield" size={15}/><span>Raw contact data is never exposed to this role.</span></div></div>
}

export function IngestMock(){
  return <div className="panel mock ingest-mock"><div className="panel-top"><span>INGESTION WIZARD</span><span>STEP 03 / 04</span></div><div className="upload-box"><div className="upload-icon"><Icon name="upload" size={20}/></div><b>leads_q3.xlsx</b><span>18.4 MB · 42,810 rows</span><div className="progress"><i/></div><small>Validating · 96.8%</small></div><div className="validation"><span><i/>41,432 valid</span><span><i/>1,221 duplicates</span><span><i/>157 errors</span></div></div>
}

export function AuditMock(){
  return <div className="panel mock audit-mock"><div className="panel-top"><span>PLATFORM AUDIT</span><span>LAST 60 MIN</span></div><div className="audit-kpis"><div><b>2,481</b><span>events</span></div><div><b>84</b><span>calls</span></div><div><b>19</b><span>emails</span></div><div><b>7</b><span>stage moves</span></div></div>{[['CONTACT_VIEW','Telecaller · Apex Industries','00:08'],['CALL_INITIATED','Sales · Vertex Components','00:16'],['STAGE_CHANGE','Manager · Northstar','00:21'],['EXPORT_BLOCKED','Policy · Telecaller role','00:34']].map((e,i)=><div className={`event ${i===3?'warning':''}`} key={i}><span className="event-dot"/><div><b>{e[0]}</b><small>{e[1]}</small></div><time>{e[2]}</time></div>)}</div>
}
