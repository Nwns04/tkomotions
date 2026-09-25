import { cn } from '../utils/cn';

function Textarea({ label, error, className, ...props }) {
  return (
    <div className="space-y-1">
      {label && (
        <label className="block text-sm font-medium text-ink">
          {label}
        </label>
      )}
      <textarea
        className={cn(
          'w-full px-4 py-3 border border-sand rounded-md focus:outline-none focus:ring-2 focus:ring-bronze/50 focus:border-bronze transition-all resize-none',
          error && 'border-red-500',
          className
        )}
        rows={4}
        {...props}
      />
      {error && (
        <p className="text-xs text-red-500">{error}</p>
      )}
    </div>
  );
}

export default Textarea;