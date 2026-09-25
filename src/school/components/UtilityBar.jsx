import { Link } from 'react-router-dom';
import { schoolInfo } from '../data/school';

function UtilityBar() {
  return (
    <div className="bg-oak-green text-white text-xs">
      <div className="container-hotel py-2 flex items-center justify-between gap-4">
        <div className="flex items-center space-x-4 min-w-0">
          <a href={`tel:${schoolInfo.phone.replace(/\s/g, '')}`} className="hidden md:inline hover:text-sage transition-colors">📞 {schoolInfo.phone}</a>
          <a href={`mailto:${schoolInfo.email}`} className="hidden md:inline hover:text-sage transition-colors truncate">✉️ {schoolInfo.email}</a>
          <span className="md:hidden text-white/80">Admissions & enquiries</span>
        </div>
        <div className="flex items-center space-x-3 md:space-x-4">
          <Link to={schoolInfo.portalLinks.parentPortal} className="hover:text-sage transition-colors">Parent Portal</Link>
          <span className="text-white/30">|</span>
          <Link to={schoolInfo.portalLinks.studentPortal} className="hover:text-sage transition-colors">Student Portal</Link>
          <span className="hidden sm:inline text-white/30">|</span>
          <Link to={schoolInfo.portalLinks.staffPortal} className="hidden sm:inline hover:text-sage transition-colors">Staff Portal</Link>
        </div>
      </div>
    </div>
  );
}

export default UtilityBar;
