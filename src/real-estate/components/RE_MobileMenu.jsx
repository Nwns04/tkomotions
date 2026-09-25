import { Link } from 'react-router-dom';
import { useEffect } from 'react';

function RE_MobileMenu({ isOpen, onClose }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const navLinks = [
    { name: 'Home', path: '/real-estate' },
    { name: 'All Properties', path: '/real-estate/properties' },
    { name: 'Buy', path: '/real-estate/buy' },
    { name: 'Rent', path: '/real-estate/rent' },
    { name: 'Commercial', path: '/real-estate/commercial' },
    { name: 'Agents', path: '/real-estate/agents' },
    { name: 'About', path: '/real-estate/about' },
    { name: 'Contact', path: '/real-estate/contact' },
  ];

  return (
    <div className="fixed inset-0 z-[60] lg:hidden">
      <div className="absolute inset-0 bg-ink/50" onClick={onClose} />
      <div className="absolute right-0 top-0 h-full w-full max-w-sm bg-white shadow-2xl">
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-6 border-b border-border">
            <div className="flex items-center space-x-1">
              <span className="text-lg font-bold text-navy">APEX</span>
              <span className="text-xs text-muted uppercase">Properties</span>
            </div>
            <button onClick={onClose} className="text-muted hover:text-dark-gray" aria-label="Close menu">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto py-8 px-6">
            <ul className="space-y-4">
              {navLinks.map(link => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    onClick={onClose}
                    className="block text-xl font-semibold text-dark-gray hover:text-navy transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="p-6 border-t border-border">
            <Link
              to="/real-estate/list-property"
              onClick={onClose}
              className="block w-full bg-gold text-white text-center px-6 py-3 font-semibold rounded hover:bg-navy transition-colors"
            >
              List Your Property
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RE_MobileMenu;