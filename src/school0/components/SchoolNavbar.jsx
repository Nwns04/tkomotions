import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function SchoolNavbar({ onMenuClick, isMenuOpen }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const dropdowns = {
    programmes: {
      label: 'Programmes',
      items: [
        { name: 'Nursery', path: '/school/nursery', desc: '18 months – 4 years' },
        { name: 'Primary', path: '/school/primary', desc: '5 – 11 years' },
        { name: 'Secondary', path: '/school/secondary', desc: '11 – 18 years' },
      ],
    },
    about: {
      label: 'About',
      items: [
        { name: 'Our Story', path: '/school/about', desc: 'History and mission' },
        { name: 'Academics', path: '/school/academics', desc: 'Curriculum overview' },
        { name: 'School Life', path: '/school/school-life', desc: 'Clubs and activities' },
      ],
    },
  };

  return (
    <header className={`sticky top-0 z-50 bg-white transition-shadow ${isScrolled ? 'shadow-lg' : 'shadow-sm'}`}>
      <nav className="container-hotel">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/school" className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-full bg-oak-green flex items-center justify-center border-2 border-gold">
              <span className="text-white font-serif font-bold text-xl">O</span>
            </div>
            <div>
              <span className="text-lg font-serif font-bold text-ink block leading-tight">OAKBRIDGE</span>
              <span className="text-[10px] text-slate uppercase tracking-wider">International School</span>
            </div>
          </Link>

          {/* Desktop Navigation with Mega Menu */}
          <div className="hidden lg:flex items-center space-x-6">
            <Link to="/school" className="text-sm font-medium text-ink hover:text-deep-green transition-colors">
              Home
            </Link>
            
            {/* Programmes Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown('programmes')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="text-sm font-medium text-ink hover:text-deep-green transition-colors flex items-center">
                Programmes
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {activeDropdown === 'programmes' && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-slate/10 py-2">
                  {dropdowns.programmes.items.map(item => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className="block px-4 py-3 hover:bg-soft-gray transition-colors"
                    >
                      <span className="block font-medium text-ink text-sm">{item.name}</span>
                      <span className="block text-xs text-slate">{item.desc}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* About Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown('about')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="text-sm font-medium text-ink hover:text-deep-green transition-colors flex items-center">
                About
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {activeDropdown === 'about' && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-slate/10 py-2">
                  {dropdowns.about.items.map(item => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className="block px-4 py-3 hover:bg-soft-gray transition-colors"
                    >
                      <span className="block font-medium text-ink text-sm">{item.name}</span>
                      <span className="block text-xs text-slate">{item.desc}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link to="/school/admissions" className="text-sm font-medium text-ink hover:text-deep-green transition-colors">
              Admissions
            </Link>
            <Link to="/school/news" className="text-sm font-medium text-ink hover:text-deep-green transition-colors">
              News
            </Link>
            <Link to="/school/contact" className="text-sm font-medium text-ink hover:text-deep-green transition-colors">
              Contact
            </Link>
          </div>

          {/* Apply Button */}
          <button
            onClick={() => navigate('/school/admissions')}
            className="hidden lg:inline-flex bg-gold text-ink px-6 py-2.5 text-sm font-semibold rounded hover:bg-ochre transition-colors"
          >
            Apply Now
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={onMenuClick}
            className="lg:hidden w-10 h-10 flex items-center justify-center rounded border border-slate/20"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className={`block w-full h-[2px] bg-ink transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block w-full h-[2px] bg-ink transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`block w-full h-[2px] bg-ink transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>
        </div>
      </nav>
    </header>
  );
}

export default SchoolNavbar;