import { Link } from 'react-router-dom';

function PrivateDiningCard({ space, index }) {
  return (
    <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20 last:mb-8 ${
      index % 2 === 1 ? 'lg:flex-row-reverse' : ''
    }`}>
      <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
        <div className="relative overflow-hidden group">
          <img
            src={space.image}
            alt={space.name}
            className="w-full h-[350px] md:h-[450px] object-cover group-hover:scale-105 transition-transform duration-700"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ember-black/60 to-transparent" />
        </div>
      </div>
      <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-cream mb-4">
          {space.name}
        </h2>
        <p className="text-ash leading-relaxed mb-6">{space.description}</p>
        
        <div className="bg-white/5 border border-white/10 rounded-lg p-6 mb-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-ash">Capacity</span>
            <span className="text-cream font-medium">{space.capacity} guests</span>
          </div>
          <div className="w-full h-px bg-white/10 my-3" />
          <div className="flex items-center justify-between">
            <span className="text-sm text-ash">Price</span>
            <span className="text-ember-orange font-medium">{space.price}</span>
          </div>
        </div>

        <ul className="space-y-3 mb-8">
          {space.features.map(feature => (
            <li key={feature} className="flex items-center text-ash">
              <span className="w-2 h-2 bg-ember-orange rotate-45 mr-4 flex-shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <Link to="/restaurant/reservations" className="btn-restaurant btn-restaurant-outline">
          Enquire Now
        </Link>
      </div>
    </div>
  );
}

export default PrivateDiningCard;