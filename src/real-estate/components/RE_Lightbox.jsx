import { useEffect } from 'react';

function RE_Lightbox({ isOpen, onClose, image, images, currentIndex, onNavigate }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

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

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[70] bg-ink/90 flex items-center justify-center p-4">
      <button onClick={onClose} className="absolute top-6 right-6 text-white hover:text-gold transition-colors" aria-label="Close">
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {currentIndex > 0 && (
        <button onClick={() => onNavigate(currentIndex - 1)} className="absolute left-6 top-1/2 -translate-y-1/2 text-white hover:text-gold transition-colors" aria-label="Previous">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      )}

      <img src={image} alt="Property" className="max-w-5xl max-h-[80vh] object-contain rounded-lg" />

      {currentIndex < images.length - 1 && (
        <button onClick={() => onNavigate(currentIndex + 1)} className="absolute right-6 top-1/2 -translate-y-1/2 text-white hover:text-gold transition-colors" aria-label="Next">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      )}

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60 text-sm">
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  );
}

export default RE_Lightbox;