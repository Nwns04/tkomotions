import { cn } from '../utils/cn';

function Button({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className, 
  ...props 
}) {
  const variants = {
    primary: 'btn-primary',
    outline: 'btn-outline',
    dark: 'btn-dark',
    white: 'btn-white',
    ghost: 'text-bronze hover:text-ink',
  };
  
  const sizes = {
    sm: 'px-4 py-2 text-xs',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base',
  };
  
  return (
    <button
      className={cn('btn', variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;