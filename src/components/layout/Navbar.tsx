import React, { useEffect, useState } from 'react';
import { Icon } from '../ui/Icon';

export function Navbar({ onDemo, onScrollTo }: { onDemo: () => void, onScrollTo: (id: string) => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleScroll = (id: string) => {
    onScrollTo(id);
    setMenu(false);
  };

  return (
    <header className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <a className="brand" href="#top">
        <span className="brand-mark">J</span>
        <span>JARVIS <em>CRM</em></span>
      </a>
      <nav className={menu ? 'open' : ''}>
        <button onClick={() => handleScroll('system')}>Product</button>
        <button onClick={() => handleScroll('features')}>Capabilities</button>
        <button onClick={() => handleScroll('security')}>Security</button>
        <button onClick={() => handleScroll('workflow')}>Workflow</button>
      </nav>
      <div className="nav-actions">
        <button className="text-btn" onClick={onDemo}>View demo</button>
        <button className="nav-cta" onClick={() => handleScroll('contact')}>
          Request access <Icon name="arrow" size={15} />
        </button>
      </div>
      <button className="menu-btn" onClick={() => setMenu(!menu)}>
        {menu ? <Icon name="close" size={24} /> : <Icon name="menu" size={24} />}
      </button>
    </header>
  );
}
