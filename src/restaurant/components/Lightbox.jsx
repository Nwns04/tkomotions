import { useEffect } from 'react';
import { gsap } from 'gsap';

function Lightbox({ isOpen, onClose, image, images, currentIndex, onNavigate }) {
  useEffect(() => {
    if (isOpen) {
      gsap.fromTo('.lightbox',
        { opacity: 0 },
        { opacity: 1, duration: 0.3 }
      );
      gsap.fromTo('.lightbox-image',
        { scale: 0.9, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.4, ease: 'power3.out' }
      );
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, currentIndex]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft' && currentIndex > 0) onNavigate(currentIndex - 1);
      if (e.key === 'ArrowRight' && currentIndex < images.length - 1) onNavigate(currentIndex + 1);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentIndex, images.length, onClose, onNavigate]);

  if (!isOpen || !image) return null;

  return (
    <div className="lightbox fixed inset-0 z-[70] flex items-center justify-center p-4 bg-ember-black">
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-ash hover:text-cream transition-colors z-10"
        aria-label="Close"
      >
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {currentIndex > 0 && (
        <button
          onClick={() => onNavigate(currentIndex - 1)}
          className="absolute left-6 top-1/2 -translate-y-1/2 text-ash hover:text-cream transition-colors z-10"
          aria-label="Previous image"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      )}

      <div className="lightbox-image relative max-w-5xl max-h-[80vh]">
        <img
          src={image.image}
          alt={image.caption}
          className="w-full h-full object-contain"
        />
        <p className="absolute bottom-4 left-0 right-0 text-center text-cream text-sm">
          {image.caption}
        </p>
      </div>

      {currentIndex < images.length - 1 && (
        <button
          onClick={() => onNavigate(currentIndex + 1)}
          className="absolute right-6 top-1/2 -translate-y-1/2 text-ash hover:text-cream transition-colors z-10"
          aria-label="Next image"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      )}

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-ash/50 text-sm">
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  );
}

export default Lightbox;