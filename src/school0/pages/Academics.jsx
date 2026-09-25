import Breadcrumbs from '../components/Breadcrumbs';
import Sidebar from '../components/Sidebar';
import { keyStages } from '../data/programs';

function Academics() {
  const sidebarLinks = [
    { label: 'Curriculum Overview', path: '/school/academics#curriculum' },
    { label: 'Key Stages', path: '/school/academics#keystages' },
    { label: 'Subjects', path: '/school/academics#subjects' },
    { label: 'Results', path: '/school/academics#results' },
  ];

  const subjects = [
    { faculty: 'Sciences', subjects: ['Biology', 'Chemistry', 'Physics', 'Computer Science'] },
    { faculty: 'Humanities', subjects: ['History', 'Geography', 'Economics', 'Business Studies'] },
    { faculty: 'Languages', subjects: ['English', 'French', 'Spanish', 'Mandarin', 'Yoruba'] },
    { faculty: 'Arts', subjects: ['Visual Arts', 'Music', 'Drama', 'Design Technology'] },
  ];

  return (
    <div className="bg-school-cream">
      <div className="bg-oak-green text-white py-12">
        <div className="container-hotel px-4 md:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Academics' }]} />
          <h1 className="text-4xl font-serif font-bold">Academics</h1>
        </div>
      </div>

      <div className="container-hotel py-12 px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-1">
            <Sidebar title="In This Section" links={sidebarLinks} />
          </div>

          <div className="lg:col-span-3 space-y-16">
            {/* Curriculum Overview */}
            <section id="curriculum">
              <h2 className="text-3xl font-serif font-bold text-ink mb-6">Curriculum Overview</h2>
              <p className="text-slate leading-relaxed mb-6">
                We follow the British National Curriculum, culminating in Cambridge IGCSE 
                and A-Level examinations. Our curriculum is enriched with Nigerian context, 
                including Nigerian history, literature, and languages.
              </p>
              
              {/* Key Stages Table */}
              <div className="overflow-x-auto">
                <table className="w-full bg-white border border-slate/20">
                  <thead className="bg-oak-green text-white">
                    <tr>
                      <th className="px-4 py-3 text-left text-sm">Stage</th>
                      <th className="px-4 py-3 text-left text-sm">Years</th>
                      <th className="px-4 py-3 text-left text-sm">Age</th>
                      <th className="px-4 py-3 text-left text-sm">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    {keyStages.map(stage => (
                      <tr key={stage.id} className="border-b border-slate/10 last:border-0">
                        <td className="px-4 py-3 font-medium text-ink">{stage.stage}</td>
                        <td className="px-4 py-3 text-slate">{stage.years}</td>
                        <td className="px-4 py-3 text-slate">{stage.age}</td>
                        <td className="px-4 py-3 text-slate text-sm">{stage.description}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Subjects */}
            <section id="subjects">
              <h2 className="text-3xl font-serif font-bold text-ink mb-6">Subject Offerings</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {subjects.map(faculty => (
                  <div key={faculty.faculty} className="bg-white border border-slate/20 rounded-lg p-6">
                    <h3 className="font-semibold text-oak-green mb-4">{faculty.faculty}</h3>
                    <ul className="space-y-2">
                      {faculty.subjects.map(subject => (
                        <li key={subject} className="flex items-center text-slate">
                          <span className="w-1.5 h-1.5 bg-gold rounded-full mr-3" />
                          <span>{subject}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* Results */}
            <section id="results">
              <h2 className="text-3xl font-serif font-bold text-ink mb-6">Examination Results</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-oak-green text-white rounded-lg p-8 text-center">
                  <p className="text-5xl font-serif font-bold mb-2">100%</p>
                  <p className="text-sage">IGCSE Pass Rate</p>
                </div>
                <div className="bg-oak-green text-white rounded-lg p-8 text-center">
                  <p className="text-5xl font-serif font-bold mb-2">85%</p>
                  <p className="text-sage">A*-B Grades</p>
                </div>
                <div className="bg-oak-green text-white rounded-lg p-8 text-center">
                  <p className="text-5xl font-serif font-bold mb-2">95%</p>
                  <p className="text-sage">University Placement</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Academics;