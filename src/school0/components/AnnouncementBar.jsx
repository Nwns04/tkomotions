import { schoolInfo } from '../data/school';

function AnnouncementBar() {
  const announcements = schoolInfo.announcements;

  return (
    <div className="bg-gold text-ink overflow-hidden">
      <div className="container-hotel py-2 relative">
        <div className="flex items-center space-x-3 whitespace-nowrap animate-marquee">
          {announcements.map((announcement, index) => (
            <span key={index} className="flex items-center">
              <span className="text-sm">{announcement}</span>
              <span className="mx-4 text-oak-green">•</span>
            </span>
          ))}
          {announcements.map((announcement, index) => (
            <span key={`duplicate-${index}`} className="flex items-center">
              <span className="text-sm">{announcement}</span>
              <span className="mx-4 text-oak-green">•</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AnnouncementBar;