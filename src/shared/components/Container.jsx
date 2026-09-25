import { cn } from '../utils/cn';

function Container({ children, className, ...props }) {
  return (
    <div className={cn('container-hotel', className)} {...props}>
      {children}
    </div>
  );
}

export default Container;