import RE_AgentCard from '../components/RE_AgentCard';
import { agents } from '../data/agents';

function Agents() {
  return (
    <>
      <div className="bg-light-gray py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-navy">Our Agents</h1>
          <p className="text-muted mt-2">Meet the team behind Apex Properties</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {agents.map(agent => (
            <RE_AgentCard key={agent.id} agent={agent} />
          ))}
        </div>

        {/* Join Team CTA */}
        <div className="mt-16 bg-navy text-white rounded-lg p-12 text-center">
          <h2 className="text-2xl font-bold mb-4">Join Our Team</h2>
          <p className="text-white/70 mb-8">Are you a passionate real estate professional? We'd love to hear from you.</p>
          <a href="mailto:careers@apexproperties.ng" className="inline-flex bg-gold text-white px-8 py-3 font-semibold rounded hover:bg-navy hover:text-white transition-colors">
            Send Your CV
          </a>
        </div>
      </div>
    </>
  );
}

export default Agents;