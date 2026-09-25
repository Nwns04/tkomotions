import { cn } from '../utils/cn';

function Section({ children, className, id, ...props }) {
  return (
    <section className={cn('section-padding', className)} id={id} {...props}>
      {children}
    </section>
  );
}

export default Section;