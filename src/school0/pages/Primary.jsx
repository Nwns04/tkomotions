import Breadcrumbs from '../components/Breadcrumbs';
import Sidebar from '../components/Sidebar';
import { programs } from '../data/programs';

function Primary() {
  const primary = programs.primary;
  const sidebarLinks = [
    { label: 'Overview', path: '/school/primary#overview' },
    { label: 'Key Features', path: '/school/primary#features' },
    { label: 'Facilities', path: '/school/primary#facilities' },
  ];

  return (
    <div className="bg-school-cream">
      <div className="bg-oak-green text-white py-12">
        <div className="container-hotel px-4 md:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Programmes' }, { label: 'Primary' }]} />
          <h1 className="text-4xl font-serif font-bold">Primary</h1>
          <p className="text-sage mt-2">{primary.ageRange}</p>
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
              <p className="text-slate leading-relaxed mb-6">{primary.description}</p>
              <div className="bg-soft-gray rounded-lg p-6">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-slate mb-1">Curriculum</p>
                    <p className="font-medium text-ink">{primary.curriculum}</p>
                  </div>
                  <div>
                    <p className="text-slate mb-1">Class Size</p>
                    <p className="font-medium text-ink">{primary.classSize}</p>
                  </div>
                  <div>
                    <p className="text-slate mb-1">Teacher Ratio</p>
                    <p className="font-medium text-ink">{primary.teacherRatio}</p>
                  </div>
                  <div>
                    <p className="text-slate mb-1">Hours</p>
                    <p className="font-medium text-ink">{primary.hours}</p>
                  </div>
                </div>
              </div>
            </section>

            <section id="features">
              <h2 className="text-3xl font-serif font-bold text-ink mb-6">Key Features</h2>
              <ul className="space-y-3">
                {primary.features.map(feature => (
                  <li key={feature} className="flex items-start text-slate">
                    <span className="w-1.5 h-1.5 bg-gold rounded-full mt-1.5 mr-3 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section id="facilities">
              <h2 className="text-3xl font-serif font-bold text-ink mb-6">Facilities</h2>
              <div className="flex flex-wrap gap-3">
                {primary.facilities.map(facility => (
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

export default Primary;