import { formatNaira } from '../../shared/utils/formatCurrency';

function RE_AgentCard({ agent }) {
  const whatsappLink = `https://wa.me/${agent.whatsapp.replace(/[^0-9]/g, '')}`;

  return (
    <div className="bg-white border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
      <div className="h-64 overflow-hidden bg-light-gray">
        <img src={agent.image} alt={agent.name} className="w-full h-full object-cover" loading="lazy" />
      </div>
      <div className="p-6">
        <h3 className="font-serif text-lg text-dark-gray">{agent.name}</h3>
        <p className="text-navy text-sm font-semibold mb-3">{agent.role}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {agent.specialty.map(spec => (
            <span key={spec} className="text-xs bg-light-gray text-muted px-3 py-1 rounded-full">
              {spec}
            </span>
          ))}
        </div>

        <div className="grid grid-cols-3 gap-3 text-center mb-6 border-t border-border pt-4">
          <div>
            <p className="font-bold text-dark-gray text-lg">{agent.listings}</p>
            <p className="text-xs text-muted">Listings</p>
          </div>
          <div>
            <p className="font-bold text-dark-gray text-lg">{agent.sales}</p>
            <p className="text-xs text-muted">Sales</p>
          </div>
          <div>
            <p className="font-bold text-dark-gray text-lg">{agent.yearsExperience}</p>
            <p className="text-xs text-muted">Years</p>
          </div>
        </div>

        <div className="flex gap-3">
          <a
            href={`tel:${agent.phone}`}
            className="flex-1 bg-navy text-white text-sm font-semibold px-4 py-2 rounded text-center hover:bg-dark-gray transition-colors"
          >
            Call
          </a>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-green text-white text-sm font-semibold px-4 py-2 rounded text-center hover:bg-green-600 transition-colors"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}

export default RE_AgentCard;