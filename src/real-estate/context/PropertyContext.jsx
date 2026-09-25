import { createContext, useContext, useState } from 'react';

const PropertyContext = createContext(null);

export function usePropertyContext() {
  return useContext(PropertyContext);
}

export function PropertyProvider({ children }) {
  const [filters, setFilters] = useState({
    status: 'for-sale',
    location: 'all',
    type: 'all',
    minPrice: '',
    maxPrice: '',
    bedrooms: 'any',
    bathrooms: 'any',
  });
  
  const [savedProperties, setSavedProperties] = useState([]);
  const [viewingProperty, setViewingProperty] = useState(null);
  const [isViewingModalOpen, setIsViewingModalOpen] = useState(false);

  const updateFilters = (updates) => {
    setFilters(prev => ({ ...prev, ...updates }));
  };

  const resetFilters = () => {
    setFilters({
      status: 'for-sale',
      location: 'all',
      type: 'all',
      minPrice: '',
      maxPrice: '',
      bedrooms: 'any',
      bathrooms: 'any',
    });
  };

  const toggleSave = (propertyId) => {
    setSavedProperties(prev => 
      prev.includes(propertyId)
        ? prev.filter(id => id !== propertyId)
        : [...prev, propertyId]
    );
  };

  const openViewingModal = (property) => {
    setViewingProperty(property);
    setIsViewingModalOpen(true);
  };

  const closeViewingModal = () => {
    setViewingProperty(null);
    setIsViewingModalOpen(false);
  };

  return (
    <PropertyContext.Provider value={{
      filters,
      updateFilters,
      resetFilters,
      savedProperties,
      toggleSave,
      viewingProperty,
      isViewingModalOpen,
      openViewingModal,
      closeViewingModal,
    }}>
      {children}
    </PropertyContext.Provider>
  );
}

export default PropertyContext;