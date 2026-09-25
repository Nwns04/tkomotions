import { formatNaira } from '../../shared/utils/formatCurrency';

function DishCard({ dish }) {
  return (
    <div className="group bg-white/5 border border-white/10 rounded-lg overflow-hidden hover:bg-white/10 transition-all duration-300 hover:shadow-lg hover:shadow-ember-orange/10">
      {/* Dish Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={dish.image}
          alt={dish.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ember-black/60 to-transparent" />
        
        {/* Signature Badge */}
        {dish.signature && (
          <span className="absolute top-3 left-3 bg-ember-orange text-white text-xs px-3 py-1 rounded-full uppercase tracking-wider">
            Signature
          </span>
        )}
        
        {/* Price Badge */}
        <span className="absolute bottom-3 right-3 bg-ember-black/80 backdrop-blur-md text-cream text-sm font-medium px-3 py-1 rounded">
          {formatNaira(dish.price)}
        </span>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-lg font-serif italic text-cream group-hover:text-ember-orange transition-colors mb-2">
          {dish.name}
        </h3>
        <p className="text-ash text-sm leading-relaxed mb-3">
          {dish.description}
        </p>
        
        {/* Dietary Labels */}
        {dish.dietary.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {dish.dietary.map(label => (
              <span key={label} className="text-xs text-ash/60 border border-white/10 px-2 py-0.5 rounded">
                {label}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default DishCard;