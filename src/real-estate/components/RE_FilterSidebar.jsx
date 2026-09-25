import { usePropertyContext } from '../context/PropertyContext';
import { locations } from '../data/locations';

function RE_FilterSidebar() {
  const { filters, updateFilters, resetFilters } = usePropertyContext();

  const propertyTypes = [
    { value: 'house', label: 'House' },
    { value: 'apartment', label: 'Apartment' },
    { value: 'land', label: 'Land' },
    { value: 'office', label: 'Office' },
    { value: 'shop', label: 'Shop' },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h3 className="font-semibold text-dark-gray">Filters</h3>
        <button onClick={resetFilters} className="text-sm text-muted hover:text-navy transition-colors">
          Clear All
        </button>
      </div>

      {/* Location */}
      <div>
        <h4 className="text-sm font-semibold text-dark-gray mb-3">Location</h4>
        <div className="space-y-2 max-h-48 overflow-y-auto">
          {locations.map(loc => (
            <label key={loc.id} className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                checked={filters.location === loc.name.toLowerCase()}
                onChange={() => updateFilters({ location: filters.location === loc.name.toLowerCase() ? 'all' : loc.name.toLowerCase() })}
                className="rounded border-border text-navy focus:ring-navy"
              />
              <span className="text-sm text-muted">{loc.name} ({loc.count})</span>
            </label>
          ))}
        </div>
      </div>

      {/* Property Type */}
      <div>
        <h4 className="text-sm font-semibold text-dark-gray mb-3">Property Type</h4>
        <div className="space-y-2">
          {propertyTypes.map(type => (
            <label key={type.value} className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                checked={filters.type === type.value}
                onChange={() => updateFilters({ type: filters.type === type.value ? 'all' : type.value })}
                className="rounded border-border text-navy focus:ring-navy"
              />
              <span className="text-sm text-muted">{type.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div>
        <h4 className="text-sm font-semibold text-dark-gray mb-3">Price Range (₦)</h4>
        <div className="grid grid-cols-2 gap-3">
          <input
            type="number"
            placeholder="Min"
            value={filters.minPrice}
            onChange={(e) => updateFilters({ minPrice: e.target.value })}
            className="px-3 py-2 border border-border text-sm text-dark-gray focus:outline-none focus:border-navy rounded"
          />
          <input
            type="number"
            placeholder="Max"
            value={filters.maxPrice}
            onChange={(e) => updateFilters({ maxPrice: e.target.value })}
            className="px-3 py-2 border border-border text-sm text-dark-gray focus:outline-none focus:border-navy rounded"
          />
        </div>
      </div>

      {/* Bedrooms */}
      <div>
        <h4 className="text-sm font-semibold text-dark-gray mb-3">Bedrooms</h4>
        <select
          value={filters.bedrooms}
          onChange={(e) => updateFilters({ bedrooms: e.target.value })}
          className="w-full px-3 py-2 border border-border text-sm text-dark-gray focus:outline-none focus:border-navy rounded"
        >
          <option value="any">Any</option>
          <option value="1">1+</option>
          <option value="2">2+</option>
          <option value="3">3+</option>
          <option value="4+">4+</option>
        </select>
      </div>
    </div>
  );
}

export default RE_FilterSidebar;