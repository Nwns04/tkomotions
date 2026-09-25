import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import RE_PropertyCard from '../components/RE_PropertyCard';
import RE_FilterSidebar from '../components/RE_FilterSidebar';
import RE_ViewingRequestModal from '../components/RE_ViewingRequestModal';
import { usePropertyContext } from '../context/PropertyContext';
import { usePropertyFilters } from '../hooks/usePropertyFilters';

function Properties() {
  const [searchParams] = useSearchParams();
  const [sortBy, setSortBy] = useState('newest');
  const { filters } = usePropertyContext();
  
  const urlFilters = {
    ...filters,
    status: searchParams.get('status') || filters.status,
    location: searchParams.get('location') || filters.location,
    type: searchParams.get('type') || filters.type,
    maxPrice: searchParams.get('maxPrice') || filters.maxPrice,
  };

  const filteredProperties = usePropertyFilters(urlFilters, sortBy);

  return (
    <>
      <div className="bg-light-gray py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-navy">Properties in Abuja</h1>
          <p className="text-muted mt-2">{filteredProperties.length} properties found</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="hidden lg:block lg:col-span-1">
            <div className="bg-white border border-border rounded-lg p-6 sticky top-24">
              <RE_FilterSidebar />
            </div>
          </div>

          {/* Main Grid */}
          <div className="lg:col-span-3">
            {/* Sort */}
            <div className="flex items-center justify-between mb-6">
              <p className="text-sm text-muted">{filteredProperties.length} results</p>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-3 py-2 border border-border text-sm text-dark-gray focus:outline-none focus:border-navy rounded"
              >
                <option value="newest">Newest First</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>

            {filteredProperties.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredProperties.map(property => (
                  <RE_PropertyCard key={property.id} property={property} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="text-xl font-semibold text-dark-gray mb-2">No Properties Found</p>
                <p className="text-muted">Try adjusting your filters.</p>
              </div>
            )}
          </div>
        </div>
      </div>

      <RE_ViewingRequestModal />
    </>
  );
}

export default Properties;