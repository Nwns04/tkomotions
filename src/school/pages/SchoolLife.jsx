import Breadcrumbs from '../components/Breadcrumbs';
import Sidebar from '../components/Sidebar';

function SchoolLife() {
  const sidebarLinks = [
    { label: 'Clubs', path: '/school/school-life#clubs' },
    { label: 'Sports', path: '/school/school-life#sports' },
    { label: 'Arts', path: '/school/school-life#arts' },
    { label: 'Community', path: '/school/school-life#community' },
  ];

  const clubs = ['Debate', 'Robotics', 'Chess', 'Music', 'Drama', 'Art', 'Coding', 'Sports', 'Dance', 'Cooking'];

  return (
    <div className="bg-school-cream">
      <div className="bg-oak-green text-white py-12">
        <div className="container-hotel px-4 md:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'School Life' }]} />
          <h1 className="text-4xl font-serif font-bold">School Life</h1>
        </div>
      </div>

      <div className="container-hotel py-12 px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-1">
            <Sidebar title="In This Section" links={sidebarLinks} />
          </div>

          <div className="lg:col-span-3 space-y-16">
            <section id="clubs">
              <h2 className="text-3xl font-serif font-bold text-ink mb-6">Clubs & Activities</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {clubs.map(club => (
                  <div key={club} className="bg-white border border-slate/20 rounded-lg p-4 text-center">
                    <p className="font-medium text-ink">{club}</p>
                  </div>
                ))}
              </div>
            </section>

            <section id="sports">
              <h2 className="text-3xl font-serif font-bold text-ink mb-6">Sports</h2>
              <p className="text-slate leading-relaxed mb-6">
                Our sports programme includes football, basketball, swimming, athletics, 
                tennis, and cricket. Students compete in local and international tournaments.
              </p>
            </section>

            <section id="arts">
              <h2 className="text-3xl font-serif font-bold text-ink mb-6">Arts & Culture</h2>
              <p className="text-slate leading-relaxed mb-6">
                From music and drama to visual arts, students explore their creativity 
                through performances, exhibitions, and cultural celebrations.
              </p>
            </section>

            <section id="community">
              <h2 className="text-3xl font-serif font-bold text-ink mb-6">Community Service</h2>
              <p className="text-slate leading-relaxed">
                Our students participate in regular community service projects, 
                partnering with local schools and charities.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SchoolLife;