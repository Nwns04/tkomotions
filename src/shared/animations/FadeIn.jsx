import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

function FadeIn({ children, delay = 0, y = 30, className }) {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    gsap.fromTo(element,
      { opacity: 0, y },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.8, 
        delay,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: element,
          start: 'top 85%',
        }
      }
    );
  }, [delay, y]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

export default FadeIn;