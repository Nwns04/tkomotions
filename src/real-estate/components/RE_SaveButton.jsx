import { usePropertyContext } from '../context/PropertyContext';

function RE_SaveButton({ propertyId, className }) {
  const { savedProperties, toggleSave } = usePropertyContext();
  const isSaved = savedProperties.includes(propertyId);

  return (
    <button
      onClick={() => toggleSave(propertyId)}
      className={`flex items-center space-x-1 transition-colors ${
        isSaved ? 'text-gold' : 'text-muted hover:text-gold'
      } ${className || ''}`}
      aria-label={isSaved ? 'Remove from saved' : 'Save property'}
    >
      <svg className="w-5 h-5" fill={isSaved ? 'currentColor' : 'none'} stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
      <span className="text-sm">{isSaved ? 'Saved' : 'Save'}</span>
    </button>
  );
}

export default RE_SaveButton;