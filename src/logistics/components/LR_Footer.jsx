import { Link } from 'react-router-dom';
import { useState } from 'react';
import { companyInfo } from '../data/company';

function LR_Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <footer className="bg-lr-black text-lr-off-white border-t border-lr-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Top */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <p className="text-xl font-bold tracking-tight">SWIFTROUTE</p>
              <p className="text-[10px] font-mono uppercase tracking-widest text-lr-lime mt-1">Logistics</p>
            </div>
            <p className="text-lr-off-white/60 text-sm leading-relaxed mb-6">
              {companyInfo.tagline}. Technology-driven logistics and fulfillment across Nigeria.
            </p>
            <div className="flex items-center space-x-2 mb-6">
              <span className="w-2 h-2 bg-lr-green rounded-full animate-pulse" />
              <span className="text-[10px] font-mono uppercase tracking-wider text-lr-off-white/60">
                Operational · {companyInfo.headquarters}
              </span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-6 text-lr-lime">Services</h4>
            <ul className="space-y-3">
              <li><Link to="/logistics/services/same-day-delivery" className="text-lr-off-white/60 hover:text-lr-lime transition-colors text-sm">Same-Day Delivery</Link></li>
              <li><Link to="/logistics/services/interstate-delivery" className="text-lr-off-white/60 hover:text-lr-lime transition-colors text-sm">Interstate Delivery</Link></li>
              <li><Link to="/logistics/services/corporate-logistics" className="text-lr-off-white/60 hover:text-lr-lime transition-colors text-sm">Corporate Logistics</Link></li>
              <li><Link to="/logistics/services/warehousing" className="text-lr-off-white/60 hover:text-lr-lime transition-colors text-sm">Warehousing</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-6 text-lr-lime">Company</h4>
            <ul className="space-y-3">
              <li><Link to="/logistics/about" className="text-lr-off-white/60 hover:text-lr-lime transition-colors text-sm">About</Link></li>
              <li><Link to="/logistics/solutions" className="text-lr-off-white/60 hover:text-lr-lime transition-colors text-sm">Solutions</Link></li>
              <li><Link to="/logistics/tracking" className="text-lr-off-white/60 hover:text-lr-lime transition-colors text-sm">Tracking</Link></li>
              <li><Link to="/logistics/contact" className="text-lr-off-white/60 hover:text-lr-lime transition-colors text-sm">Contact</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-6 text-lr-lime">Stay Updated</h4>
            <p className="text-lr-off-white/60 text-sm mb-4">Get logistics insights and updates.</p>
            {subscribed ? (
              <p className="text-lr-lime text-sm">Thank you for subscribing.</p>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  className="w-full px-4 py-3 bg-lr-surface border border-lr-border text-lr-off-white placeholder-lr-off-white/40 focus:outline-none focus:border-lr-lime transition-colors"
                  required
                />
                <button type="submit" className="w-full bg-lr-lime text-lr-black px-6 py-3 text-sm font-semibold uppercase tracking-wider hover:bg-lr-lime-dark transition-colors">
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Contact Bar */}
        <div className="border-t border-lr-border py-6 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 mb-8">
          <p className="text-sm text-lr-off-white/60">{companyInfo.address}</p>
          <p className="text-sm text-lr-off-white/60">{companyInfo.phone}</p>
          <p className="text-sm text-lr-off-white/60">{companyInfo.email}</p>
        </div>

        {/* Bottom */}
        <div className="border-t border-lr-border pt-6 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <p className="text-xs text-lr-off-white/40">© 2024 SwiftRoute Logistics. All rights reserved.</p>
          <p className="text-xs text-lr-off-white/30">SwiftRoute Logistics is a fictional portfolio concept created by TKO Motions.</p>
        </div>
      </div>
    </footer>
  );
}

export default LR_Footer;