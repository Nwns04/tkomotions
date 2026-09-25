import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function SchoolMobileMenu({ isOpen, onClose }) {
  const navigate = useNavigate();

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
    { name: 'Home', path: '/school' },
    { name: 'About', path: '/school/about' },
    { name: 'Academics', path: '/school/academics' },
    { name: 'Nursery', path: '/school/nursery' },
    { name: 'Primary', path: '/school/primary' },
    { name: 'Secondary', path: '/school/secondary' },
    { name: 'Admissions', path: '/school/admissions' },
    { name: 'School Life', path: '/school/school-life' },
    { name: 'News', path: '/school/news' },
    { name: 'Contact', path: '/school/contact' },
  ];

  return (
    <div className="fixed inset-0 z-[60] lg:hidden">
      <div className="absolute inset-0 bg-ink/50 backdrop-blur-sm" onClick={onClose} />
      <div className="absolute right-0 top-0 h-full w-full max-w-sm bg-white shadow-2xl">
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-6 border-b border-slate/10">
            <span className="font-serif text-xl font-bold text-ink">Menu</span>
            <button onClick={onClose} className="text-slate hover:text-ink transition-colors" aria-label="Close menu">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto py-8 px-6">
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    onClick={onClose}
                    className="block text-2xl font-serif text-ink hover:text-deep-green transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="p-6 border-t border-slate/10">
            <button
              onClick={() => { onClose(); navigate('/school/admissions'); }}
              className="w-full bg-oak-green text-white px-6 py-3 text-sm font-semibold uppercase tracking-wide rounded hover:bg-deep-green transition-colors"
            >
              Apply Now
            </button>
            <p className="mt-4 text-xs text-slate text-center">
              © 2026 Crestfield Academy
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SchoolMobileMenu;