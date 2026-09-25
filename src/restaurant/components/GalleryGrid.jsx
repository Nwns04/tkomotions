import { useState } from 'react';
import { galleryImages } from '../data/gallery';
import Lightbox from './Lightbox';

function GalleryGrid() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [filter, setFilter] = useState('all');

  const categories = ['all', 'dishes', 'fire-kitchen', 'interiors', 'people'];

  const filteredImages = filter === 'all'
    ? galleryImages
    : galleryImages.filter(img => img.category === filter);

  return (
    <>
      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-2 text-sm uppercase tracking-wider transition-colors ${
              filter === cat
                ? 'bg-ember-orange text-white'
                : 'text-ash hover:text-cream border border-white/10'
            }`}
          >
            {cat.replace('-', ' ')}
          </button>
        ))}
      </div>

      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4">
        {filteredImages.map(image => (
          <button
            key={image.id}
            onClick={() => setSelectedImage(image)}
            className="block w-full mb-4 break-inside-avoid group relative overflow-hidden"
          >
            <img
              src={image.image}
              alt={image.caption}
              className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-end">
              <p className="text-cream text-sm p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {image.caption}
              </p>
            </div>
          </button>
        ))}
      </div>

      <Lightbox
        isOpen={!!selectedImage}
        onClose={() => setSelectedImage(null)}
        image={selectedImage}
        images={filteredImages}
        currentIndex={selectedImage ? filteredImages.findIndex(img => img.id === selectedImage.id) : 0}
        onNavigate={(index) => setSelectedImage(filteredImages[index])}
      />
    </>
  );
}

export default GalleryGrid;