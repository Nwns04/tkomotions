import { Link } from 'react-router-dom';

function ProgramCard({ program }) {
  const bgColors = {
    mint: 'bg-mint',
    cream: 'bg-cream',
    sky: 'bg-sky',
  };

  return (
    <Link
      to={program.path}
      className={`group ${bgColors[program.color]} rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}
    >
      <div className="h-48 overflow-hidden">
        <img
          src={program.image}
          alt={program.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
      </div>
      <div className="p-6">
        <p className="text-oak-green text-sm font-semibold mb-2">{program.ageRange}</p>
        <h3 className="text-2xl font-serif font-bold text-ink mb-3">{program.name}</h3>
        <p className="text-slate text-sm leading-relaxed mb-4">{program.description}</p>
        <ul className="space-y-2 mb-4">
          {program.features.map(feature => (
            <li key={feature} className="flex items-start text-sm text-slate">
              <span className="w-1.5 h-1.5 bg-gold rounded-full mt-1.5 mr-2 flex-shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        <span className="text-deep-green font-medium group-hover:translate-x-1 transition-transform inline-block">
          Learn More →
        </span>
      </div>
    </Link>
  );
}

export default ProgramCard;