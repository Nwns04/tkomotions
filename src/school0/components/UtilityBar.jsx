import { schoolInfo } from '../data/school';

function UtilityBar() {
  return (
    <div className="bg-oak-green text-white text-xs">
      <div className="container-hotel py-2 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <span className="hidden md:inline">📞 {schoolInfo.phone}</span>
          <span className="hidden md:inline">✉️ {schoolInfo.email}</span>
        </div>
        <div className="flex items-center space-x-4">
          <a href="#" className="hover:text-sage transition-colors">Parent Portal</a>
          <span className="text-white/30">|</span>
          <a href="#" className="hover:text-sage transition-colors">Student Portal</a>
          <span className="text-white/30">|</span>
          <a href="#" className="hover:text-sage transition-colors">Staff Portal</a>
        </div>
      </div>
    </div>
  );
}

export default UtilityBar;