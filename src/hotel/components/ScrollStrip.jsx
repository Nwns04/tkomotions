import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function ScrollStrip({ items }) {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    const totalWidth = element.scrollWidth - window.innerWidth;

    gsap.to(element, {
      x: -totalWidth,
      ease: 'none',
      scrollTrigger: {
        trigger: element,
        start: 'top top',
        end: () => `+=${totalWidth}`,
        pin: true,
        scrub: 1,
        invalidateOnRefresh: true,
      },
    });
  }, []);

  return (
    <div ref={ref} className="flex space-x-6 px-6">
      {items.map((item, index) => (
        <div
          key={index}
          className="flex-shrink-0 w-64 bg-white border border-sand overflow-hidden group"
        >
          <div className="h-40 overflow-hidden">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
          </div>
          <div className="p-4">
            <h3 className="font-medium">{item.name}</h3>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ScrollStrip;