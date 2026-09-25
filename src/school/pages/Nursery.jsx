import Breadcrumbs from '../components/Breadcrumbs';
import Sidebar from '../components/Sidebar';
import { programs } from '../data/programs';

function Nursery() {
  const nursery = programs.nursery;
  const sidebarLinks = [
    { label: 'Overview', path: '/school/nursery#overview' },
    { label: 'Daily Routine', path: '/school/nursery#routine' },
    { label: 'Facilities', path: '/school/nursery#facilities' },
  ];

  const dailyRoutine = [
    { time: '8:00 AM', activity: 'Arrival and Free Play' },
    { time: '8:30 AM', activity: 'Morning Circle Time' },
    { time: '9:00 AM', activity: 'Learning Through Play' },
    { time: '10:00 AM', activity: 'Snack Time' },
    { time: '10:30 AM', activity: 'Outdoor Play' },
    { time: '11:30 AM', activity: 'Story Time' },
    { time: '12:00 PM', activity: 'Lunch' },
    { time: '1:00 PM', activity: 'Nap Time' },
    { time: '2:30 PM', activity: 'Creative Activities' },
    { time: '3:00 PM', activity: 'Home Time' },
  ];

  return (
    <div className="bg-school-cream">
      <div className="bg-oak-green text-white py-12">
        <div className="container-hotel px-4 md:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Programmes' }, { label: 'Nursery' }]} />
          <h1 className="text-4xl font-serif font-bold">Nursery</h1>
          <p className="text-sage mt-2">{nursery.ageRange}</p>
        </div>
      </div>

      <div className="container-hotel py-12 px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-1">
            <Sidebar title="In This Section" links={sidebarLinks} />
          </div>

          <div className="lg:col-span-3 space-y-16">
            <section id="overview">
              <h2 className="text-3xl font-serif font-bold text-ink mb-6">Overview</h2>
              <p className="text-slate leading-relaxed mb-6">{nursery.description}</p>
              <div className="bg-soft-gray rounded-lg p-6">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-slate mb-1">Curriculum</p>
                    <p className="font-medium text-ink">{nursery.curriculum}</p>
                  </div>
                  <div>
                    <p className="text-slate mb-1">Class Size</p>
                    <p className="font-medium text-ink">{nursery.classSize}</p>
                  </div>
                  <div>
                    <p className="text-slate mb-1">Teacher Ratio</p>
                    <p className="font-medium text-ink">{nursery.teacherRatio}</p>
                  </div>
                  <div>
                    <p className="text-slate mb-1">Hours</p>
                    <p className="font-medium text-ink">{nursery.hours}</p>
                  </div>
                </div>
              </div>
            </section>

            <section id="routine">
              <h2 className="text-3xl font-serif font-bold text-ink mb-6">Daily Routine</h2>
              <div className="bg-white border border-slate/20 rounded-lg">
                {dailyRoutine.map((item, index) => (
                  <div key={index} className="flex items-center px-6 py-3 border-b border-slate/10 last:border-0">
                    <span className="w-24 text-oak-green font-semibold text-sm">{item.time}</span>
                    <span className="text-ink">{item.activity}</span>
                  </div>
                ))}
              </div>
            </section>

            <section id="facilities">
              <h2 className="text-3xl font-serif font-bold text-ink mb-6">Facilities</h2>
              <div className="flex flex-wrap gap-3">
                {nursery.facilities.map(facility => (
                  <span key={facility} className="bg-mint text-oak-green px-4 py-2 rounded-full text-sm">
                    {facility}
                  </span>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nursery;