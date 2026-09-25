import { cn } from '../utils/cn';

function Card({ children, className, hover = false, ...props }) {
  return (
    <div
      className={cn(
        'bg-white border border-sand overflow-hidden',
        hover && 'transition-all duration-300 hover:shadow-lg hover:shadow-black/5 hover:-translate-y-1',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export default Card;
