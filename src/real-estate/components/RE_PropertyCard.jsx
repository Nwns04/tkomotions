import { Link } from 'react-router-dom';
import { usePropertyContext } from '../context/PropertyContext';
import { formatNaira } from '../../shared/utils/formatCurrency';

function RE_PropertyCard({ property }) {
  const { savedProperties, toggleSave } = usePropertyContext();
  const isSaved = savedProperties.includes(property.id);

  const statusLabels = {
    'for-sale': 'For Sale',
    'for-rent': 'For Rent',
    'commercial-sale': 'Commercial Sale',
    'commercial-rent': 'Commercial Rent',
  };

  return (
    <div className="bg-white border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow group">
      {/* Image */}
      <Link to={`/real-estate/property/${property.slug}`} className="relative block h-56 overflow-hidden">
        <img
          src={property.images[0]}
          alt={property.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute top-3 left-3 flex gap-2">
          <span className={`text-xs font-semibold px-3 py-1 rounded-full ${
            property.status === 'for-sale' ? 'bg-navy text-white' :
            property.status === 'for-rent' ? 'bg-gold text-white' :
            'bg-green text-white'
          }`}>
            {statusLabels[property.status]}
          </span>
          {property.isNew && (
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-red text-white">New</span>
          )}
        </div>
      </Link>

      {/* Content */}
      <div className="p-5">
        <p className="text-gold font-bold text-lg mb-2">{formatNaira(property.price)}</p>
        <Link to={`/real-estate/property/${property.slug}`} className="block">
          <h3 className="font-serif text-lg text-dark-gray group-hover:text-navy transition-colors mb-1">
            {property.title}
          </h3>
        </Link>
        <p className="text-muted text-sm mb-4">📍 {property.location}</p>

        {/* Specs */}
        <div className="flex items-center gap-4 text-sm text-muted border-t border-border pt-4">
          {property.bedrooms > 0 && (
            <span>🛏 {property.bedrooms} Beds</span>
          )}
          {property.bathrooms > 0 && (
            <span>🛁 {property.bathrooms} Baths</span>
          )}
          <span>📐 {property.size} m²</span>
        </div>

        {/* Actions */}
        <div className="flex items-center justify-between mt-4">
          <Link to={`/real-estate/property/${property.slug}`} className="text-navy text-sm font-semibold hover:text-gold transition-colors">
            View Details →
          </Link>
          <button
            onClick={() => toggleSave(property.id)}
            className={`text-sm ${isSaved ? 'text-gold' : 'text-muted hover:text-gold'} transition-colors`}
            aria-label="Save property"
          >
            {isSaved ? '❤️ Saved' : '🤍 Save'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default RE_PropertyCard;