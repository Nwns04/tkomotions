import { cn } from '../utils/cn';

function Select({ label, options, error, className, ...props }) {
  return (
    <div className="space-y-1">
      {label && (
        <label className="block text-sm font-medium text-ink">
          {label}
        </label>
      )}
      <select
        className={cn(
          'w-full px-4 py-3 border border-sand rounded-md focus:outline-none focus:ring-2 focus:ring-bronze/50 focus:border-bronze transition-all bg-white',
          error && 'border-red-500',
          className
        )}
        {...props}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && (
        <p className="text-xs text-red-500">{error}</p>
      )}
    </div>
  );
}

export default Select;