import RE_PropertyCard from './RE_PropertyCard';
import { properties } from '../data/properties';

function RE_SimilarProperties({ currentPropertyId, location }) {
  const similar = properties
    .filter(p => p.id !== currentPropertyId && p.location === location)
    .slice(0, 3);

  if (similar.length === 0) return null;

  return (
    <div className="mt-16">
      <h2 className="text-2xl font-bold text-navy mb-6">Similar Properties in {location}</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {similar.map(property => (
          <RE_PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </div>
  );
}

export default RE_SimilarProperties;