import { useEffect } from 'react';
import RE_FilterSidebar from './RE_FilterSidebar';

function RE_FilterDrawer({ isOpen, onClose }) {
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

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] lg:hidden">
      <div className="absolute inset-0 bg-ink/50" onClick={onClose} />
      <div className="absolute left-0 top-0 h-full w-full max-w-xs bg-white shadow-2xl overflow-y-auto">
        <div className="flex items-center justify-between p-6 border-b border-border">
          <h3 className="font-semibold text-dark-gray">Filters</h3>
          <button onClick={onClose} className="text-muted hover:text-dark-gray" aria-label="Close filters">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="p-6">
          <RE_FilterSidebar />
        </div>
        <div className="p-6 border-t border-border">
          <button onClick={onClose} className="w-full bg-navy text-white px-6 py-3 font-semibold rounded hover:bg-dark-gray transition-colors">
            Apply Filters
          </button>
        </div>
      </div>
    </div>
  );
}

export default RE_FilterDrawer;