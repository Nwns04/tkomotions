import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function SchoolSectionHeading({ eyebrow, title, description, align = 'center', className }) {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    
    gsap.fromTo(element.querySelectorAll('.heading-animate'),
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: element,
          start: 'top 85%',
        },
      }
    );
  }, []);

  const alignment = {
    center: 'text-center mx-auto',
    left: 'text-left',
  };

  return (
    <div ref={ref} className={`max-w-3xl ${alignment[align]} ${className || ''}`}>
      {eyebrow && (
        <p className="heading-animate text-deep-green text-sm font-semibold tracking-[0.25em] uppercase mb-3">
          {eyebrow}
        </p>
      )}
      {title && (
        <h2 className="heading-animate text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-ink mb-4 leading-tight">
          {title}
        </h2>
      )}
      <div className="heading-animate w-16 h-1 bg-gold mx-auto mb-4" />
      {description && (
        <p className="heading-animate text-lg text-slate leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}

export default SchoolSectionHeading;