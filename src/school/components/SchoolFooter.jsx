import { Link } from 'react-router-dom';
import { useState } from 'react';
import { schoolInfo } from '../data/school';

function SchoolFooter() {
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
    <footer className="bg-ink text-white">
      <div className="container-hotel py-16 px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-oak-green flex items-center justify-center">
                <span className="text-white font-serif font-bold text-lg">O</span>
              </div>
              <div>
                <span className="text-lg font-serif font-bold">CRESTFIELD</span>
                <p className="text-[10px] text-white/50 uppercase tracking-wider -mt-1">International School</p>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              Where children grow into who they are meant to be.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/school/about" className="text-white/60 hover:text-mint transition-colors">About</Link></li>
              <li><Link to="/school/academics" className="text-white/60 hover:text-mint transition-colors">Academics</Link></li>
              <li><Link to="/school/admissions" className="text-white/60 hover:text-mint transition-colors">Admissions</Link></li>
              <li><Link to="/school/school-life" className="text-white/60 hover:text-mint transition-colors">School Life</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-6">Programmes</h4>
            <ul className="space-y-3">
              <li><Link to="/school/nursery" className="text-white/60 hover:text-mint transition-colors">Nursery</Link></li>
              <li><Link to="/school/primary" className="text-white/60 hover:text-mint transition-colors">Primary</Link></li>
              <li><Link to="/school/secondary" className="text-white/60 hover:text-mint transition-colors">Secondary</Link></li>
              <li><Link to="/school/news" className="text-white/60 hover:text-mint transition-colors">News</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-6">Contact</h4>
            <ul className="space-y-3 text-white/60">
              <li>{schoolInfo.address}</li>
              <li className="pt-3">{schoolInfo.phone}</li>
              <li>{schoolInfo.email}</li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-6">Newsletter</h4>
            <p className="text-white/60 text-sm mb-4">Stay updated with school news.</p>
            {subscribed ? (
              <p className="text-mint text-sm">Thank you for subscribing.</p>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-mint transition-colors rounded"
                  required
                />
                <button type="submit" className="w-full bg-oak-green text-white px-6 py-3 text-sm font-semibold rounded hover:bg-deep-green transition-colors">
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <p className="text-xs text-white/40">© 2026 Crestfield Academy. All rights reserved.</p>
          <p className="text-xs text-white/40">A fictional school — Portfolio demonstration by TKO Motions</p>
        </div>
      </div>
    </footer>
  );
}

export default SchoolFooter;