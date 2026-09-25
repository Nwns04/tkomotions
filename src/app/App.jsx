import { BrowserRouter as Router, Routes, Route, Navigate, useLocation, Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { BookingProvider } from '../hotel/context/BookingContext';
import { ReservationProvider } from '../restaurant/context/ReservationContext';
import { AdmissionsProvider } from '../school/context/AdmissionsContext';
import { PropertyProvider } from '../real-estate/context/PropertyContext';
import { LogisticsProvider } from '../logistics/context/LogisticsContext';
import DemoLayout from '../shared/layouts/DemoLayout';
import DemoHome from './DemoHome';

// Hotel Pages
import HotelHome from '../hotel/pages/Home';
import HotelRooms from '../hotel/pages/Rooms';
import HotelRoomDetails from '../hotel/pages/RoomDetails';
import HotelDining from '../hotel/pages/Dining';
import HotelAmenities from '../hotel/pages/Amenities';
import HotelGallery from '../hotel/pages/Gallery';
import HotelAbout from '../hotel/pages/About';
import HotelContact from '../hotel/pages/Contact';

// Restaurant Pages
import RestaurantHome from '../restaurant/pages/Home';
import RestaurantMenu from '../restaurant/pages/Menu';
import RestaurantAbout from '../restaurant/pages/About';
import RestaurantGallery from '../restaurant/pages/Gallery';
import RestaurantPrivateDining from '../restaurant/pages/PrivateDining';
import RestaurantReservations from '../restaurant/pages/Reservations';
import RestaurantContact from '../restaurant/pages/Contact';

// School Pages
import SchoolHome from '../school/pages/Home';
import SchoolAbout from '../school/pages/About';
import SchoolAcademics from '../school/pages/Academics';
import SchoolNursery from '../school/pages/Nursery';
import SchoolPrimary from '../school/pages/Primary';
import SchoolSecondary from '../school/pages/Secondary';
import SchoolAdmissions from '../school/pages/Admissions';
import SchoolLife from '../school/pages/SchoolLife';
import SchoolNews from '../school/pages/News';
import SchoolContact from '../school/pages/Contact';

// School Components
import SchoolNavbar from '../school/components/SchoolNavbar';
import SchoolMobileMenu from '../school/components/SchoolMobileMenu';
import SchoolFooter from '../school/components/SchoolFooter';
import SchoolPreloader from '../school/components/SchoolPreloader';
import SchoolScrollProgress from '../school/components/SchoolScrollProgress';
import SchoolWhatsAppCTA from '../school/components/SchoolWhatsAppCTA';

// Real Estate Pages
import RE_Home from '../real-estate/pages/Home';
import RE_Properties from '../real-estate/pages/Properties';
import RE_PropertyDetails from '../real-estate/pages/PropertyDetails';
import RE_Buy from '../real-estate/pages/Buy';
import RE_Rent from '../real-estate/pages/Rent';
import RE_Commercial from '../real-estate/pages/Commercial';
import RE_Agents from '../real-estate/pages/Agents';
import RE_About from '../real-estate/pages/About';
import RE_Contact from '../real-estate/pages/Contact';
import RE_ListProperty from '../real-estate/pages/ListProperty';

// Real Estate Components
import RE_Navbar from '../real-estate/components/RE_Navbar';
import RE_MobileMenu from '../real-estate/components/RE_MobileMenu';
import RE_Footer from '../real-estate/components/RE_Footer';
import RE_WhatsAppButton from '../real-estate/components/RE_WhatsAppButton';

// Logistics Pages
import LR_Home from '../logistics/pages/Home';
import LR_Services from '../logistics/pages/Services';
import LR_SameDayDelivery from '../logistics/pages/SameDayDelivery';
import LR_InterstateDelivery from '../logistics/pages/InterstateDelivery';
import LR_CorporateLogistics from '../logistics/pages/CorporateLogistics';
import LR_Warehousing from '../logistics/pages/Warehousing';
import LR_Solutions from '../logistics/pages/Solutions';
import LR_Tracking from '../logistics/pages/Tracking';
import LR_About from '../logistics/pages/About';
import LR_Contact from '../logistics/pages/Contact';

// Logistics Components
import LR_Navbar from '../logistics/components/LR_Navbar';
import LR_MobileMenu from '../logistics/components/LR_MobileMenu';
import LR_Footer from '../logistics/components/LR_Footer';
import LR_WhatsAppCTA from '../logistics/components/LR_WhatsAppCTA';

// Clinic Pages
import ClinicHome from '../clinic/pages/Home';
import ClinicAbout from '../clinic/pages/About';
import ClinicServices from '../clinic/pages/Services';
import ClinicDoctors from '../clinic/pages/Doctors';
import ClinicDepartments from '../clinic/pages/Departments';
import ClinicHealthResources from '../clinic/pages/HealthResources';
import ClinicAppointment from '../clinic/pages/Appointment';
import ClinicContact from '../clinic/pages/Contact';
import { ClinicProvider } from '../clinic/context/ClinicContext';
import MC_Navbar from '../clinic/components/MC_Navbar';
import MC_MobileMenu from '../clinic/components/MC_MobileMenu';
import MC_Footer from '../clinic/components/MC_Footer';
import MC_EmergencyBar from '../clinic/components/MC_EmergencyBar';
import MC_WhatsAppCTA from '../clinic/components/MC_WhatsAppCTA';

// Law Firm Pages
import LawFirmLayout from '../law-firm/components/LF_Layout';
import LawFirmHome from '../law-firm/pages/Home';
import { PracticeAreas, PracticeDetail } from '../law-firm/pages/PracticeAreas';
import { People, PersonDetail } from '../law-firm/pages/People';
import { Insights, InsightDetail } from '../law-firm/pages/Insights';
import LawFirmAbout from '../law-firm/pages/About';
import LawFirmCareers from '../law-firm/pages/Careers';
import LawFirmContact from '../law-firm/pages/Contact';

import { demoRegistry } from './demoRegistry';

function App() {
  return (
    <Router>
      <Routes>
        {/* Demo Registry Home */}
        <Route path="/" element={<DemoHome />} />
        
        {/* Hotel Demo */}
        <Route
          path="/hotel/*"
          element={
            <BookingProvider>
              <DemoLayout demo="hotel" />
            </BookingProvider>
          }
        >
          <Route index element={<HotelHome />} />
          <Route path="rooms" element={<HotelRooms />} />
          <Route path="rooms/:roomId" element={<HotelRoomDetails />} />
          <Route path="dining" element={<HotelDining />} />
          <Route path="amenities" element={<HotelAmenities />} />
          <Route path="gallery" element={<HotelGallery />} />
          <Route path="about" element={<HotelAbout />} />
          <Route path="contact" element={<HotelContact />} />
        </Route>
        
        {/* Restaurant Demo */}
        <Route
          path="/restaurant/*"
          element={
            <ReservationProvider>
              <DemoLayout demo="restaurant" />
            </ReservationProvider>
          }
        >
          <Route index element={<RestaurantHome />} />
          <Route path="menu" element={<RestaurantMenu />} />
          <Route path="about" element={<RestaurantAbout />} />
          <Route path="gallery" element={<RestaurantGallery />} />
          <Route path="private-dining" element={<RestaurantPrivateDining />} />
          <Route path="reservations" element={<RestaurantReservations />} />
          <Route path="contact" element={<RestaurantContact />} />
        </Route>
        
        {/* School Demo - Custom Layout */}
        <Route path="/school/*" element={<SchoolLayout />}>
          <Route index element={<SchoolHome />} />
          <Route path="about" element={<SchoolAbout />} />
          <Route path="academics" element={<SchoolAcademics />} />
          <Route path="nursery" element={<SchoolNursery />} />
          <Route path="primary" element={<SchoolPrimary />} />
          <Route path="secondary" element={<SchoolSecondary />} />
          <Route path="admissions" element={<SchoolAdmissions />} />
          <Route path="school-life" element={<SchoolLife />} />
          <Route path="news" element={<SchoolNews />} />
          <Route path="contact" element={<SchoolContact />} />
        </Route>
        
        {/* Real Estate Demo - Custom Layout */}
        <Route path="/real-estate/*" element={<RealEstateLayout />}>
          <Route index element={<RE_Home />} />
          <Route path="properties" element={<RE_Properties />} />
          <Route path="property/:slug" element={<RE_PropertyDetails />} />
          <Route path="buy" element={<RE_Buy />} />
          <Route path="rent" element={<RE_Rent />} />
          <Route path="commercial" element={<RE_Commercial />} />
          <Route path="agents" element={<RE_Agents />} />
          <Route path="about" element={<RE_About />} />
          <Route path="contact" element={<RE_Contact />} />
          <Route path="list-property" element={<RE_ListProperty />} />
        </Route>
        
        {/* Logistics Demo - Custom Layout */}
        <Route path="/logistics/*" element={<LogisticsLayout />}>
          <Route index element={<LR_Home />} />
          <Route path="services" element={<LR_Services />} />
          <Route path="services/same-day-delivery" element={<LR_SameDayDelivery />} />
          <Route path="services/interstate-delivery" element={<LR_InterstateDelivery />} />
          <Route path="services/corporate-logistics" element={<LR_CorporateLogistics />} />
          <Route path="services/warehousing" element={<LR_Warehousing />} />
          <Route path="solutions" element={<LR_Solutions />} />
          <Route path="tracking" element={<LR_Tracking />} />
          <Route path="about" element={<LR_About />} />
          <Route path="contact" element={<LR_Contact />} />
        </Route>
        
        {/* Clinic Demo - Custom Layout */}
        <Route path="/clinic/*" element={<ClinicLayout />}>
          <Route index element={<ClinicHome />} />
          <Route path="about" element={<ClinicAbout />} />
          <Route path="services" element={<ClinicServices />} />
          <Route path="doctors" element={<ClinicDoctors />} />
          <Route path="departments" element={<ClinicDepartments />} />
          <Route path="health-resources" element={<ClinicHealthResources />} />
          <Route path="appointment" element={<ClinicAppointment />} />
          <Route path="contact" element={<ClinicContact />} />
        </Route>

        {/* Law Firm Demo - Matter Routing Dossier */}
        <Route path="/law-firm/*" element={<LawFirmLayout />}>
          <Route index element={<LawFirmHome />} />
          <Route path="practice-areas" element={<PracticeAreas />} />
          <Route path="practice-areas/:slug" element={<PracticeDetail />} />
          <Route path="people" element={<People />} />
          <Route path="people/:slug" element={<PersonDetail />} />
          <Route path="insights" element={<Insights />} />
          <Route path="insights/:slug" element={<InsightDetail />} />
          <Route path="about" element={<LawFirmAbout />} />
          <Route path="careers" element={<LawFirmCareers />} />
          <Route path="contact" element={<LawFirmContact />} />
        </Route>

        {/* Coming Soon Routes */}
        <Route path="/construction" element={<ComingSoon demo="construction" />} />
        <Route path="/beauty" element={<ComingSoon demo="beauty" />} />
        <Route path="/ecommerce" element={<ComingSoon demo="ecommerce" />} />
        
        {/* 404 */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

// School Layout Component
function SchoolLayout() {
  const [isLoading, setIsLoading] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  if (isLoading) return <SchoolPreloader />;

  return (
    <AdmissionsProvider>
      <div className="min-h-screen bg-school-cream">
        <SchoolScrollProgress />
        <SchoolNavbar onMenuClick={() => setMobileMenuOpen(!mobileMenuOpen)} isMenuOpen={mobileMenuOpen} />
        <SchoolMobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
        <main>
          <Outlet />
        </main>
        <SchoolFooter />
        <SchoolWhatsAppCTA />
      </div>
    </AdmissionsProvider>
  );
}

// Real Estate Layout Component
function RealEstateLayout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <PropertyProvider>
      <div className="min-h-screen bg-light-gray">
        <RE_Navbar 
          onMenuClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
          isMenuOpen={mobileMenuOpen} 
        />
        <RE_MobileMenu 
          isOpen={mobileMenuOpen} 
          onClose={() => setMobileMenuOpen(false)} 
        />
        <main>
          <Outlet />
        </main>
        <RE_Footer />
        <RE_WhatsAppButton />
      </div>
    </PropertyProvider>
  );
}

// Logistics Layout Component
function LogisticsLayout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <LogisticsProvider>
      <div className="min-h-screen bg-lr-black">
        <LR_Navbar onMenuClick={() => setMobileMenuOpen(!mobileMenuOpen)} isMenuOpen={mobileMenuOpen} />
        <LR_MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
        <main>
          <Outlet />
        </main>
        <LR_Footer />
        <LR_WhatsAppCTA />
      </div>
    </LogisticsProvider>
  );
}

function ClinicLayout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'MediCore Abuja — Private Medical Care';
  }, [location.pathname]);

  return (
    <ClinicProvider>
      <div className="min-h-screen bg-[#FAFAF8]">
        <MC_EmergencyBar />
        <MC_Navbar onMenuClick={() => setMobileMenuOpen(!mobileMenuOpen)} isMenuOpen={mobileMenuOpen} />
        <MC_MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
        <main><Outlet /></main>
        <MC_Footer />
        <MC_WhatsAppCTA />
      </div>
    </ClinicProvider>
  );
}

function ComingSoon({ demo }) {
  const demoInfo = demoRegistry[demo];
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <h1 className="text-4xl font-serif mb-4">{demoInfo?.name || demo}</h1>
        <p className="text-gray-600 mb-8">Coming Soon</p>
        <a href="/" className="text-blue-600 hover:text-blue-800">
          ← Back to All Demos
        </a>
      </div>
    </div>
  );
}

export default App;