import DishCard from './DishCard';

function MenuSection({ category }) {
  return (
    <div id={category.id} className="mb-20 last:mb-8 scroll-mt-32">
      {/* Section Header */}
      <div className="mb-10 text-center">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-cream mb-2">
          {category.name}
        </h2>
        <p className="text-ember-orange text-sm italic mb-2">{category.yorubaName}</p>
        <p className="text-ash text-sm">{category.description}</p>
        <div className="w-16 h-px bg-ember-orange/50 mx-auto mt-6" />
      </div>

      {/* Dish Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {category.dishes.map(dish => (
          <DishCard key={dish.id} dish={dish} />
        ))}
      </div>
    </div>
  );
}

export default MenuSection;