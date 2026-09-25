import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { locations } from '../data/locations';

function RE_SearchBar() {
  const navigate = useNavigate();
  const [searchData, setSearchData] = useState({
    status: 'for-sale',
    location: 'all',
    type: 'all',
    maxPrice: '',
  });

  const handleSearch = (e) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (searchData.status) params.set('status', searchData.status);
    if (searchData.location !== 'all') params.set('location', searchData.location);
    if (searchData.type !== 'all') params.set('type', searchData.type);
    if (searchData.maxPrice) params.set('maxPrice', searchData.maxPrice);
    navigate(`/real-estate/properties?${params.toString()}`);
  };

  const propertyTypes = [
    { value: 'all', label: 'All Types' },
    { value: 'house', label: 'House' },
    { value: 'apartment', label: 'Apartment' },
    { value: 'land', label: 'Land' },
    { value: 'office', label: 'Office' },
    { value: 'shop', label: 'Shop' },
  ];

  return (
    <form onSubmit={handleSearch} className="bg-white rounded-lg shadow-lg p-4">
      {/* Buy/Rent Toggle */}
      <div className="flex gap-2 mb-4">
        {[
          { value: 'for-sale', label: 'Buy' },
          { value: 'for-rent', label: 'Rent' },
          { value: 'commercial-rent', label: 'Commercial' },
        ].map(option => (
          <button
            key={option.value}
            type="button"
            onClick={() => setSearchData({ ...searchData, status: option.value })}
            className={`flex-1 px-4 py-2 text-sm font-semibold rounded transition-colors ${
              searchData.status === option.value
                ? 'bg-navy text-white'
                : 'bg-light-gray text-muted hover:bg-gray-200'
            }`}
          >
            {option.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
        <select
          value={searchData.location}
          onChange={(e) => setSearchData({ ...searchData, location: e.target.value })}
          className="px-3 py-2 border border-border text-dark-gray focus:outline-none focus:border-navy rounded"
        >
          <option value="all">All Locations</option>
          {locations.map(loc => (
            <option key={loc.id} value={loc.name.toLowerCase()}>{loc.name}</option>
          ))}
        </select>

        <select
          value={searchData.type}
          onChange={(e) => setSearchData({ ...searchData, type: e.target.value })}
          className="px-3 py-2 border border-border text-dark-gray focus:outline-none focus:border-navy rounded"
        >
          {propertyTypes.map(type => (
            <option key={type.value} value={type.value}>{type.label}</option>
          ))}
        </select>

        <input
          type="number"
          placeholder="Max Price (₦)"
          value={searchData.maxPrice}
          onChange={(e) => setSearchData({ ...searchData, maxPrice: e.target.value })}
          className="px-3 py-2 border border-border text-dark-gray focus:outline-none focus:border-navy rounded"
        />

        <button type="submit" className="bg-gold text-white px-6 py-2 text-sm font-semibold rounded hover:bg-navy transition-colors">
          Search
        </button>
      </div>
    </form>
  );
}

export default RE_SearchBar;