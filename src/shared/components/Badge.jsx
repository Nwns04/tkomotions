import { cn } from '../utils/cn';

function Badge({ children, variant = 'bronze', className }) {
  const variants = {
    bronze: 'bg-bronze text-white',
    outline: 'border border-bronze text-bronze',
    dark: 'bg-charcoal text-white',
    light: 'bg-white text-ink',
  };
  
  return (
    <span className={cn(
      'inline-flex items-center px-3 py-1 text-xs font-medium tracking-wider uppercase',
      variants[variant],
      className
    )}>
      {children}
    </span>
  );
}

export default Badge;