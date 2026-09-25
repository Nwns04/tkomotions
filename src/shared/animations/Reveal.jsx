import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Reveal({ children, variant = 'up', delay = 0, className }) {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    
    const variants = {
      up: { y: 60, x: 0 },
      down: { y: -60, x: 0 },
      left: { y: 0, x: 60 },
      right: { y: 0, x: -60 },
      scale: { y: 0, x: 0, scale: 0.8 },
    };

    gsap.fromTo(element,
      { opacity: 0, ...variants[variant] },
      {
        opacity: 1,
        y: 0,
        x: 0,
        scale: 1,
        duration: 0.8,
        delay,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: element,
          start: 'top 85%',
        }
      }
    );
  }, [variant, delay]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

export default Reveal;