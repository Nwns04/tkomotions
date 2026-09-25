import { Link } from 'react-router-dom';
import { schoolInfo } from '../data/school';

function Sidebar({ title, links, showContact = true, showDownload = true }) {
  const phone = schoolInfo.whatsapp.replace(/[^0-9]/g, '');
  const checklist = encodeURIComponent(`Hello ${schoolInfo.name}, please send me the admissions checklist.`);
  return (
    <aside className="space-y-6">
      {links && <div className="bg-soft-gray rounded-lg p-6"><h3 className="font-serif font-bold text-ink mb-4">{title || 'Quick Links'}</h3><ul className="space-y-2">{links.map(link => <li key={link.path}><Link to={link.path} className="text-slate hover:text-deep-green transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-gold rounded-full mr-2" /><span>{link.label}</span></Link></li>)}</ul></div>}
      {showContact && <div className="bg-oak-green text-white rounded-lg p-6"><h3 className="font-serif font-bold mb-4">Admissions Office</h3><a href={`tel:${schoolInfo.phone.replace(/\s/g, '')}`} className="block text-sm text-white/80 mb-2 hover:text-white">{schoolInfo.phone}</a><a href={`mailto:${schoolInfo.email}`} className="block text-sm text-white/80 mb-2 hover:text-white break-all">{schoolInfo.email}</a><p className="text-sm text-white/80">{schoolInfo.officeHours}</p><Link to="/school/contact" className="mt-4 block w-full bg-white text-oak-green px-4 py-2 text-sm font-semibold rounded hover:bg-mint transition-colors text-center">Contact Us</Link></div>}
      {showDownload && <div className="bg-gold rounded-lg p-6"><h3 className="font-serif font-bold text-ink mb-2">Admissions Checklist</h3><p className="text-sm text-ink/70 mb-4">See how a prospectus or admissions guide can be offered directly from the site.</p><a href={`https://wa.me/${phone}?text=${checklist}`} target="_blank" rel="noreferrer" className="block w-full bg-ink text-white px-4 py-2 text-sm font-semibold rounded hover:bg-oak-green transition-colors text-center">Request Checklist</a></div>}
    </aside>
  );
}
export default Sidebar;
