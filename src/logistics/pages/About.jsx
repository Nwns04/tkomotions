import LR_SectionHeading from '../components/LR_SectionHeading';
import { companyInfo } from '../data/company';
import { hubs } from '../data/routes';

function About() {
  const values = [
    { title: 'Speed', description: 'We move fast because business moves fast.' },
    { title: 'Reliability', description: 'We deliver what we promise, every time.' },
    { title: 'Technology', description: 'Real-time visibility into every shipment.' },
    { title: 'Integrity', description: 'Honest pricing and transparent operations.' },
  ];

  return (
    <>
      <div className="bg-lr-surface border-b border-lr-border py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <LR_SectionHeading
            eyebrow="About Us"
            title="The Company Behind the Movement"
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Story */}
        <div className="max-w-3xl mb-16">
          <p className="text-lr-off-white/60 text-lg leading-relaxed mb-4">
            SwiftRoute Logistics was founded in 2018 with a clear mission: to bring 
            technology-driven, reliable logistics to businesses across Nigeria.
          </p>
          <p className="text-lr-off-white/60 text-lg leading-relaxed mb-4">
            Starting with just three delivery vans in Lagos, we have grown into a 
            nationwide operation with six regional hubs, 85+ vehicles, and a team 
            of over 300 logistics professionals.
          </p>
          <p className="text-lr-off-white/60 text-lg leading-relaxed">
            Today, we handle thousands of shipments daily for some of Nigeria's 
            leading businesses — from e-commerce retailers to banks, manufacturers, 
            and healthcare providers.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-0 border border-lr-border divide-x divide-y md:divide-y-0 divide-lr-border mb-16">
          {[
            { value: companyInfo.stats.deliveriesCompleted + '+', label: 'Deliveries' },
            { value: companyInfo.stats.statesCovered, label: 'States' },
            { value: companyInfo.stats.vehicles + '+', label: 'Vehicles' },
            { value: companyInfo.stats.teamMembers + '+', label: 'Team Members' },
          ].map(stat => (
            <div key={stat.label} className="p-8 text-center">
              <p className="text-3xl font-bold text-lr-lime">{stat.value}</p>
              <p className="text-xs font-mono uppercase tracking-wider text-lr-off-white/50 mt-2">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Values */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-lr-off-white mb-8">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {values.map((value, index) => (
              <div key={value.title} className="border border-lr-border p-6">
                <p className="font-mono text-lr-lime text-sm mb-3">0{index + 1}</p>
                <h3 className="font-semibold text-lr-off-white mb-2">{value.title}</h3>
                <p className="text-lr-off-white/50 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Hubs */}
        <div>
          <h2 className="text-2xl font-bold text-lr-off-white mb-8">Our Network</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {hubs.map(hub => (
              <div key={hub.name} className="border border-lr-border p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold text-lr-off-white">{hub.name}</h3>
                  <span className="w-2 h-2 bg-lr-green rounded-full animate-pulse" />
                </div>
                <p className="text-lr-off-white/50 text-sm">{hub.location}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default About;