import { useMemo } from 'react';
import { properties } from '../data/properties';

export function usePropertyFilters(filters, sortBy = 'newest') {
  const filteredProperties = useMemo(() => {
    let result = [...properties];

    // Filter by status
    if (filters.status && filters.status !== 'all') {
      result = result.filter(p => p.status === filters.status);
    }

    // Filter by location
    if (filters.location && filters.location !== 'all') {
      result = result.filter(p => p.location.toLowerCase() === filters.location.toLowerCase());
    }

    // Filter by type
    if (filters.type && filters.type !== 'all') {
      result = result.filter(p => p.type === filters.type);
    }

    // Filter by price
    if (filters.minPrice) {
      result = result.filter(p => p.price >= parseInt(filters.minPrice));
    }
    if (filters.maxPrice) {
      result = result.filter(p => p.price <= parseInt(filters.maxPrice));
    }

    // Filter by bedrooms
    if (filters.bedrooms && filters.bedrooms !== 'any') {
      if (filters.bedrooms === '4+') {
        result = result.filter(p => p.bedrooms >= 4);
      } else {
        result = result.filter(p => p.bedrooms === parseInt(filters.bedrooms));
      }
    }

    // Sort
    if (sortBy === 'price-low') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high') {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'newest') {
      result.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
    }

    return result;
  }, [filters, sortBy]);

  return filteredProperties;
}