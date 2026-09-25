import { Link } from 'react-router-dom';
import { companyInfo } from '../data/company';
import { locations } from '../data/locations';

function RE_Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-1 mb-6">
              <span className="text-xl font-bold">APEX</span>
              <span className="text-xs text-white/60 uppercase tracking-wider">Properties Abuja</span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Abuja's premier real estate agency. We help you find, buy, rent, and sell properties with confidence.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/real-estate/properties" className="text-white/60 hover:text-gold transition-colors">All Properties</Link></li>
              <li><Link to="/real-estate/buy" className="text-white/60 hover:text-gold transition-colors">Buy</Link></li>
              <li><Link to="/real-estate/rent" className="text-white/60 hover:text-gold transition-colors">Rent</Link></li>
              <li><Link to="/real-estate/commercial" className="text-white/60 hover:text-gold transition-colors">Commercial</Link></li>
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-6">Popular Areas</h4>
            <ul className="space-y-3">
              {locations.slice(0, 5).map(loc => (
                <li key={loc.id}>
                  <Link to={`/real-estate/properties?location=${loc.name.toLowerCase()}`} className="text-white/60 hover:text-gold transition-colors">
                    {loc.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-6">Contact</h4>
            <ul className="space-y-3 text-white/60">
              <li>{companyInfo.address}</li>
              <li className="pt-3">{companyInfo.phone}</li>
              <li>{companyInfo.email}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <p className="text-xs text-white/40">© 2024 Apex Properties Abuja. All rights reserved.</p>
          <p className="text-xs text-white/40">A fictional real estate agency — Portfolio demonstration by TKO Motions</p>
        </div>
      </div>
    </footer>
  );
}

export default RE_Footer;