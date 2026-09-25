import { Link } from 'react-router-dom';

function RE_LocationTile({ location }) {
  return (
    <Link
      to={`/real-estate/properties?location=${location.name.toLowerCase()}`}
      className="flex-shrink-0 w-56 group"
    >
      <div className="relative h-40 overflow-hidden rounded-lg mb-3">
        <img
          src={location.image}
          alt={location.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-ink/20 group-hover:bg-ink/10 transition-colors" />
        <span className="absolute top-3 left-3 bg-white/90 text-navy text-xs font-semibold px-2 py-1 rounded-full">
          {location.type}
        </span>
      </div>
      <p className="font-semibold text-dark-gray group-hover:text-navy transition-colors">{location.name}</p>
      <p className="text-sm text-muted">{location.count} properties</p>
    </Link>
  );
}

export default RE_LocationTile;