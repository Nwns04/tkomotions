import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function SchoolScrollProgress() {
  const ref = useRef(null);

  useEffect(() => {
    gsap.to(ref.current, {
      scaleX: 1,
      ease: 'none',
      scrollTrigger: {
        trigger: document.body,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 0.3,
      },
    });
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-0.5 bg-transparent z-[55]">
      <div
        ref={ref}
        className="h-full bg-deep-green origin-left scale-x-0"
      />
    </div>
  );
}

export default SchoolScrollProgress;