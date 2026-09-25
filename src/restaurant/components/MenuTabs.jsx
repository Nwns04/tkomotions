import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

function MenuTabs({ categories, activeCategory, onCategoryChange }) {
  const ref = useRef(null);

  useEffect(() => {
    gsap.fromTo(ref.current,
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }
    );
  }, []);

  return (
    <div ref={ref} className="sticky top-20 z-40 bg-ember-black/95 backdrop-blur-md border-b border-white/10">
      <div className="container-hotel overflow-x-auto">
        <div className="flex space-x-1 py-4 min-w-max">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => onCategoryChange(category.id)}
              className={`px-4 py-2 text-sm uppercase tracking-wider transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-ember-orange text-white'
                  : 'text-ash hover:text-cream hover:bg-white/5'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MenuTabs;