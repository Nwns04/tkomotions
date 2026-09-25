import { useState } from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import MenuTabs from '../components/MenuTabs';
import MenuSection from '../components/MenuSection';
import { menuCategories, tastingMenu } from '../data/menu';
import { formatNaira } from '../../shared/utils/formatCurrency';

function Menu() {
  const [activeCategory, setActiveCategory] = useState(menuCategories[0].id);

  const handleCategoryChange = (categoryId) => {
    setActiveCategory(categoryId);
    const element = document.getElementById(categoryId);
    if (element) {
      const yOffset = -100; // Adjust for sticky header
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <>
      <PageHeader
        title="The Menu"
        subtitle="A celebration of Nigerian cuisine"
        image="https://images.unsplash.com/photo-1544025162-d76694265947?w=1920&q=80"
      />

      <MenuTabs
        categories={menuCategories}
        activeCategory={activeCategory}
        onCategoryChange={handleCategoryChange}
      />

      <div className="container-hotel py-16 px-4 md:px-6 lg:px-8">
        {/* Menu Sections with Images */}
        {menuCategories.map(category => (
          <MenuSection key={category.id} category={category} />
        ))}

        {/* Dietary Legend */}
        <div className="border-t border-white/10 pt-8 mb-16">
          <p className="text-ash text-sm mb-4">Dietary Legend:</p>
          <div className="flex flex-wrap gap-4">
            <span className="text-xs text-ash border border-white/10 px-3 py-1 rounded">V — Vegetarian</span>
            <span className="text-xs text-ash border border-white/10 px-3 py-1 rounded">GF — Gluten Free</span>
            <span className="text-xs text-ash border border-white/10 px-3 py-1 rounded">DF — Dairy Free</span>
          </div>
        </div>

        {/* Tasting Menu */}
        <div className="bg-charcoal border border-white/10 rounded-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="relative h-[300px] lg:h-auto">
              <img
                src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1200&q=80"
                alt={tastingMenu.name}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ember-black to-transparent" />
            </div>
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <p className="text-ember-orange text-xs font-medium tracking-[0.3em] uppercase mb-4">
                The Ultimate Experience
              </p>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-cream mb-4">
                {tastingMenu.name}
              </h2>
              <p className="text-ash leading-relaxed mb-6">
                {tastingMenu.description}
              </p>
              <div className="flex items-center justify-between mb-8">
                <div>
                  <p className="text-sm text-ash">{tastingMenu.courses} courses</p>
                  <p className="text-sm text-ash">Wine pairing available</p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-serif text-cream">{formatNaira(tastingMenu.price)}</p>
                  <p className="text-xs text-ash">per person</p>
                </div>
              </div>
              <Link to="/restaurant/reservations" className="btn-restaurant btn-restaurant-primary">
                Reserve for Tasting Menu
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Menu;