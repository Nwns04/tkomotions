import { useState } from 'react';
import RE_Lightbox from './RE_Lightbox';

function RE_PropertyGallery({ images, title }) {
  const [activeImage, setActiveImage] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  return (
    <div>
      {/* Main Image */}
      <div 
        className="relative h-[500px] overflow-hidden rounded-lg cursor-pointer"
        onClick={() => setLightboxOpen(true)}
      >
        <img src={images[activeImage]} alt={title} className="w-full h-full object-cover" />
        <div className="absolute bottom-4 right-4 bg-ink/70 text-white text-sm px-3 py-1 rounded-full">
          {activeImage + 1} / {images.length}
        </div>
      </div>

      {/* Thumbnails */}
      <div className="flex gap-3 mt-4">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setActiveImage(index)}
            className={`w-24 h-24 rounded-lg overflow-hidden border-2 transition-all ${
              activeImage === index ? 'border-navy' : 'border-transparent opacity-60 hover:opacity-100'
            }`}
          >
            <img src={image} alt={`${title} ${index + 1}`} className="w-full h-full object-cover" />
          </button>
        ))}
      </div>

      {/* Lightbox */}
      <RE_Lightbox
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        image={images[activeImage]}
        images={images}
        currentIndex={activeImage}
        onNavigate={setActiveImage}
      />
    </div>
  );
}

export default RE_PropertyGallery;