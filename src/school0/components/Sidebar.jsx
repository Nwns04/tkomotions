import { Link } from 'react-router-dom';
import { schoolInfo } from '../data/school';

function Sidebar({ title, links, showContact = true, showDownload = true }) {
  return (
    <aside className="space-y-6">
      {/* Quick Links */}
      {links && (
        <div className="bg-soft-gray rounded-lg p-6">
          <h3 className="font-serif font-bold text-ink mb-4">{title || 'Quick Links'}</h3>
          <ul className="space-y-2">
            {links.map(link => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className="text-slate hover:text-deep-green transition-colors flex items-center"
                >
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mr-2" />
                  <span>{link.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Contact Box */}
      {showContact && (
        <div className="bg-oak-green text-white rounded-lg p-6">
          <h3 className="font-serif font-bold mb-4">Admissions Office</h3>
          <p className="text-sm text-white/80 mb-2">{schoolInfo.phone}</p>
          <p className="text-sm text-white/80 mb-2">{schoolInfo.email}</p>
          <p className="text-sm text-white/80">{schoolInfo.officeHours}</p>
          <button className="mt-4 w-full bg-white text-oak-green px-4 py-2 text-sm font-semibold rounded hover:bg-mint transition-colors">
            Contact Us
          </button>
        </div>
      )}

      {/* Download Prospectus */}
      {showDownload && (
        <div className="bg-gold rounded-lg p-6">
          <h3 className="font-serif font-bold text-ink mb-2">Prospectus</h3>
          <p className="text-sm text-ink/70 mb-4">Download our 2025 prospectus to learn more.</p>
          <button className="w-full bg-ink text-white px-4 py-2 text-sm font-semibold rounded hover:bg-oak-green transition-colors">
            Download PDF
          </button>
        </div>
      )}
    </aside>
  );
}

export default Sidebar;