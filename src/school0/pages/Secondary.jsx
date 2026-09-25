import Breadcrumbs from '../components/Breadcrumbs';
import Sidebar from '../components/Sidebar';
import { programs } from '../data/programs';

function Secondary() {
  const secondary = programs.secondary;
  const sidebarLinks = [
    { label: 'Overview', path: '/school/secondary#overview' },
    { label: 'Key Features', path: '/school/secondary#features' },
    { label: 'University Destinations', path: '/school/secondary#universities' },
  ];

  const universities = [
    'University of Oxford', 'University of Cambridge', 'Imperial College London',
    'University of Lagos', 'Covenant University', 'Harvard University',
  ];

  return (
    <div className="bg-school-cream">
      <div className="bg-oak-green text-white py-12">
        <div className="container-hotel px-4 md:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Programmes' }, { label: 'Secondary' }]} />
          <h1 className="text-4xl font-serif font-bold">Secondary</h1>
          <p className="text-sage mt-2">{secondary.ageRange}</p>
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
              <p className="text-slate leading-relaxed mb-6">{secondary.description}</p>
              <div className="bg-soft-gray rounded-lg p-6">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-slate mb-1">Curriculum</p>
                    <p className="font-medium text-ink">{secondary.curriculum}</p>
                  </div>
                  <div>
                    <p className="text-slate mb-1">Class Size</p>
                    <p className="font-medium text-ink">{secondary.classSize}</p>
                  </div>
                  <div>
                    <p className="text-slate mb-1">Teacher Ratio</p>
                    <p className="font-medium text-ink">{secondary.teacherRatio}</p>
                  </div>
                  <div>
                    <p className="text-slate mb-1">Hours</p>
                    <p className="font-medium text-ink">{secondary.hours}</p>
                  </div>
                </div>
              </div>
            </section>

            <section id="features">
              <h2 className="text-3xl font-serif font-bold text-ink mb-6">Key Features</h2>
              <ul className="space-y-3">
                {secondary.features.map(feature => (
                  <li key={feature} className="flex items-start text-slate">
                    <span className="w-1.5 h-1.5 bg-gold rounded-full mt-1.5 mr-3 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section id="universities">
              <h2 className="text-3xl font-serif font-bold text-ink mb-6">University Destinations</h2>
              <div className="flex flex-wrap gap-3">
                {universities.map(university => (
                  <span key={university} className="bg-white border border-slate/20 text-ink px-4 py-2 rounded-full text-sm">
                    {university}
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

export default Secondary;