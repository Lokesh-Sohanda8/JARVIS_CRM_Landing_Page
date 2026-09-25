import React from 'react';
import { Icon } from '../ui/Icon';

export function DetailedFeatures() {
  return (
    <>
      <section className="analytics wrap section-gap" id="telecaller-desk">
        <div className="section-head reveal" style={{marginBottom: '50px'}}>
          <div>
            <span className="eyebrow">TELECALLER COMMAND CENTER / LAYER 3</span>
            <h2>Outbound execution.<br/><span>Built for velocity.</span></h2>
          </div>
          <p>This is where reps live. A dedicated cockpit combining live call state, pre-call context, quick outcomes, and daily target tracking into one extremely fast operating loop.</p>
        </div>
        <div className="mock-container reveal telecaller-desk">
            <div className="desk-sidebar">
                <div style={{color: '#657181', fontSize: '10px', letterSpacing: '1px'}}>TODAY'S TARGET</div>
                <div className="target-ring">
                    <div style={{textAlign: 'center'}}>
                        <b style={{fontSize: '24px', display: 'block', color: 'var(--mint)'}}>78</b>
                        <span style={{fontSize: '10px', color: '#657181'}}>/ 100</span>
                    </div>
                </div>
                <div className="queue-list">
                    <div style={{color: '#657181', fontSize: '10px', letterSpacing: '1px', marginBottom: '10px'}}>CALL QUEUE (12)</div>
                    {['Acme Industries', 'Vertex Components', 'Kinetic Systems', 'Vantage Foods'].map((l, i) => (
                        <div key={i} className="queue-item" style={{borderLeft: i === 0 ? '2px solid var(--mint)' : '0', background: i === 0 ? '#101720' : 'transparent'}}>
                            <div style={{fontWeight: i === 0 ? 'bold' : 'normal', color: i === 0 ? '#fff' : '#8d97a6'}}>{l}</div>
                            <div style={{color: '#526071', fontSize: '9px', marginTop: '4px'}}>Priority lead</div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="desk-main">
                <div style={{display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #1a222c', paddingBottom: '20px', marginBottom: '20px'}}>
                    <div>
                        <div style={{fontSize: '10px', color: 'var(--amber)', letterSpacing: '1px'}}>CURRENT LEAD</div>
                        <h3 style={{fontSize: '28px', margin: '5px 0'}}>Acme Industries</h3>
                        <div style={{color: '#8d97a6', fontSize: '12px'}}>Director of Operations · +91 98•••• 4821</div>
                    </div>
                    <div style={{textAlign: 'right'}}>
                        <div style={{fontSize: '10px', color: '#657181', letterSpacing: '1px'}}>PRE-CALL CONTEXT</div>
                        <div style={{color: '#c2cbd5', fontSize: '12px', marginTop: '5px'}}>Last contacted: 2 days ago</div>
                        <div style={{color: '#c2cbd5', fontSize: '12px'}}>Previous outcome: Interested</div>
                    </div>
                </div>
                
                <div style={{display: 'flex', gap: '15px', marginBottom: '30px'}}>
                    <button className="action-btn" style={{borderColor: 'var(--mint)', color: 'var(--mint)'}}><Icon name="phone"/> INITIATE CALL</button>
                    <button className="action-btn"><Icon name="whatsapp"/> WHATSAPP</button>
                    <button className="action-btn"><Icon name="mail"/> EMAIL</button>
                </div>

                <div style={{fontSize: '10px', color: '#657181', letterSpacing: '1px', marginBottom: '15px'}}>LOG OUTCOME</div>
                <div style={{display: 'flex', gap: '10px', flexWrap: 'wrap'}}>
                    {['Interested', 'Not Interested', 'Callback', 'No Answer', 'Wrong Number'].map(o => (
                        <button key={o} style={{background: '#0e141d', border: '1px solid #202b38', padding: '8px 14px', borderRadius: '4px', fontSize: '11px', color: '#a2aebc'}}>{o}</button>
                    ))}
                </div>
            </div>
        </div>
      </section>

      <section className="analytics wrap section-gap" id="omnichannel">
        <div className="grid-2 reveal">
            <div>
                <span className="eyebrow">OMNICHANNEL OUTREACH</span>
                <h2 style={{fontSize: '42px', margin: '15px 0'}}>The whole relationship.<br/><span>Not just fragments.</span></h2>
                <p style={{color: '#7d8896', lineHeight: 1.8, fontSize: '13px'}}>Telephony, WhatsApp, and Gmail integrate directly into the lead timeline. Reps can see exactly what was said, across every channel, before they make the next move.</p>
            </div>
            <div className="mock-container" style={{padding: '30px'}}>
                <div className="outreach-timeline">
                    <div className="timeline-event">
                        <div className="timeline-dot"/>
                        <div style={{fontSize: '10px', color: '#526071'}}>TODAY 11:42 AM</div>
                        <div style={{fontWeight: 'bold', fontSize: '13px', margin: '4px 0', display: 'flex', alignItems: 'center', gap: '6px'}}><Icon name="whatsapp" size={14}/> WhatsApp message sent</div>
                        <div style={{color: '#8d97a6', fontSize: '11px'}}>Template: "Pricing Proposal Follow-up"</div>
                    </div>
                    <div className="timeline-event">
                        <div className="timeline-dot" style={{borderColor: 'var(--blue)'}}/>
                        <div style={{fontSize: '10px', color: '#526071'}}>YESTERDAY 04:15 PM</div>
                        <div style={{fontWeight: 'bold', fontSize: '13px', margin: '4px 0', display: 'flex', alignItems: 'center', gap: '6px'}}><Icon name="phone" size={14}/> Outbound Call · 4m 12s</div>
                        <div style={{color: '#8d97a6', fontSize: '11px'}}>Outcome: Interested. Requested pricing document.</div>
                    </div>
                    <div className="timeline-event" style={{paddingBottom: '0'}}>
                        <div className="timeline-dot" style={{borderColor: '#8d97a6'}}/>
                        <div style={{fontSize: '10px', color: '#526071'}}>NOV 12 09:00 AM</div>
                        <div style={{fontWeight: 'bold', fontSize: '13px', margin: '4px 0', display: 'flex', alignItems: 'center', gap: '6px'}}><Icon name="mail" size={14}/> Email received</div>
                        <div style={{color: '#8d97a6', fontSize: '11px'}}>Subject: Re: Next steps for Acme</div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      <section className="analytics wrap section-gap" id="ai-roadmap">
        <div className="section-head reveal" style={{marginBottom: '60px'}}>
          <div>
            <span className="eyebrow" style={{color: 'var(--blue)'}}>AI ROADMAP / FUTURE-READY</span>
            <h2>Intelligence that acts.<br/><span>Not just analyzes.</span></h2>
          </div>
          <p>Current models score leads and summarize context. The JARVIS architecture is preparing for full MCP-enabled autonomous workflows: drafting messages, cleaning data, and predictive conversions.</p>
        </div>
        <div className="mock-container reveal" style={{padding: '50px 30px', overflow: 'visible'}}>
            <div className="ai-workflow">
                <div className="ai-line"/>
                <div className="ai-node">
                    <Icon name="database" size={20}/>
                    <div style={{fontWeight: 'bold', fontSize: '11px', marginTop: '10px'}}>RAW LEAD</div>
                </div>
                <div className="ai-node" style={{borderColor: 'var(--blue)'}}>
                    <Icon name="spark" size={20}/>
                    <div style={{fontWeight: 'bold', fontSize: '11px', marginTop: '10px', color: 'var(--blue)'}}>AI SUMMARY</div>
                </div>
                <div className="ai-node" style={{borderColor: 'var(--mint)'}}>
                    <Icon name="target" size={20}/>
                    <div style={{fontWeight: 'bold', fontSize: '11px', marginTop: '10px', color: 'var(--mint)'}}>NEXT ACTION</div>
                </div>
                <div className="ai-node">
                    <Icon name="phone" size={20}/>
                    <div style={{fontWeight: 'bold', fontSize: '11px', marginTop: '10px'}}>REP OUTCOME</div>
                </div>
            </div>
        </div>
      </section>

      <section className="analytics wrap section-gap" id="analytics-deep">
        <div className="grid-2 reveal">
            <div className="mock-container" style={{padding: '30px', display: 'flex', flexDirection: 'column', gap: '15px'}}>
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', borderBottom: '1px solid #1a222c', paddingBottom: '15px'}}>
                    <div>
                        <div style={{fontSize: '10px', color: '#657181', letterSpacing: '1px'}}>PIPELINE VALUE</div>
                        <div style={{fontSize: '32px', fontWeight: 'bold'}}>₹14.2L</div>
                    </div>
                    <div style={{color: 'var(--mint)', fontSize: '12px'}}>+12.4% vs last month</div>
                </div>
                <div>
                    <div style={{fontSize: '10px', color: '#657181', letterSpacing: '1px', marginBottom: '10px'}}>CONVERSION FUNNEL</div>
                    {[
                        {l: 'Total Leads', n: 1240, p: 100},
                        {l: 'Contacted', n: 850, p: 68},
                        {l: 'Qualified', n: 320, p: 25},
                        {l: 'Proposal', n: 110, p: 8}
                    ].map(f => (
                        <div key={f.l} style={{marginBottom: '10px'}}>
                            <div style={{display: 'flex', justifyContent: 'space-between', fontSize: '11px', marginBottom: '4px'}}>
                                <span>{f.l}</span><b>{f.n}</b>
                            </div>
                            <div style={{height: '4px', background: '#1a222c', borderRadius: '2px', overflow: 'hidden'}}>
                                <div style={{width: `${f.p}%`, height: '100%', background: 'var(--mint)'}}/>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div>
                <span className="eyebrow">ANALYTICS & REPORTING</span>
                <h2 style={{fontSize: '42px', margin: '15px 0'}}>Measure the machine.<br/><span>Optimize the output.</span></h2>
                <p style={{color: '#7d8896', lineHeight: 1.8, fontSize: '13px'}}>JARVIS provides deep visibility into team productivity, source performance, and pipeline velocity. Move away from guessing and start operating on hard metrics.</p>
            </div>
        </div>
      </section>

      <section className="analytics wrap section-gap" id="platform-admin">
        <div className="section-head reveal" style={{marginBottom: '50px'}}>
          <div>
            <span className="eyebrow">PLATFORM ADMIN / MULTI-TENANT</span>
            <h2>Control the entire<br/><span>sales platform.</span></h2>
          </div>
          <p>Built as a true multi-tenant system. Super Admins manage multiple isolated organizations, enforcing permissions, revoking sessions, and overseeing platform-wide security.</p>
        </div>
        <div className="admin-tree reveal mock-container">
            <div><Icon name="database" size={14} style={{marginRight: '8px', verticalAlign: 'middle'}}/> JARVIS PLATFORM (SUPER ADMIN)</div>
            <ul>
                <li><Icon name="users" size={12}/> ORGANIZATION: APEX INDUSTRIES (TENANT)
                    <ul>
                        <li><Icon name="lock" size={10}/> Role: Tenant Admin</li>
                        <li><Icon name="shield" size={10}/> Role: Sales Manager (Access: Team)</li>
                        <li><Icon name="phone" size={10}/> Role: Telecaller (Access: Assigned, Masked)</li>
                    </ul>
                </li>
                <li><Icon name="users" size={12}/> ORGANIZATION: VERTEX COMPONENTS (TENANT)
                    <ul>
                        <li><Icon name="lock" size={10}/> Role: Tenant Admin</li>
                        <li><Icon name="phone" size={10}/> Role: Telecaller</li>
                    </ul>
                </li>
            </ul>
        </div>
      </section>

      <section className="analytics wrap section-gap" id="governance" style={{paddingBottom: '100px'}}>
        <div className="grid-2 reveal">
            <div>
                <span className="eyebrow">DATA GOVERNANCE</span>
                <h2 style={{fontSize: '42px', margin: '15px 0'}}>Trust your database.<br/><span>Trace every change.</span></h2>
                <p style={{color: '#7d8896', lineHeight: 1.8, fontSize: '13px'}}>Maintain pristine data quality with built-in deduplication, global edit approvals, and data provenance. If data gets mangled, precise audit trails allow you to recover and resolve conflicts.</p>
            </div>
            <div className="gov-visual">
                <div className="gov-box">
                    <Icon name="filter" size={24} style={{color: 'var(--mint)', marginBottom: '10px'}}/>
                    <div style={{fontSize: '11px', fontWeight: 'bold'}}>DEDUPE</div>
                    <div style={{fontSize: '9px', color: '#657181', marginTop: '5px'}}>Merge conflicts</div>
                </div>
                <div className="gov-box">
                    <Icon name="activity" size={24} style={{color: 'var(--amber)', marginBottom: '10px'}}/>
                    <div style={{fontSize: '11px', fontWeight: 'bold'}}>PROVENANCE</div>
                    <div style={{fontSize: '9px', color: '#657181', marginTop: '5px'}}>Source tracking</div>
                </div>
                <div className="gov-box">
                    <Icon name="lock" size={24} style={{color: 'var(--blue)', marginBottom: '10px'}}/>
                    <div style={{fontSize: '11px', fontWeight: 'bold'}}>AUDIT</div>
                    <div style={{fontSize: '9px', color: '#657181', marginTop: '5px'}}>Event history</div>
                </div>
            </div>
        </div>
      </section>

      <section className="analytics wrap section-gap" id="integrations" style={{paddingBottom: '100px'}}>
        <div className="section-head reveal" style={{marginBottom: '50px'}}>
          <div>
            <span className="eyebrow">INTEGRATIONS ARCHITECTURE</span>
            <h2>Bring your stack.<br/><span>We'll handle the signal.</span></h2>
          </div>
          <p>Connect your existing telephony, email, and storage providers directly into the JARVIS control plane. No need to migrate infrastructure to get intelligence.</p>
        </div>
        <div className="mock-container reveal" style={{padding: '40px', background: 'radial-gradient(circle at center, rgba(30,40,55,1) 0%, rgba(10,13,20,1) 100%)', display: 'flex', justifyContent: 'space-around', alignItems: 'center'}}>
            <div style={{textAlign: 'center', color: '#657181', fontSize: '11px'}}><Icon name="phone" size={32} style={{color: '#fff', marginBottom: '10px'}}/><div>Telephony Providers</div></div>
            <div style={{width: '60px', height: '1px', background: 'linear-gradient(90deg, transparent, #2a3540, transparent)'}}/>
            <div style={{textAlign: 'center', color: '#657181', fontSize: '11px'}}><Icon name="mail" size={32} style={{color: '#fff', marginBottom: '10px'}}/><div>Workspace Providers</div></div>
            <div style={{width: '60px', height: '1px', background: 'linear-gradient(90deg, transparent, #2a3540, transparent)'}}/>
            <div style={{textAlign: 'center', color: '#657181', fontSize: '11px'}}><Icon name="database" size={32} style={{color: '#fff', marginBottom: '10px'}}/><div>Data Storage</div></div>
            <div style={{width: '60px', height: '1px', background: 'linear-gradient(90deg, transparent, #2a3540, transparent)'}}/>
            <div style={{textAlign: 'center', color: '#657181', fontSize: '11px'}}><Icon name="spark" size={32} style={{color: '#fff', marginBottom: '10px'}}/><div>AI / MCP Connectors</div></div>
        </div>
      </section>
    </>
  );
}
