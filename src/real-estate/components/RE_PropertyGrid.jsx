import RE_PropertyCard from './RE_PropertyCard';

function RE_PropertyGrid({ properties, columns = 3 }) {
  const columnClasses = {
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 xl:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4',
  };

  return (
    <div className={`grid ${columnClasses[columns]} gap-6`}>
      {properties.map(property => (
        <RE_PropertyCard key={property.id} property={property} />
      ))}
    </div>
  );
}

export default RE_PropertyGrid;