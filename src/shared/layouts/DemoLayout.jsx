import { Outlet, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Navbar from '../navigation/Navbar';
import Footer from '../footer/Footer';
import MobileMenu from '../navigation/MobileMenu';
import HotelScrollProgress from '../../hotel/components/ScrollProgress';
import HotelPreloader from '../../hotel/components/Preloader';
import HotelCustomCursor from '../../hotel/components/CustomCursor';
import BookingEnquiryModal from '../../hotel/components/BookingEnquiryModal';
import RestaurantPreloader from '../../restaurant/components/Preloader';
import RestaurantWhatsAppCTA from '../../restaurant/components/WhatsAppCTA';
import { PageTransition } from '../animations/PageTransition';

function DemoLayout({ demo }) {
  const [isLoading, setIsLoading] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isRestaurant = demo === 'restaurant';

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  if (isLoading) {
    return isRestaurant ? <RestaurantPreloader /> : <HotelPreloader />;
  }

  return (
    <div className={`min-h-screen ${isRestaurant ? 'bg-ember-black' : 'bg-hotel-stone'}`}>
      {!isRestaurant && <HotelCustomCursor />}
      <HotelScrollProgress />
      <Navbar 
        demo={demo}
        onMenuClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        isMenuOpen={mobileMenuOpen}
      />
      <MobileMenu 
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        demo={demo}
      />
      <PageTransition>
        <main>
          <Outlet />
        </main>
      </PageTransition>
      <Footer demo={demo} />
      
      {/* Demo-specific modals and CTAs */}
      {!isRestaurant && <BookingEnquiryModal />}
      {isRestaurant && <RestaurantWhatsAppCTA />}
    </div>
  );
}

export default DemoLayout;