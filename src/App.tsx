import React, { useEffect, useState } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { DemoModal } from './components/ui/DemoModal';
import { Icon } from './components/ui/Icon';
import { RadarVisual, PipelineMock, RegistryMock, MaskMock, IngestMock, AuditMock } from './components/ui/Mocks';
import { CommandPanel } from './components/ui/CommandPanel';

import { DetailedFeatures } from './components/sections/DetailedFeatures';

// Temporary inline features array to keep the existing behavior working
type IconName = 'arrow'|'play'|'search'|'shield'|'radar'|'database'|'upload'|'users'|'phone'|'whatsapp'|'mail'|'spark'|'check'|'lock'|'activity'|'chevron'|'bolt';

const features = [
  {id:'radar', eyebrow:'01 / intelligence', title:'Know where the next deal is hiding.', copy:'An executive radar turns lead activity into a live signal layer — hot opportunities, overdue follow-ups, stage velocity and suspicious access patterns.', icon:'radar' as IconName, metric:'87', label:'priority signal', tags:['Hot leads','Overdue','Anomalies']},
  {id:'registry', eyebrow:'02 / global registry', title:'Start with companies, not spreadsheets.', copy:'Browse a standardized global registry of companies and decision-makers. Filter, inspect and pull qualified records into your tenant CRM against your plan.', icon:'database' as IconName, metric:'24.8K', label:'records indexed', tags:['Company search','People intelligence','Controlled pull']},
  {id:'ingest', eyebrow:'03 / ingestion', title:'Drop in messy data. Get a clean pipeline.', copy:'CSV and XLSX imports detect columns, normalize phone numbers, validate rows, deduplicate records and isolate errors without mutating your pipeline configuration.', icon:'upload' as IconName, metric:'100K', label:'rows / batch', tags:['Auto mapping','Validation','Deduplication']},
  {id:'masking', eyebrow:'04 / data protection', title:'Your reps can sell without taking the database with them.', copy:'Role-aware phone and email masking keeps sensitive contact fields protected while still enabling click-to-call, WhatsApp and email workflows.', icon:'shield' as IconName, metric:'0', label:'raw exposure target', tags:['Masked contact','Export controls','Audit trail']},
  {id:'pipeline', eyebrow:'05 / sales workflow', title:'Move opportunities. Keep the history.', copy:'A focused CRM layer for leads, stages, assignments, activities and tasks. Drag opportunities through the board while every transition remains traceable.', icon:'activity' as IconName, metric:'360°', label:'lead view', tags:['Kanban','Lead drawer','Follow-ups']},
  {id:'cockpit', eyebrow:'06 / outbound cockpit', title:'Every call becomes an accountable action.', copy:'A telecaller workspace combines masked contact access, live call state, outcome capture and follow-up creation into one fast operating loop.', icon:'phone' as IconName, metric:'1-click', label:'outbound action', tags:['Call','WhatsApp','Gmail']},
  {id:'team', eyebrow:'07 / control plane', title:'Give every person exactly the access they need.', copy:'Tenant admins manage telecallers, assign lead batches and keep role boundaries explicit. Super admins oversee organizations and platform activity.', icon:'users' as IconName, metric:'RBAC', label:'by design', tags:['Teams','Assignments','Permissions']},
  {id:'audit', eyebrow:'08 / security radar', title:'See the trail behind every important action.', copy:'Audit events connect contact views, outbound actions, stage changes, logins and organization activity so unusual behavior is visible instead of invisible.', icon:'lock' as IconName, metric:'LIVE', label:'event stream', tags:['Actor','Tenant','Action context']},
];

export function App() {
  const [demo, setDemo] = useState(false);
  const [active, setActive] = useState('radar');
  const [cursor, setCursor] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => setCursor({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    const io = new IntersectionObserver(entries => 
      entries.forEach(e => e.isIntersecting && e.target.classList.add('in')), 
      { threshold: .12 }
    );
    els.forEach(e => io.observe(e));
    return () => io.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const activeFeature = features.find(f => f.id === active)!;

  return (
    <div className="site">
      <div className="cursor-glow" style={{ left: cursor.x, top: cursor.y }} />
      <div className="noise" />
      
      <Navbar onDemo={() => setDemo(true)} onScrollTo={scrollTo} />
      
      <main id="top">
        <section className="hero wrap">
          <div className="hero-copy reveal">
            <div className="eyebrow"><span className="signal-dot"/> LEAD INTELLIGENCE RADAR <span className="slash">/</span> CRM</div>
            <h1>Don't just manage leads.<br/><span>Read the signal.</span></h1>
            <p className="hero-sub">JARVIS is a security-first CRM that combines a global company intelligence layer, a disciplined sales pipeline and an activity radar that tells your team what matters next.</p>
            <div className="hero-actions">
              <button className="primary" onClick={() => scrollTo('features')}>Explore the system <Icon name="arrow" /></button>
              <button className="ghost" onClick={() => setDemo(true)}><Icon name="play" size={17}/> See it in motion</button>
            </div>
            <div className="hero-meta">
              <span><Icon name="check" size={14}/> Multi-tenant</span>
              <span><Icon name="check" size={14}/> Role-aware</span>
              <span><Icon name="check" size={14}/> AI-ready</span>
            </div>
          </div>
          <div className="hero-visual reveal">
            <RadarVisual />
            <div className="float-chip chip-a">
              <span>HOT LEAD</span><b>92</b><small>Vertex Components</small>
            </div>
            <div className="float-chip chip-b">
              <span>FOLLOW-UP</span><b>11:00</b><small>Tomorrow · 4 tasks</small>
            </div>
          </div>
        </section>

        <section className="ticker">
          <div className="wrap ticker-inner">
            <span>COMPANIES</span><i/><span>PEOPLE</span><i/><span>LEADS</span><i/><span>PIPELINES</span><i/><span>ACTIVITIES</span><i/><span>AUDIT</span><i/><span>RADAR</span><i/><span>AI-READY</span>
          </div>
        </section>

        <section className="command-wrap wrap reveal">
          <CommandPanel />
        </section>

        <section id="system" className="system wrap">
          <div className="section-intro reveal">
            <div>
              <span className="eyebrow">THE OPERATING MODEL</span>
              <h2>One system.<br/><span>Three intelligence layers.</span></h2>
            </div>
            <p>JARVIS keeps the familiar CRM workflow — but adds a controlled data layer and a behavioral intelligence layer around it. The result is less spreadsheet chaos and more accountable action.</p>
          </div>
          <div className="layer-grid">
            <div className="layer-card global reveal">
              <div className="layer-no">01</div>
              <Icon name="database" size={24}/>
              <h3>Global data</h3>
              <p>Standardized companies + decision-makers. Search, filter and pull records into a tenant account.</p>
              <div className="layer-foot"><span>Registry</span><span>Pull quotas</span><span>Deduped</span></div>
            </div>
            <div className="layer-card crm reveal">
              <div className="layer-no">02</div>
              <Icon name="activity" size={24}/>
              <h3>Tenant CRM</h3>
              <p>Leads, pipeline stages, assignments, calls, tasks, notes and follow-ups in one operating loop.</p>
              <div className="layer-foot"><span>Kanban</span><span>360° lead</span><span>Tasks</span></div>
            </div>
            <div className="layer-card secure reveal">
              <div className="layer-no">03</div>
              <Icon name="shield" size={24}/>
              <h3>Security radar</h3>
              <p>Mask sensitive fields, enforce role boundaries and surface suspicious access before data walks out.</p>
              <div className="layer-foot"><span>Masking</span><span>Audit</span><span>Anomaly</span></div>
            </div>
          </div>
        </section>

        <section id="features" className="features wrap">
          <div className="section-head reveal">
            <div>
              <span className="eyebrow">CAPABILITIES / 08</span>
              <h2>Built around the moments<br/><span>that actually move revenue.</span></h2>
            </div>
            <p>Every module is designed to be useful on its own — together they form a controlled intelligence operating system for sales.</p>
          </div>
          <div className="feature-tabs reveal">
            {features.map(f => (
              <button className={active === f.id ? 'active' : ''} key={f.id} onClick={() => setActive(f.id)}>
                <span>{f.eyebrow.split(' / ')[0]}</span>{f.title.split('.')[0]}
              </button>
            ))}
          </div>
          <div className="active-feature-caption reveal">
            <span>SELECTED / {activeFeature.eyebrow}</span>
            <b>{activeFeature.tags.join(' · ')}</b>
          </div>
          {features.map(f => (
            <div className={`feature-block ${active === f.id ? 'visible' : ''} reveal`} id={f.id} key={f.id}>
              <div className="feature-copy">
                <span className="eyebrow">{f.eyebrow}</span>
                <h3>{f.title}</h3>
                <p>{f.copy}</p>
                <div className="tag-row">
                  {f.tags.map(t => <span key={t}><Icon name="check" size={12}/>{t}</span>)}
                </div>
                <div className="feature-stat">
                  <b>{f.metric}</b><span>{f.label}</span>
                </div>
              </div>
              <div className="feature-art">
                {f.id === 'radar' && <RadarVisual/>}
                {f.id === 'registry' && <RegistryMock/>}
                {f.id === 'ingest' && <IngestMock/>}
                {f.id === 'masking' && <MaskMock/>}
                {f.id === 'pipeline' && <PipelineMock/>}
                {f.id === 'cockpit' && <MaskMock/>}
                {f.id === 'team' && <PipelineMock/>}
                {f.id === 'audit' && <AuditMock/>}
              </div>
            </div>
          ))}
        </section>

        <section id="security" className="security wrap">
          <div className="security-copy reveal">
            <span className="eyebrow">DATA-LOSS PREVENTION / BY DESIGN</span>
            <h2>Your database is an asset.<br/><span>Treat it like one.</span></h2>
            <p>Traditional CRMs assume that everyone who can work a lead can see the underlying contact data. JARVIS flips that model: the platform can perform the action without handing over the secret.</p>
            <div className="security-list">
              <div>
                <Icon name="lock"/>
                <span>
                  <b>Field-level masking</b>
                  <small>Phone and email can remain protected for telecaller roles.</small>
                </span>
              </div>
              <div>
                <Icon name="phone"/>
                <span>
                  <b>Action without exposure</b>
                  <small>Call, WhatsApp and email from the workspace without revealing raw fields.</small>
                </span>
              </div>
              <div>
                <Icon name="activity"/>
                <span>
                  <b>Everything leaves a trail</b>
                  <small>Views, outbound actions and stage changes become auditable events.</small>
                </span>
              </div>
            </div>
          </div>
          <div className="reveal">
            <MaskMock />
          </div>
        </section>

        <section id="workflow" className="workflow wrap">
          <div className="section-head reveal">
            <div>
              <span className="eyebrow">THE WORKFLOW</span>
              <h2>From raw data to<br/><span>revenue signal.</span></h2>
            </div>
            <p>A simple loop keeps the product understandable: ingest or discover, qualify, act, learn and repeat.</p>
          </div>
          <div className="flow">
            <div className="flow-line" />
            <div className="flow-step reveal">
              <span>01</span>
              <Icon name="database"/>
              <h3>Discover</h3>
              <p>Find companies and people from the global registry or bring your own leads.</p>
            </div>
            <div className="flow-step reveal">
              <span>02</span>
              <Icon name="upload"/>
              <h3>Normalize</h3>
              <p>Map columns, validate records, dedupe and preserve pipeline integrity.</p>
            </div>
            <div className="flow-step reveal">
              <span>03</span>
              <Icon name="activity"/>
              <h3>Prioritize</h3>
              <p>Use radar signals, stages, ownership and follow-up urgency to focus the team.</p>
            </div>
            <div className="flow-step reveal">
              <span>04</span>
              <Icon name="phone"/>
              <h3>Act</h3>
              <p>Call, WhatsApp, email, note outcomes and schedule the next action.</p>
            </div>
            <div className="flow-step reveal">
              <span>05</span>
              <Icon name="spark"/>
              <h3>Learn</h3>
              <p>Turn activity history and access behavior into better next-best actions.</p>
            </div>
          </div>
        </section>

        <DetailedFeatures />

        <section className="numbers wrap">
          <div className="reveal">
            <span>01</span><b>Global registry</b>
            <p>Platform-owned company + people intelligence.</p>
          </div>
          <div className="reveal">
            <span>02</span><b>Tenant CRM</b>
            <p>Opportunity management without schema duplication.</p>
          </div>
          <div className="reveal">
            <span>03</span><b>Radar layer</b>
            <p>Signals from both opportunity and behavior.</p>
          </div>
          <div className="reveal">
            <span>04</span><b>AI-ready</b>
            <p>Permissioned APIs ready for future agents.</p>
          </div>
        </section>

        <section className="quote wrap reveal">
          <div className="quote-mark">“</div>
          <blockquote>
            A CRM should not only tell you <em>what happened.</em><br/>
            It should tell you <strong>what deserves attention next.</strong>
          </blockquote>
          <div className="quote-line">
            <span>JARVIS CRM</span>
            <span>Lead Intelligence Radar</span>
          </div>
        </section>

        <section id="contact" className="cta wrap reveal">
          <div>
            <span className="eyebrow">NEXT / CONTROL THE SIGNAL</span>
            <h2>Make your CRM<br/><span>intelligent by default.</span></h2>
            <p>Explore the product architecture, see the operating flow, and decide where JARVIS fits your sales stack.</p>
          </div>
          <div className="cta-actions">
            <button className="primary" onClick={() => setDemo(true)}>
              Open interactive demo <Icon name="arrow"/>
            </button>
            <button className="ghost" onClick={() => scrollTo('features')}>
              Read capabilities
            </button>
            <small>No backend connection required for this showcase.</small>
          </div>
        </section>
      </main>
      
      <Footer />
      
      {demo && <DemoModal onClose={() => setDemo(false)} onScrollTo={scrollTo} />}
      
      <div className="status-pill">
        <span className="signal-dot"/> SYSTEM NOMINAL <span>·</span> 8 MODULES ONLINE
      </div>
    </div>
  );
}

export default App;
