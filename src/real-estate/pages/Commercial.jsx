import { useState } from 'react';
import RE_PropertyCard from '../components/RE_PropertyCard';
import RE_FilterSidebar from '../components/RE_FilterSidebar';
import RE_ViewingRequestModal from '../components/RE_ViewingRequestModal';
import { usePropertyContext } from '../context/PropertyContext';
import { usePropertyFilters } from '../hooks/usePropertyFilters';

function Commercial() {
  const [sortBy, setSortBy] = useState('newest');
  const { filters } = usePropertyContext();
  const commercialFilters = { ...filters, status: 'commercial-rent' };
  const filteredProperties = usePropertyFilters(commercialFilters, sortBy);

  return (
    <>
      <div className="bg-light-gray py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-navy">Commercial Properties in Abuja</h1>
          <p className="text-muted mt-2">{filteredProperties.length} properties found</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="hidden lg:block lg:col-span-1">
            <div className="bg-white border border-border rounded-lg p-6 sticky top-24">
              <RE_FilterSidebar />
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="flex items-center justify-between mb-6">
              <p className="text-sm text-muted">{filteredProperties.length} results</p>
              <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="px-3 py-2 border border-border text-sm focus:outline-none focus:border-navy rounded">
                <option value="newest">Newest First</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredProperties.map(property => (
                <RE_PropertyCard key={property.id} property={property} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <RE_ViewingRequestModal />
    </>
  );
}

export default Commercial;