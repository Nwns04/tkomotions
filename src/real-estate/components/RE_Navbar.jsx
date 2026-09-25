import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function RE_Navbar({ onMenuClick, isMenuOpen }) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Buy', path: '/real-estate/buy' },
    { name: 'Rent', path: '/real-estate/rent' },
    { name: 'Commercial', path: '/real-estate/commercial' },
    { name: 'Agents', path: '/real-estate/agents' },
    { name: 'About', path: '/real-estate/about' },
    { name: 'Contact', path: '/real-estate/contact' },
  ];

  return (
    <header className={`sticky top-0 z-50 bg-white transition-shadow ${isScrolled ? 'shadow-md' : 'shadow-sm'}`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/real-estate" className="flex items-center space-x-1">
            <span className="text-xl font-bold text-navy">APEX</span>
            <span className="text-xs text-muted uppercase tracking-wider">Properties Abuja</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            <Link to="/real-estate/properties" className="text-sm font-medium text-dark-gray hover:text-navy transition-colors">
              All Properties
            </Link>
            {navLinks.map(link => (
              <Link 
                key={link.name} 
                to={link.path} 
                className="text-sm font-medium text-dark-gray hover:text-navy transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* List Your Property Button - Links to ListProperty page */}
          <Link
            to="/real-estate/list-property"
            className="hidden lg:inline-flex bg-gold text-white px-5 py-2 text-sm font-semibold rounded hover:bg-navy transition-colors"
          >
            List Your Property
          </Link>

          {/* Mobile Menu Button */}
          <button 
            onClick={onMenuClick} 
            className="lg:hidden w-10 h-10 flex items-center justify-center" 
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className={`block w-full h-[2px] bg-navy transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block w-full h-[2px] bg-navy transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`block w-full h-[2px] bg-navy transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>
        </div>
      </nav>
    </header>
  );
}

export default RE_Navbar;