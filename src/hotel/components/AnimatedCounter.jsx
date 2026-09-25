import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function AnimatedCounter({ value, suffix = '', duration = 2, className, isDecimal = false }) {
  const ref = useRef(null);
  const spanRef = useRef(null);

  useEffect(() => {
    const element = ref.current;
    const span = spanRef.current;
    
    const counter = { value: 0 };
    
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: element,
        start: 'top 85%',
      }
    });

    timeline.to(counter, {
      value,
      duration,
      ease: 'power2.out',
      onUpdate: () => {
        if (isDecimal) {
          span.textContent = counter.value.toFixed(1);
        } else {
          span.textContent = Math.floor(counter.value).toLocaleString();
        }
      },
    });

    return () => {
      timeline.kill();
    };
  }, [value, duration, isDecimal]);

  return (
    <div ref={ref} className={className}>
      <span ref={spanRef}>0</span>
      {suffix && <span>{suffix}</span>}
    </div>
  );
}

export default AnimatedCounter;