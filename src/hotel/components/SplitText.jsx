import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function SplitText({ 
  text, 
  as: Tag = 'h2', 
  className, 
  delay = 0,
  stagger = 0.03,
  triggerOnScroll = true,
}) {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    const words = element.querySelectorAll('.split-word');

    if (triggerOnScroll) {
      gsap.fromTo(words,
        { opacity: 0, y: 50, rotateX: -40 },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          duration: 0.8,
          stagger,
          delay,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: element,
            start: 'top 85%',
          },
        }
      );
    } else {
      gsap.fromTo(words,
        { opacity: 0, y: 50, rotateX: -40 },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          duration: 0.8,
          stagger,
          delay,
          ease: 'power3.out',
        }
      );
    }
  }, [text, delay, stagger, triggerOnScroll]);

  const words = text.split(' ');

  return (
    <Tag ref={ref} className={className} style={{ perspective: '1000px' }}>
      {words.map((word, index) => (
        <span
          key={index}
          className="split-word inline-block will-change-transform"
          style={{ transformOrigin: 'bottom center' }}
        >
          {word}
          {index < words.length - 1 && '\u00A0'}
        </span>
      ))}
    </Tag>
  );
}

export default SplitText;