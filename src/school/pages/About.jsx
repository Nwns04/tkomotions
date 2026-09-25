import Breadcrumbs from '../components/Breadcrumbs';
import Sidebar from '../components/Sidebar';
import InitialAvatar from '../components/InitialAvatar';
import { schoolInfo } from '../data/school';
import { faculty } from '../data/faculty';
import { formatNaira } from '../../shared/utils/formatCurrency';

function About() {
  const sidebarLinks = [
    { label: 'Our Story', path: '/school/about#story' },
    { label: 'Mission & Vision', path: '/school/about#mission' },
    { label: 'Core Values', path: '/school/about#values' },
    { label: 'Leadership', path: '/school/about#leadership' },
    { label: 'Accreditations', path: '/school/about#accreditations' },
  ];

  const values = [
    { title: 'Excellence', description: 'We set high standards and support every child to achieve them.' },
    { title: 'Integrity', description: 'We do the right thing, even when no one is watching.' },
    { title: 'Community', description: 'We believe in the power of working together.' },
    { title: 'Curiosity', description: 'We encourage questions, exploration, and discovery.' },
    { title: 'Leadership', description: 'We prepare students to lead with confidence and compassion.' },
  ];

  return (
    <div className="bg-school-cream">
      {/* Page Header */}
      <div className="bg-oak-green text-white py-12">
        <div className="container-hotel px-4 md:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'About' }]} />
          <h1 className="text-4xl font-serif font-bold">About Crestfield Academy</h1>
        </div>
      </div>

      <div className="container-hotel py-12 px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Sidebar title="Quick Links" links={sidebarLinks} />
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-16">
            {/* Our Story */}
            <section id="story">
              <h2 className="text-3xl font-serif font-bold text-ink mb-6">Our Story</h2>
              <div className="space-y-4 text-slate leading-relaxed">
                <p>
                  Crestfield Academy is a fictional school used to demonstrate how a real school can present its story, values, leadership, programmes, admissions information, facilities, and community online. The final TKO Motions build would replace this copy with the school’s verified history and identity.
                </p>
                <p>
                  Rather than using invented rankings, results, or prestige claims, this demo focuses on the structure and user experience a prospective parent needs: clear information, strong visuals, simple enquiries, and trustworthy school communication.
                </p>
                <p>
                  Throughout our growth, we have never lost sight of what matters: 
                  knowing every child by name, understanding their unique strengths, 
                  and partnering with families to help them thrive.
                </p>
              </div>
            </section>

            {/* Mission & Vision */}
            <section id="mission">
              <h2 className="text-3xl font-serif font-bold text-ink mb-6">Mission & Vision</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-oak-green text-white p-8 rounded-lg">
                  <h3 className="text-xl font-serif font-bold mb-4">Our Mission</h3>
                  <p className="text-white/80 leading-relaxed">
                    To nurture curious minds, build strong character, and prepare global 
                    citizens who will lead with integrity, compassion, and excellence.
                  </p>
                </div>
                <div className="bg-soft-gray p-8 rounded-lg">
                  <h3 className="text-xl font-serif font-bold text-ink mb-4">Our Vision</h3>
                  <p className="text-slate leading-relaxed">
                    To provide a safe, engaging learning environment where students grow in knowledge, character, confidence, and responsibility.
                  </p>
                </div>
              </div>
            </section>

            {/* Values */}
            <section id="values">
              <h2 className="text-3xl font-serif font-bold text-ink mb-6">Core Values</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {values.map(value => (
                  <div key={value.title} className="bg-white border border-slate/20 rounded-lg p-6">
                    <h3 className="font-semibold text-oak-green mb-2">{value.title}</h3>
                    <p className="text-sm text-slate leading-relaxed">{value.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Leadership */}
            <section id="leadership">
              <h2 className="text-3xl font-serif font-bold text-ink mb-6">Our Leadership</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {faculty.map(member => (
                  <div key={member.id} className="bg-white border border-slate/20 rounded-lg p-6 flex items-start space-x-4">
                    <InitialAvatar name={member.name} initials={member.initials} size="md" color={member.color} />
                    <div>
                      <h3 className="font-semibold text-ink">{member.name}</h3>
                      <p className="text-deep-green text-sm mb-2">{member.role}</p>
                      <p className="text-sm text-slate leading-relaxed">{member.bio}</p>
                      {member.quote && (
                        <p className="text-sm italic text-slate mt-3">"{member.quote}"</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Accreditations */}
            <section id="accreditations">
              <h2 className="text-3xl font-serif font-bold text-ink mb-2">Accreditations & Approvals</h2><p className="text-slate mb-6">On a live project, only verified curriculum approvals, examination bodies, memberships, and accreditations should appear here.</p>
              <div className="flex flex-wrap gap-4">
                {schoolInfo.accreditations.map(acc => (
                  <span key={acc} className="bg-white border border-slate/20 text-oak-green font-semibold px-6 py-3 rounded-full">
                    {acc}
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

export default About;