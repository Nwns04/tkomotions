import { Link } from 'react-router-dom';
import { formatNaira } from '../../shared/utils/formatCurrency';

function RoomCard({ room }) {
  return (
    <Link
      to={`/rooms/${room.id}`}
      className="group bg-white border border-sand overflow-hidden hover:shadow-lg hover:shadow-black/5 transition-all duration-300"
    >
      {/* Image */}
      <div className="relative h-72 overflow-hidden">
        <img
          src={room.image}
          alt={room.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          loading="lazy"
        />
        {room.featured && (
          <span className="absolute top-4 left-4 bg-bronze text-white text-xs px-3 py-1 uppercase tracking-wider">
            Featured
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-2xl font-serif font-medium mb-2 group-hover:text-bronze transition-colors">
          {room.name}
        </h3>
        <p className="text-sm text-ink/60 mb-4">
          {room.shortDescription}
        </p>
        
        {/* Specs */}
        <div className="flex items-center space-x-6 text-sm text-ink/50 mb-6">
          <span>{room.size} m²</span>
          <span className="w-px h-4 bg-sand" />
          <span>{room.capacity} Guests</span>
          <span className="w-px h-4 bg-sand" />
          <span>{room.beds}</span>
        </div>

        {/* Price */}
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs text-ink/40 uppercase tracking-wider mb-1">From</p>
            <p className="text-lg font-medium">
              {formatNaira(room.price)}
              <span className="text-sm text-ink/40 font-normal"> / night</span>
            </p>
          </div>
          <span className="text-bronze group-hover:translate-x-1 transition-transform">
            View Room →
          </span>
        </div>
      </div>
    </Link>
  );
}

export default RoomCard;