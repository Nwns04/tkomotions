import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { companyInfo } from '../data/company';

function LR_Navbar({ onMenuClick, isMenuOpen }) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', path: '/logistics/services' },
    { name: 'Solutions', path: '/logistics/solutions' },
    { name: 'Tracking', path: '/logistics/tracking' },
    { name: 'About', path: '/logistics/about' },
    { name: 'Contact', path: '/logistics/contact' },
  ];

  return (
    <header className={`sticky top-0 z-50 transition-colors ${isScrolled ? 'bg-lr-black' : 'bg-lr-black'}`}>
      {/* Top Status Bar */}
      <div className="border-b border-lr-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 bg-lr-green rounded-full animate-pulse" />
            <span className="text-[10px] font-mono uppercase tracking-wider text-lr-off-white/70">
              {companyInfo.operationalStatus}
            </span>
          </div>
          <p className="text-[10px] font-mono uppercase tracking-wider text-lr-off-white/50 hidden md:block">
            {companyInfo.headquarters}
          </p>
        </div>
      </div>

      {/* Main Nav */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/logistics" className="flex items-center">
            <span className="text-lg md:text-xl font-bold text-lr-off-white tracking-tight">
              SWIFTROUTE
            </span>
            <span className="text-[10px] font-mono uppercase tracking-widest text-lr-lime ml-2">
              Logistics
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map(link => (
              <Link
                key={link.name}
                to={link.path}
                className="text-sm font-medium text-lr-off-white/70 hover:text-lr-lime transition-colors uppercase tracking-wider"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTAs */}
          <div className="hidden lg:flex items-center space-x-3">
            <Link
              to="/logistics/tracking"
              className="text-sm font-semibold text-lr-off-white px-4 py-2 border border-lr-border hover:border-lr-lime hover:text-lr-lime transition-colors uppercase tracking-wider"
            >
              Track
            </Link>
            <Link
              to="/logistics/contact"
              className="text-sm font-semibold text-lr-black bg-lr-lime px-5 py-2 hover:bg-lr-lime-dark transition-colors uppercase tracking-wider"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={onMenuClick}
            className="lg:hidden w-10 h-10 flex items-center justify-center border border-lr-border"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className={`block w-full h-[2px] bg-lr-lime transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block w-full h-[2px] bg-lr-lime transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`block w-full h-[2px] bg-lr-lime transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>
        </div>
      </nav>
    </header>
  );
}

export default LR_Navbar;