import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import FilterBar from '../components/FilterBar';
import RoomCard from '../components/RoomCard';
import { rooms } from '../data/rooms';

function Rooms() {
  const [searchParams] = useSearchParams();
  const initialType = searchParams.get('type') || 'all';
  const [filters, setFilters] = useState({
    category: initialType,
    guests: 'any',
    sortBy: 'default',
  });

  const filteredRooms = useMemo(() => {
    let result = [...rooms];

    // Filter by category
    if (filters.category !== 'all') {
      result = result.filter(room => room.category === filters.category);
    }

    // Filter by guests
    if (filters.guests !== 'any') {
      if (filters.guests === '1-2') {
        result = result.filter(room => room.capacity <= 2);
      } else if (filters.guests === '3-4') {
        result = result.filter(room => room.capacity >= 3 && room.capacity <= 4);
      } else if (filters.guests === '5+') {
        result = result.filter(room => room.capacity >= 5);
      }
    }

    // Sort
    if (filters.sortBy === 'price-low') {
      result.sort((a, b) => a.price - b.price);
    } else if (filters.sortBy === 'price-high') {
      result.sort((a, b) => b.price - a.price);
    } else if (filters.sortBy === 'size') {
      result.sort((a, b) => b.size - a.size);
    }

    return result;
  }, [filters]);

  return (
    <>
      <PageHeader
        title="Rooms & Suites"
        subtitle="Forty-eight rooms across eight categories"
        image="https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=1920&q=80"
      />

      <div className="container-hotel py-12">
        <FilterBar onFilterChange={setFilters} totalRooms={filteredRooms.length} />

        {filteredRooms.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {filteredRooms.map(room => (
              <RoomCard key={room.id} room={room} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <h3 className="text-2xl font-serif mb-4">No Rooms Found</h3>
            <p className="text-ink/60">
              No rooms match your current filters. Try adjusting your selection.
            </p>
          </div>
        )}
      </div>

  
    </>
  );
}

export default Rooms;