import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function SectionHeading({ eyebrow, title, description, align = 'center', light = false, className }) {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    
    gsap.fromTo(element.querySelectorAll('.heading-animate'),
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
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

  const textColor = light ? 'text-cream' : 'text-ember-black';
  const descriptionColor = light ? 'text-ash' : 'text-ash';

  return (
    <div ref={ref} className={`max-w-3xl ${alignment[align]} ${className || ''}`}>
      {eyebrow && (
        <p className="heading-animate text-xs font-medium tracking-[0.3em] uppercase text-ember-orange mb-4">
          {eyebrow}
        </p>
      )}
      {title && (
        <h2 className={`heading-animate text-4xl md:text-5xl font-serif font-bold ${textColor} mb-6 leading-tight`}>
          {title}
        </h2>
      )}
      {description && (
        <p className={`heading-animate text-lg ${descriptionColor} leading-relaxed`}>
          {description}
        </p>
      )}
    </div>
  );
}

export default SectionHeading;