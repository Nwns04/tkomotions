import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { firm } from '../data/lawFirm';

const navItems = [
  { label: 'Find Counsel', to: '/law-firm' },
  { label: 'Practice Areas', to: '/law-firm/practice-areas' },
  { label: 'Our People', to: '/law-firm/people' },
  { label: 'Insights', to: '/law-firm/insights' },
  { label: 'About', to: '/law-firm/about' },
  { label: 'Careers', to: '/law-firm/careers' },
  { label: 'Contact', to: '/law-firm/contact' },
];

export function Arrow({ className = '' }) { return <span aria-hidden="true" className={`lf-arrow ${className}`}>-&gt;</span>; }
export function Mark({ compact = false }) { return <span className={`lf-mark ${compact ? 'lf-mark-compact' : ''}`} aria-hidden="true"><span>A</span><i /><span>P</span></span>; }
export function RouteLabel({ children }) { return <p className="lf-route-label"><span className="lf-route-dot" />{children}</p>; }
export function SectionIntro({ eyebrow, title, children, action }) { return <div className="lf-section-intro"><div><RouteLabel>{eyebrow}</RouteLabel><h2>{title}</h2></div>{children && <p className="lf-section-copy">{children}</p>}{action}</div>; }
export function MatterTrace({ matter, practice, action = 'Discuss this matter' }) { return <div className="lf-matter-trace"><div><RouteLabel>Matter route</RouteLabel><strong>{matter}</strong></div><span className="lf-trace-line" aria-hidden="true" /><div><RouteLabel>Practice pathway</RouteLabel><strong>{practice}</strong></div><Link to={`/law-firm/contact?matter=${encodeURIComponent(matter)}`}>{action} <Arrow /></Link></div>; }

function LF_Header({ onMenu, menuOpen }) {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => { const handleScroll = () => setScrolled(window.scrollY > 16); window.addEventListener('scroll', handleScroll); return () => window.removeEventListener('scroll', handleScroll); }, []);
  return <header className={`lf-header ${scrolled ? 'lf-header-scrolled' : ''}`}><div className="lf-container lf-header-inner"><Link to="/law-firm" className="lf-brand" aria-label="Adeyemi and Partners home"><Mark /><span>Adeyemi<br /><em>&amp; Partners</em></span></Link><nav className="lf-desktop-nav" aria-label="Primary navigation">{navItems.map((item) => <NavLink key={item.to} to={item.to} end={item.to === '/law-firm'} className={({ isActive }) => isActive ? 'is-active' : ''}>{item.label}</NavLink>)}</nav><Link className="lf-header-action" to="/law-firm/contact">Discuss a matter <Arrow /></Link><button className="lf-menu-button" type="button" onClick={onMenu} aria-expanded={menuOpen} aria-controls="lf-mobile-nav"><span /><span /><span /><b>Menu</b></button></div>{menuOpen && <div id="lf-mobile-nav" className="lf-mobile-nav"><div className="lf-container">{navItems.map((item) => <NavLink key={item.to} to={item.to} end={item.to === '/law-firm'} onClick={onMenu}>{item.label}<Arrow /></NavLink>)}<Link to="/law-firm/contact" className="lf-mobile-enquiry" onClick={onMenu}>Discuss a matter <Arrow /></Link></div></div>}<div className="lf-current-route lf-container" aria-label="Current location">{location.pathname === '/law-firm' ? 'Matter index' : location.pathname.replace('/law-firm/', '').replaceAll('-', ' ')}</div></header>;
}

function LF_Footer() { return <footer className="lf-footer"><div className="lf-container lf-footer-grid"><div><Link to="/law-firm" className="lf-footer-brand"><Mark compact /> <span>Adeyemi &amp; Partners</span></Link><p>Clear counsel for decisions that carry weight.</p><Link className="lf-footer-route-link" to="/law-firm">Start with a matter <Arrow /></Link></div><div><RouteLabel>Matter index</RouteLabel><div className="lf-footer-links"><Link to="/law-firm/practice-areas">Practice pathways</Link><Link to="/law-firm/people">Relevant counsel</Link><Link to="/law-firm/insights">Published evidence</Link><Link to="/law-firm/contact">Begin an enquiry</Link></div></div><div><RouteLabel>Offices</RouteLabel><p>Lagos<br />Abuja</p><a href="mailto:enquiries@adeyemipartners.com">{firm.email}</a></div></div><div className="lf-container lf-footer-bottom"><span>© 2026 Adeyemi &amp; Partners</span><span>Fictional portfolio project by TKO Motions</span><Link to="/">Back to all demos</Link></div></footer>; }

export default function LF_Layout() { const [menuOpen, setMenuOpen] = useState(false); const location = useLocation(); useEffect(() => { window.scrollTo(0, 0); document.title = 'Adeyemi & Partners — Clear counsel for consequential decisions'; }, [location.pathname]); return <div className="lf-site"><LF_Header menuOpen={menuOpen} onMenu={() => setMenuOpen((open) => !open)} /><main><Outlet /></main><LF_Footer /></div>; }