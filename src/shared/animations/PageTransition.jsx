import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export function PageTransition({ children }) {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    gsap.fromTo(element,
      { opacity: 0, y: 30 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.8, 
        ease: 'power3.out',
        clearProps: 'transform'
      }
    );
  }, []);

  return (
    <div ref={ref}>
      {children}
    </div>
  );
}