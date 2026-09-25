import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { openBookingModal } from '../../hotel/components/BookingEnquiryModal';

function Navbar({ demo, onMenuClick, isMenuOpen }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === `/${demo}`;
  const isRestaurant = demo === 'restaurant';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const restaurantLinks = [
    { name: 'Menu', path: '/restaurant/menu' },
    { name: 'About', path: '/restaurant/about' },
    { name: 'Gallery', path: '/restaurant/gallery' },
    { name: 'Private Dining', path: '/restaurant/private-dining' },
    { name: 'Contact', path: '/restaurant/contact' },
  ];

  const hotelLinks = [
    { name: 'Rooms', path: '/hotel/rooms' },
    { name: 'Dining', path: '/hotel/dining' },
    { name: 'Amenities', path: '/hotel/amenities' },
    { name: 'Gallery', path: '/hotel/gallery' },
    { name: 'About', path: '/hotel/about' },
    { name: 'Contact', path: '/hotel/contact' },
  ];

  const navLinks = isRestaurant ? restaurantLinks : hotelLinks;

  const textColor = isRestaurant
    ? 'text-cream'
    : isHome && !isScrolled ? 'text-white' : 'text-hotel-ink';
  
  const bgColor = isRestaurant
    ? isScrolled ? 'bg-ember-black/95 backdrop-blur-md shadow-lg shadow-black/20' : 'bg-transparent'
    : isHome && !isScrolled 
      ? 'bg-transparent' 
      : 'bg-white/95 backdrop-blur-md shadow-lg shadow-black/5';

  const logoColor = isRestaurant ? 'text-cream' : textColor;
  const diamondColor = isRestaurant ? 'bg-ember-orange' : 'bg-hotel-bronze';
  const hoverColor = isRestaurant ? 'hover:text-ember-orange' : 'hover:text-hotel-bronze';
  const underlineColor = isRestaurant ? 'bg-ember-orange' : 'bg-hotel-bronze';

  const handleCTA = () => {
    if (isRestaurant) {
      // Use React Router navigation instead of window.location.href
      navigate('/restaurant/reservations');
    } else {
      openBookingModal();
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${bgColor}`}>
      <nav className="container-hotel">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to={`/${demo}`} className="flex items-center space-x-2">
            {isRestaurant ? (
              <span className="text-2xl md:text-3xl font-serif font-bold tracking-widest text-cream">
                EMBER
              </span>
            ) : (
              <>
                <span className={`text-xl md:text-2xl font-serif font-medium transition-colors ${logoColor}`}>
                  MERIDIAN
                </span>
                <span className={`w-1.5 h-1.5 ${diamondColor} rotate-45`} />
                <span className={`text-xl md:text-2xl font-serif font-medium transition-colors ${logoColor}`}>
                  HOUSE
                </span>
              </>
            )}
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`relative text-sm font-medium tracking-wide transition-colors group ${textColor} ${hoverColor}`}
              >
                {link.name}
                <span className={`absolute -bottom-1 left-0 w-0 h-px ${underlineColor} transition-all duration-300 group-hover:w-full`} />
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <button
            onClick={handleCTA}
            className={`hidden lg:inline-flex text-xs px-6 py-2.5 font-medium uppercase tracking-wide transition-all duration-300 ${
              isRestaurant
                ? 'bg-ember-orange text-white hover:bg-flame'
                : 'btn-hotel btn-hotel-primary'
            }`}
          >
            {isRestaurant ? 'Reserve' : 'Book Now'}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={onMenuClick}
            className="lg:hidden relative w-10 h-10 flex items-center justify-center rounded-full border border-white/20"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className={`block w-full h-[2px] transition-all duration-300 ${
                isMenuOpen ? 'rotate-45 translate-y-2' : ''
              } ${isRestaurant ? 'bg-ember-orange' : 'bg-hotel-bronze'}`} />
              <span className={`block w-full h-[2px] transition-all duration-300 ${
                isMenuOpen ? 'opacity-0' : ''
              } ${isRestaurant ? 'bg-ember-orange' : 'bg-hotel-bronze'}`} />
              <span className={`block w-full h-[2px] transition-all duration-300 ${
                isMenuOpen ? '-rotate-45 -translate-y-2' : ''
              } ${isRestaurant ? 'bg-ember-orange' : 'bg-hotel-bronze'}`} />
            </div>
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;