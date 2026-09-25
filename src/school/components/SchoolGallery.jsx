import { useState } from 'react';
import { galleryImages } from '../data/gallery';
import SchoolLightbox from './SchoolLightbox';

function SchoolGallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [filter, setFilter] = useState('all');

  const categories = ['all', 'campus', 'classroom', 'sports', 'arts', 'community'];

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
            className={`px-4 py-2 text-sm uppercase tracking-wider transition-colors rounded-full ${
              filter === cat
                ? 'bg-oak-green text-white'
                : 'text-slate hover:text-oak-green border border-slate/20'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4">
        {filteredImages.map(image => (
          <button
            key={image.id}
            onClick={() => setSelectedImage(image)}
            className="block w-full mb-4 break-inside-avoid group relative overflow-hidden rounded-lg"
          >
            <img
              src={image.image}
              alt={image.caption}
              className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-oak-green/0 group-hover:bg-oak-green/30 transition-colors duration-300 flex items-end">
              <p className="text-white text-sm p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {image.caption}
              </p>
            </div>
          </button>
        ))}
      </div>

      <SchoolLightbox
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

export default SchoolGallery;