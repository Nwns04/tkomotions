import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function ParallaxImage({ 
  src, 
  alt, 
  className, 
  speed = 0.3, 
  overlay = false,
  loading = 'lazy',
}) {
  const containerRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const image = imageRef.current;

    gsap.to(image, {
      yPercent: speed * 100,
      ease: 'none',
      scrollTrigger: {
        trigger: container,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    });
  }, [speed]);

  return (
    <div ref={containerRef} className={`relative overflow-hidden ${className || ''}`}>
      <img
        ref={imageRef}
        src={src}
        alt={alt}
        className="w-full h-full object-cover scale-110"
        loading={loading}
      />
      {overlay && (
        <div className="absolute inset-0 bg-black/30" />
      )}
    </div>
  );
}

export default ParallaxImage;