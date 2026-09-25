import { Link } from 'react-router-dom';

function LR_ServiceRow({ service }) {
  return (
    <Link
      to={`/logistics/services/${service.id}`}
      className="group grid grid-cols-1 lg:grid-cols-3 gap-6 items-center py-8 border-b border-lr-border hover:bg-lr-surface transition-colors"
    >
      {/* Number */}
      <div className="flex items-center space-x-4">
        <span className="font-mono text-lr-lime text-sm">{service.number}</span>
        <span className="w-8 h-px bg-lr-lime" />
      </div>

      {/* Image */}
      <div className="h-56 overflow-hidden">
        <img
          src={service.image}
          alt={service.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
      </div>

      {/* Content */}
      <div>
        <h3 className="text-2xl font-bold text-lr-off-white group-hover:text-lr-lime transition-colors mb-2">
          {service.name}
        </h3>
        <p className="text-lr-off-white/60 text-sm leading-relaxed mb-4">
          {service.shortDescription}
        </p>
        <span className="font-mono text-lr-lime text-sm uppercase tracking-wider group-hover:translate-x-2 transition-transform inline-block">
          Learn More →
        </span>
      </div>
    </Link>
  );
}

export default LR_ServiceRow;