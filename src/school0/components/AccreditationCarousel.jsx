import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const accreditations = [
  {
    id: 1,
    name: 'Cambridge International',
    description: 'Registered Cambridge International School offering IGCSE and A-Level qualifications.',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
      </svg>
    ),
  },
  {
    id: 2,
    name: 'WAEC',
    description: 'Approved centre for West African Examinations Council (WAEC) examinations.',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    id: 3,
    name: 'COBIS',
    description: 'Member of the Council of British International Schools, ensuring British standards.',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 21h18M5 21V7l8-4v18M19 21V11l-6-4" />
      </svg>
    ),
  },
  {
    id: 4,
    name: 'AISA',
    description: 'Member of the Association of International Schools in Africa.',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    id: 5,
    name: 'British Council',
    description: 'Partner school with the British Council for international education programmes.',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    id: 6,
    name: 'Cambridge PDQ',
    description: 'Centre for Cambridge Professional Development Qualifications for teachers.',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
];

function AccreditationCarousel() {
  const trackRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    
    // Duplicate content for infinite scroll
    if (track) {
      const items = track.innerHTML;
      track.innerHTML = items + items;
    }

    // GSAP infinite marquee
    const tween = gsap.to(track, {
      xPercent: -50,
      duration: 30,
      ease: 'none',
      repeat: -1,
    });

    return () => {
      tween.kill();
    };
  }, []);

  // Pause on hover
  const handleMouseEnter = () => {
    gsap.to(trackRef.current, { timeScale: 0, duration: 0.3 });
  };

  const handleMouseLeave = () => {
    gsap.to(trackRef.current, { timeScale: 1, duration: 0.3 });
  };

  return (
    <section ref={sectionRef} className="bg-soft-gray py-16 overflow-hidden">
      <div className="container-hotel px-4 md:px-6 lg:px-8 mb-12">
        <div className="text-center">
          <p className="text-deep-green text-sm font-semibold tracking-[0.25em] uppercase mb-3">
            Recognised Worldwide
          </p>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-ink mb-4">
            Accreditations & Affiliations
          </h2>
          <div className="w-16 h-1 bg-gold mx-auto rounded-full" />
        </div>
      </div>

      <div
        className="relative"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Gradient Edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-soft-gray to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-soft-gray to-transparent z-10" />

        {/* Carousel Track */}
        <div ref={trackRef} className="flex gap-8 px-8">
          {accreditations.map(acc => (
            <div
              key={acc.id}
              className="flex-shrink-0 w-72 bg-white border border-slate/20 rounded-lg p-8 text-center hover:shadow-lg hover:border-deep-green transition-all duration-300"
            >
              <div className="w-20 h-20 bg-mint rounded-full flex items-center justify-center mx-auto mb-4 text-oak-green">
                {acc.icon}
              </div>
              <h3 className="font-serif font-bold text-ink mb-2">{acc.name}</h3>
              <p className="text-sm text-slate leading-relaxed">{acc.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AccreditationCarousel;