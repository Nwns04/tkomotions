import { useState } from 'react';

function FilterBar({ onFilterChange, totalRooms }) {
  const [filters, setFilters] = useState({
    category: 'all',
    guests: 'any',
    sortBy: 'default',
  });

  const handleFilterChange = (key, value) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const categories = [
    { value: 'all', label: 'All' },
    { value: 'room', label: 'Rooms' },
    { value: 'suite', label: 'Suites' },
    { value: 'villa', label: 'Villas' },
  ];

  const guestOptions = [
    { value: 'any', label: 'Any Guests' },
    { value: '1-2', label: '1-2 Guests' },
    { value: '3-4', label: '3-4 Guests' },
    { value: '5+', label: '5+ Guests' },
  ];

  const sortOptions = [
    { value: 'default', label: 'Default' },
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' },
    { value: 'size', label: 'Size' },
  ];

  return (
    <div className="bg-white border border-sand p-4 md:p-6">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        {/* Categories */}
        <div className="flex flex-wrap gap-2">
          {categories.map(cat => (
            <button
              key={cat.value}
              onClick={() => handleFilterChange('category', cat.value)}
              className={`px-4 py-2 text-sm uppercase tracking-wider transition-colors ${
                filters.category === cat.value
                  ? 'bg-bronze text-white'
                  : 'text-ink/60 hover:text-bronze border border-sand'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-4">
          <select
            value={filters.guests}
            onChange={(e) => handleFilterChange('guests', e.target.value)}
            className="px-4 py-2 border border-sand text-sm focus:outline-none focus:border-bronze transition-colors"
          >
            {guestOptions.map(opt => (
              <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
          </select>
          
          <select
            value={filters.sortBy}
            onChange={(e) => handleFilterChange('sortBy', e.target.value)}
            className="px-4 py-2 border border-sand text-sm focus:outline-none focus:border-bronze transition-colors"
          >
            {sortOptions.map(opt => (
              <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
          </select>

          <span className="px-4 py-2 text-sm text-ink/40">
            {totalRooms} Rooms
          </span>
        </div>
      </div>
    </div>
  );
}

export default FilterBar;