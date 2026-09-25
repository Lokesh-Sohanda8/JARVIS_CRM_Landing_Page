import React from 'react';
import { Icon } from './Icon';

export function DemoModal({ onClose, onScrollTo }: { onClose: () => void, onScrollTo: (id: string) => void }) {
  const handleNav = (id: string) => {
    onClose();
    onScrollTo(id);
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="demo-modal" onClick={e => e.stopPropagation()}>
        <button className="close" onClick={onClose}>×</button>
        <div className="eyebrow">INTERACTIVE PRODUCT TOUR</div>
        <h2>See the signal, not the spreadsheet.</h2>
        <p>Choose a surface to jump into its product story.</p>
        <div className="demo-grid">
          <button onClick={() => handleNav('radar')}><Icon name="radar"/><b>Executive Radar</b><small>Priority + anomalies</small></button>
          <button onClick={() => handleNav('registry')}><Icon name="database"/><b>Global Intelligence</b><small>Companies + people</small></button>
          <button onClick={() => handleNav('masking')}><Icon name="shield"/><b>Protected Outreach</b><small>Masked actions</small></button>
          <button onClick={() => handleNav('audit')}><Icon name="activity"/><b>Audit Trail</b><small>Every critical event</small></button>
        </div>
      </div>
    </div>
  );
}
