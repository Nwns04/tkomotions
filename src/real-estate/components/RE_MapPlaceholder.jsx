import { properties } from '../data/properties';
import { locations } from '../data/locations';

function RE_MapPlaceholder() {
  return (
    <div className="bg-light-gray rounded-lg p-6">
      <div className="text-center mb-6">
        <h3 className="font-semibold text-navy">Property Locations</h3>
        <p className="text-sm text-muted">Interactive map showing all properties</p>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {locations.map(loc => {
          const locProperties = properties.filter(p => p.location === loc.name);
          return (
            <div key={loc.id} className="bg-white border border-border rounded-lg p-4">
              <p className="font-semibold text-dark-gray">{loc.name}</p>
              <p className="text-sm text-muted">{locProperties.length} properties</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default RE_MapPlaceholder;