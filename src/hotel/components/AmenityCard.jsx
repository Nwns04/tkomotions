function AmenityCard({ amenity }) {
  return (
    <div className="bg-white border border-sand overflow-hidden group hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-48 overflow-hidden">
        <img
          src={amenity.image}
          alt={amenity.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          loading="lazy"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-serif font-medium mb-3">{amenity.name}</h3>
        <p className="text-sm text-ink/60">{amenity.description}</p>
      </div>
    </div>
  );
}

export default AmenityCard;