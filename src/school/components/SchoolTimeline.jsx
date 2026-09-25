import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function SchoolTimeline({ events }) {
  const containerRef = useRef(null);
  const lineRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const line = lineRef.current;

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

    const items = container.querySelectorAll('.timeline-item');
    
    items.forEach((item) => {
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

      gsap.fromTo(item.querySelector('.timeline-content'),
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'power3.out',
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
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-slate/20 transform md:-translate-x-1/2">
        <div
          ref={lineRef}
          className="w-full h-full bg-gradient-to-b from-oak-green via-deep-green to-gold origin-top"
        />
      </div>

      <div className="space-y-12 md:space-y-16">
        {events.map((event, index) => (
          <div
            key={event.id}
            className={`timeline-item relative flex flex-col md:flex-row items-start gap-6 ${
              index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
            }`}
          >
            <div className="absolute left-4 md:left-1/2 -translate-x-1/2 z-10 mt-2">
              <div className="timeline-dot w-4 h-4 bg-oak-green rounded-full border-2 border-white shadow" />
            </div>

            <div className={`ml-12 md:ml-0 md:w-1/2 ${
              index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'
            }`}>
              <div className="timeline-content bg-white p-6 rounded-lg shadow-sm">
                <p className="text-oak-green text-sm font-semibold mb-2">{event.period}</p>
                <h3 className="text-xl font-serif font-bold text-ink mb-2">{event.title}</h3>
                <p className="text-slate text-sm leading-relaxed">{event.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SchoolTimeline;