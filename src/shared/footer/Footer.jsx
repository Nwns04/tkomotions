import { Link } from 'react-router-dom';
import { useState } from 'react';
import { restaurantInfo } from '../../restaurant/data/restaurant';

function Footer({ demo }) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const isRestaurant = demo === 'restaurant';

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  // Restaurant Footer
  if (isRestaurant) {
    return (
      <footer className="bg-charcoal text-cream">
        <div className="container-hotel py-16 px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand */}
            <div>
              <h3 className="text-2xl font-serif font-bold tracking-widest mb-6 text-cream">EMBER</h3>
              <p className="text-ash text-sm leading-relaxed mb-6">
                Contemporary African Kitchen. Where fire meets flavour.
              </p>
              <div className="flex space-x-4">
                <a href={restaurantInfo.social.instagram} className="text-ash hover:text-ember-orange transition-colors" aria-label="Instagram">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href={restaurantInfo.social.facebook} className="text-ash hover:text-ember-orange transition-colors" aria-label="Facebook">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider mb-6 text-cream">Explore</h4>
              <ul className="space-y-3">
                <li><Link to="/restaurant/menu" className="text-ash hover:text-ember-orange transition-colors">Menu</Link></li>
                <li><Link to="/restaurant/about" className="text-ash hover:text-ember-orange transition-colors">About</Link></li>
                <li><Link to="/restaurant/gallery" className="text-ash hover:text-ember-orange transition-colors">Gallery</Link></li>
                <li><Link to="/restaurant/private-dining" className="text-ash hover:text-ember-orange transition-colors">Private Dining</Link></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider mb-6 text-cream">Contact</h4>
              <ul className="space-y-3 text-ash">
                <li>{restaurantInfo.address}</li>
                <li className="pt-3">{restaurantInfo.phone}</li>
                <li>{restaurantInfo.email}</li>
                <li className="pt-3">
                  <a 
                    href={`https://wa.me/${restaurantInfo.whatsapp.replace(/[^0-9]/g, '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-ash hover:text-ember-orange transition-colors"
                  >
                    WhatsApp Us
                  </a>
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider mb-6 text-cream">Newsletter</h4>
              <p className="text-ash text-sm mb-4">
                Seasonal menus, events, and news from the kitchen.
              </p>
              {subscribed ? (
                <p className="text-ember-orange text-sm">Thank you for subscribing.</p>
              ) : (
                <form onSubmit={handleSubscribe} className="space-y-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 text-cream placeholder-ash/50 focus:outline-none focus:border-ember-orange transition-colors"
                    required
                  />
                  <button type="submit" className="w-full bg-ember-orange text-white hover:bg-flame px-6 py-3 text-sm font-medium tracking-wide uppercase transition-all duration-300">
                    Subscribe
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="text-xs text-ash/60">
              © 2024 Ember. All rights reserved.
            </p>
            <p className="text-xs text-ash/60">
              A fictional restaurant — Portfolio demonstration by TKO Motions
            </p>
          </div>
        </div>
      </footer>
    );
  }

  // Hotel Footer (Original)
  return (
    <footer className="bg-hotel-charcoal text-white">
      <div className="container-hotel py-16 px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <span className="text-xl font-serif font-medium">MERIDIAN</span>
              <span className="w-1.5 h-1.5 bg-hotel-bronze rotate-45" />
              <span className="text-xl font-serif font-medium">HOUSE</span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              A fictional luxury hotel nestled in the heart of Ikoyi, Lagos. 
              Where modern comfort meets timeless elegance.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/60 hover:text-hotel-bronze transition-colors" aria-label="Instagram">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="#" className="text-white/60 hover:text-hotel-bronze transition-colors" aria-label="Facebook">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-6">Explore</h4>
            <ul className="space-y-3">
              <li><Link to="/hotel/rooms" className="text-white/60 hover:text-hotel-bronze transition-colors">Rooms & Suites</Link></li>
              <li><Link to="/hotel/dining" className="text-white/60 hover:text-hotel-bronze transition-colors">Dining</Link></li>
              <li><Link to="/hotel/amenities" className="text-white/60 hover:text-hotel-bronze transition-colors">Amenities</Link></li>
              <li><Link to="/hotel/gallery" className="text-white/60 hover:text-hotel-bronze transition-colors">Gallery</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-6">Contact</h4>
            <ul className="space-y-3 text-white/60">
              <li>14 Meridian Close</li>
              <li>Old Ikoyi, Lagos</li>
              <li>Nigeria</li>
              <li className="pt-3">+234 000 000 0000</li>
              <li>reservations@meridianhouse.ng</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-6">Newsletter</h4>
            <p className="text-white/60 text-sm mb-4">
              Subscribe for seasonal offers and news from the house.
            </p>
            {subscribed ? (
              <p className="text-hotel-bronze text-sm">Thank you for subscribing.</p>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-hotel-bronze transition-colors"
                  required
                />
                <button type="submit" className="btn-hotel btn-hotel-primary w-full text-xs">
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <p className="text-xs text-white/40">
            © 2024 Meridian House. All rights reserved.
          </p>
          <p className="text-xs text-white/40">
            A fictional luxury hotel — Portfolio demonstration by TKO Motions
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-xs text-white/40 hover:text-hotel-bronze transition-colors">Privacy</a>
            <a href="#" className="text-xs text-white/40 hover:text-hotel-bronze transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;