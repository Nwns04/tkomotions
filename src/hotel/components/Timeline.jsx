import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Timeline({ events }) {
  const containerRef = useRef(null);
  const lineRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const line = lineRef.current;

    // Animate the vertical line
    gsap.fromTo(line,
      { scaleY: 0 },
      {
        scaleY: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: container,
          start: 'top 70%',
          end: 'bottom 30%',
          scrub: 1,
        },
      }
    );

    // Animate each timeline item
    const items = container.querySelectorAll('.timeline-item');
    
    items.forEach((item, index) => {
      // Animate the dot
      gsap.fromTo(item.querySelector('.timeline-dot'),
        { scale: 0, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.4,
          ease: 'back.out(2)',
          scrollTrigger: {
            trigger: item,
            start: 'top 75%',
          },
        }
      );

      // Animate the year
      gsap.fromTo(item.querySelector('.timeline-year'),
        { opacity: 0, x: index % 2 === 0 ? -30 : 30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: item,
            start: 'top 75%',
          },
        }
      );

      // Animate the image
      gsap.fromTo(item.querySelector('.timeline-image'),
        { opacity: 0, scale: 0.8, y: 20 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.6,
          ease: 'power3.out',
          delay: 0.1,
          scrollTrigger: {
            trigger: item,
            start: 'top 75%',
          },
        }
      );

      // Animate the content
      gsap.fromTo(item.querySelector('.timeline-content'),
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'power3.out',
          delay: 0.2,
          scrollTrigger: {
            trigger: item,
            start: 'top 75%',
          },
        }
      );
    });
  }, []);

  return (
    <div ref={containerRef} className="relative">
      {/* Vertical Line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-hotel-sand transform -translate-x-1/2 hidden md:block">
        <div
          ref={lineRef}
          className="w-full h-full bg-gradient-to-b from-hotel-bronze via-hotel-bronze to-hotel-champagne origin-top"
        />
      </div>
      
      {/* Mobile Line */}
      <div className="absolute left-4 top-0 bottom-0 w-px bg-hotel-sand md:hidden">
        <div className="w-full h-full bg-gradient-to-b from-hotel-bronze via-hotel-bronze to-hotel-champagne" />
      </div>

      {/* Timeline Items */}
      <div className="space-y-16 md:space-y-24">
        {events.map((event, index) => (
          <div
            key={event.year}
            className={`timeline-item relative flex flex-col md:flex-row items-center gap-6 md:gap-0 ${
              index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
            }`}
          >
            {/* Dot */}
            <div className="absolute left-4 md:left-1/2 -translate-x-1/2 z-10">
              <div className="timeline-dot relative w-4 h-4">
                <div className="absolute inset-0 bg-hotel-bronze rounded-full" />
                <div className="absolute inset-0 bg-hotel-bronze rounded-full animate-ping opacity-30" />
                <div className="absolute -inset-2 border border-hotel-bronze/30 rounded-full" />
              </div>
            </div>

            {/* Content Side */}
            <div className={`ml-12 md:ml-0 md:w-1/2 ${
              index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'
            }`}>
              {/* Year */}
              <p className="timeline-year text-4xl md:text-5xl font-serif font-light text-hotel-bronze mb-4">
                {event.year}
              </p>
              
              {/* Image */}
              <div className={`timeline-image relative overflow-hidden rounded-lg shadow-lg mb-6 ${
                index % 2 === 0 ? 'md:ml-auto' : ''
              }`}>
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-48 md:h-56 object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
            </div>

            {/* Text Side */}
            <div className={`ml-12 md:ml-0 md:w-1/2 ${
              index % 2 === 0 ? 'md:pl-12' : 'md:pr-12 md:text-right'
            }`}>
              <div className="timeline-content">
                <h3 className="text-xl md:text-2xl font-serif font-medium text-hotel-ink mb-3">
                  {event.title}
                </h3>
                <p className="text-hotel-ink/60 leading-relaxed">
                  {event.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Timeline;