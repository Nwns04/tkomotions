import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { openBookingModal } from '../../hotel/components/BookingEnquiryModal';

function MobileMenu({ isOpen, onClose, demo }) {
  const isRestaurant = demo === 'restaurant';
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

  const restaurantLinks = [
    { name: 'Home', path: '/restaurant' },
    { name: 'Menu', path: '/restaurant/menu' },
    { name: 'About', path: '/restaurant/about' },
    { name: 'Gallery', path: '/restaurant/gallery' },
    { name: 'Private Dining', path: '/restaurant/private-dining' },
    { name: 'Reservations', path: '/restaurant/reservations' },
    { name: 'Contact', path: '/restaurant/contact' },
  ];

  const hotelLinks = [
    { name: 'Home', path: '/hotel' },
    { name: 'Rooms', path: '/hotel/rooms' },
    { name: 'Dining', path: '/hotel/dining' },
    { name: 'Amenities', path: '/hotel/amenities' },
    { name: 'Gallery', path: '/hotel/gallery' },
    { name: 'About', path: '/hotel/about' },
    { name: 'Contact', path: '/hotel/contact' },
  ];

  const navLinks = isRestaurant ? restaurantLinks : hotelLinks;

  const handleCTA = () => {
    onClose();
    if (isRestaurant) {
      // Use React Router navigation
      setTimeout(() => {
        navigate('/restaurant/reservations');
      }, 300);
    } else {
      setTimeout(() => {
        openBookingModal();
      }, 300);
    }
  };

  return (
    <div className="fixed inset-0 z-[60] lg:hidden">
      <div 
        className={`absolute inset-0 ${isRestaurant ? 'bg-ember-black/80' : 'bg-black/50'} backdrop-blur-sm`}
        onClick={onClose}
      />
      <div className={`absolute right-0 top-0 h-full w-full max-w-sm ${
        isRestaurant ? 'bg-ember-black' : 'bg-hotel-charcoal'
      } shadow-2xl`}>
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-6 border-b border-white/10">
            <span className={`font-serif text-xl ${isRestaurant ? 'text-cream' : 'text-white'}`}>
              Menu
            </span>
            <button
              onClick={onClose}
              className="text-white/70 hover:text-white transition-colors"
              aria-label="Close menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto py-8 px-6">
            <ul className="space-y-6">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    onClick={onClose}
                    className={`block text-3xl font-serif ${
                      isRestaurant 
                        ? 'text-cream hover:text-ember-orange' 
                        : 'text-white hover:text-hotel-champagne'
                    } transition-colors`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="p-6 border-t border-white/10">
            <button
              onClick={handleCTA}
              className={`w-full inline-flex items-center justify-center px-6 py-3 text-sm font-medium uppercase tracking-wide transition-all duration-300 ${
                isRestaurant
                  ? 'bg-ember-orange text-white hover:bg-flame'
                  : 'btn-hotel btn-hotel-primary'
              }`}
            >
              {isRestaurant ? 'Reserve a Table' : 'Book Now'}
            </button>
            <p className="mt-4 text-xs text-white/50 text-center">
              {isRestaurant 
                ? '© 2024 Ember. A fictional restaurant.'
                : '© 2024 Meridian House. A fictional luxury hotel.'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileMenu;