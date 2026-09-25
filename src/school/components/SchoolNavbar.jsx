import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { schoolInfo } from '../data/school';

function SchoolNavbar({ onMenuClick, isMenuOpen }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const navigate = useNavigate();
  useEffect(() => { const handleScroll = () => setIsScrolled(window.scrollY > 50); window.addEventListener('scroll', handleScroll); return () => window.removeEventListener('scroll', handleScroll); }, []);
  const dropdowns = {
    programmes: { label: 'Programmes', items: [
      { name: 'Nursery', path: '/school/nursery', desc: 'Early years learning' },
      { name: 'Primary', path: '/school/primary', desc: 'Strong foundations' },
      { name: 'Secondary', path: '/school/secondary', desc: 'Confidence and readiness' },
    ]},
    about: { label: 'About', items: [
      { name: 'Our Story', path: '/school/about', desc: 'Vision, values and leadership' },
      { name: 'Academics', path: '/school/academics', desc: 'Curriculum overview' },
      { name: 'School Life', path: '/school/school-life', desc: 'Clubs and activities' },
    ]},
  };
  return (
    <header className={`sticky top-0 z-50 bg-white transition-shadow ${isScrolled ? 'shadow-lg' : 'shadow-sm'}`}>
      <nav className="container-hotel"><div className="flex items-center justify-between h-20">
        <Link to="/school" className="flex items-center space-x-3"><div className="w-12 h-12 rounded-full bg-oak-green flex items-center justify-center border-2 border-gold"><span className="text-white font-serif font-bold text-xl">C</span></div><div><span className="text-lg font-serif font-bold text-ink block leading-tight">{schoolInfo.shortName}</span><span className="text-[10px] text-slate uppercase tracking-wider">Academy Demo</span></div></Link>
        <div className="hidden lg:flex items-center space-x-6">
          <Link to="/school" className="text-sm font-medium text-ink hover:text-deep-green transition-colors">Home</Link>
          {Object.entries(dropdowns).map(([key, menu]) => <div key={key} className="relative" onMouseEnter={() => setActiveDropdown(key)} onMouseLeave={() => setActiveDropdown(null)}><button className="text-sm font-medium text-ink hover:text-deep-green transition-colors flex items-center">{menu.label}<svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg></button>{activeDropdown === key && <div className="absolute top-full left-0 w-64 bg-white rounded-lg shadow-xl border border-slate/10 py-2">{menu.items.map(item => <Link key={item.path} to={item.path} className="block px-4 py-3 hover:bg-soft-gray transition-colors"><span className="block font-medium text-ink text-sm">{item.name}</span><span className="block text-xs text-slate">{item.desc}</span></Link>)}</div>}</div>)}
          <Link to="/school/admissions" className="text-sm font-medium text-ink hover:text-deep-green transition-colors">Admissions</Link><Link to="/school/news" className="text-sm font-medium text-ink hover:text-deep-green transition-colors">News</Link><Link to="/school/contact" className="text-sm font-medium text-ink hover:text-deep-green transition-colors">Contact</Link>
        </div>
        <button onClick={() => navigate('/school/admissions')} className="hidden lg:inline-flex bg-gold text-ink px-6 py-2.5 text-sm font-semibold rounded hover:bg-ochre transition-colors">Apply Now</button>
        <button onClick={onMenuClick} className="lg:hidden w-10 h-10 flex items-center justify-center rounded border border-slate/20" aria-label="Toggle menu"><div className="w-6 h-5 flex flex-col justify-between"><span className={`block w-full h-[2px] bg-ink transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} /><span className={`block w-full h-[2px] bg-ink transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} /><span className={`block w-full h-[2px] bg-ink transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} /></div></button>
      </div></nav>
    </header>
  );
}
export default SchoolNavbar;
