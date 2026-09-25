import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { companyInfo } from '../data/company';

function LR_MobileMenu({ isOpen, onClose }) {
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
    { number: '01', name: 'Home', path: '/logistics' },
    { number: '02', name: 'Services', path: '/logistics/services' },
    { number: '03', name: 'Solutions', path: '/logistics/solutions' },
    { number: '04', name: 'Tracking', path: '/logistics/tracking' },
    { number: '05', name: 'About', path: '/logistics/about' },
    { number: '06', name: 'Contact', path: '/logistics/contact' },
  ];

  return (
    <div className="fixed inset-0 z-[60] lg:hidden">
      <div className="absolute inset-0 bg-lr-black">
        {/* Status Bar */}
        <div className="border-b border-lr-border px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 bg-lr-green rounded-full animate-pulse" />
            <span className="text-[10px] font-mono uppercase tracking-wider text-lr-off-white/70">
              {companyInfo.operationalStatus}
            </span>
          </div>
          <button onClick={onClose} className="text-lr-off-white/60 hover:text-lr-lime" aria-label="Close menu">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto px-6 py-8">
          <ul className="space-y-2">
            {navLinks.map(link => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  onClick={onClose}
                  className="group flex items-center justify-between py-4 border-b border-lr-border hover:border-lr-lime transition-colors"
                >
                  <span className="text-3xl font-bold text-lr-off-white group-hover:text-lr-lime transition-colors">
                    {link.name}
                  </span>
                  <span className="font-mono text-sm text-lr-off-white/40 group-hover:text-lr-lime transition-colors">
                    {link.number}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Bottom CTAs */}
        <div className="p-6 border-t border-lr-border space-y-3">
          <Link
            to="/logistics/contact"
            onClick={onClose}
            className="block w-full bg-lr-lime text-lr-black text-center px-6 py-4 font-semibold uppercase tracking-wider hover:bg-lr-lime-dark transition-colors"
          >
            Get a Quote
          </Link>
          <Link
            to="/logistics/tracking"
            onClick={onClose}
            className="block w-full border border-lr-border text-lr-off-white text-center px-6 py-4 font-semibold uppercase tracking-wider hover:border-lr-lime hover:text-lr-lime transition-colors"
          >
            Track Shipment
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LR_MobileMenu;