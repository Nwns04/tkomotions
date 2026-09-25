import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function SectionHeading({ 
  eyebrow, 
  title, 
  description, 
  align = 'center', 
  className,
  light = false,
}) {
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
    right: 'text-right ml-auto',
  };

  const textColor = light ? 'text-white' : 'text-hotel-ink';
  const descriptionColor = light ? 'text-white/70' : 'text-hotel-ink/60';

  return (
    <div ref={ref} className={`max-w-3xl ${alignment[align]} ${className || ''}`}>
      {eyebrow && (
        <p className="heading-animate eyebrow-hotel text-hotel-bronze mb-6">
          {eyebrow}
        </p>
      )}
      {title && (
        <h2 className={`heading-animate text-4xl md:text-5xl font-serif font-light ${textColor} mb-8 leading-tight`}>
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