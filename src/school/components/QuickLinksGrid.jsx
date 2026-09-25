import { Link } from 'react-router-dom';
import { schoolInfo } from '../data/school';

function QuickLinksGrid() {
  const phone = schoolInfo.whatsapp.replace(/[^0-9]/g, '');
  const tourMessage = encodeURIComponent(`Hello ${schoolInfo.name}, I would like to book a school tour.`);
  const links = [
    { title: 'Admissions', description: 'Start an enquiry', path: '/school/admissions', external: false, icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' },
    { title: 'Book a Tour', description: 'Visit the campus', path: `https://wa.me/${phone}?text=${tourMessage}`, external: true, icon: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z' },
    { title: 'Parent Portal', description: 'Preview portal options', path: schoolInfo.portalLinks.parentPortal, external: false, icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z' },
    { title: 'Contact Us', description: 'Call, email or WhatsApp', path: '/school/contact', external: false, icon: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z' },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {links.map(link => {
        const classes = 'bg-white border border-slate/20 rounded-lg p-6 text-center hover:shadow-lg hover:border-deep-green transition-all duration-300 group';
        const content = <>
          <div className="w-16 h-16 bg-mint rounded-full flex items-center justify-center mx-auto mb-4 text-oak-green group-hover:bg-oak-green group-hover:text-white transition-colors duration-300">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={link.icon} /></svg>
          </div>
          <h3 className="font-semibold text-ink mb-1">{link.title}</h3>
          <p className="text-sm text-slate">{link.description}</p>
        </>;
        return link.external ? (
          <a key={link.title} href={link.path} target="_blank" rel="noreferrer" className={classes}>{content}</a>
        ) : (
          <Link key={link.title} to={link.path} className={classes}>{content}</Link>
        );
      })}
    </div>
  );
}

export default QuickLinksGrid;
