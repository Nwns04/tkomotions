import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;

    const moveDot = (e) => {
      gsap.to(dot, { x: e.clientX, y: e.clientY, duration: 0.1 });
    };

    const moveRing = (e) => {
      gsap.to(ring, { x: e.clientX, y: e.clientY, duration: 0.5, ease: 'power3.out' });
    };

    window.addEventListener('mousemove', moveDot);
    window.addEventListener('mousemove', moveRing);

    return () => {
      window.removeEventListener('mousemove', moveDot);
      window.removeEventListener('mousemove', moveRing);
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className="hidden lg:block fixed top-0 left-0 w-2 h-2 bg-bronze rounded-full pointer-events-none z-[80] -translate-x-1/2 -translate-y-1/2"
      />
      <div
        ref={ringRef}
        className="hidden lg:block fixed top-0 left-0 w-8 h-8 border border-bronze/50 rounded-full pointer-events-none z-[80] -translate-x-1/2 -translate-y-1/2"
      />
    </>
  );
}

export default CustomCursor;