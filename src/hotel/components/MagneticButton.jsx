import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

function MagneticButton({ children, className, strength = 0.3, ...props }) {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    
    const handleMouseMove = (e) => {
      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      
      gsap.to(element, {
        x: x * strength,
        y: y * strength,
        duration: 0.4,
        ease: 'power3.out',
      });
    };

    const handleMouseLeave = () => {
      gsap.to(element, {
        x: 0,
        y: 0,
        duration: 0.6,
        ease: 'elastic.out(1, 0.3)',
      });
    };

    element.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      element.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [strength]);

  return (
    <button
      ref={ref}
      className={`magnetic-button inline-block ${className || ''}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default MagneticButton;