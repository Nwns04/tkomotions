import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';

function Hero() {
  const contentRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    // Ken Burns effect
    gsap.fromTo(imageRef.current,
      { scale: 1.2, opacity: 0 },
      { scale: 1, opacity: 1, duration: 2, ease: 'power2.out' }
    );

    // Text entrance
    gsap.fromTo(contentRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.2, ease: 'power3.out', delay: 0.5 }
    );
  }, []);

  return (
    <section className="relative h-screen overflow-hidden bg-ember-black">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          ref={imageRef}
          src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=1920&q=80"
          alt="Ember fire kitchen"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ember-black via-ember-black/40 to-ember-black/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-ember-black/80 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative h-full container-hotel flex flex-col justify-center">
        <div ref={contentRef} className="max-w-3xl">
          <p className="text-ember-orange text-sm font-medium tracking-[0.3em] uppercase mb-6">
            Maitama · Abuja
          </p>
          <h1 className="text-7xl md:text-9xl font-serif font-bold text-cream mb-4 leading-none">
            EMBER
          </h1>
          <p className="text-xl md:text-2xl font-light text-ash mb-2">
            Contemporary African Kitchen
          </p>
          <p className="text-lg text-ash/70 mb-10">
            Where fire meets flavour
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/restaurant/reservations" className="btn-restaurant btn-restaurant-primary">
              Reserve a Table
            </Link>
            <Link to="/restaurant/menu" className="btn-restaurant border border-cream/30 text-cream hover:bg-cream/10">
              Explore the Menu
            </Link>
          </div>
        </div>
      </div>

      {/* Opening Hours */}
      <div className="absolute bottom-8 right-8 hidden md:block">
        <div className="bg-ember-black/80 backdrop-blur-md border border-white/10 p-4 rounded-lg">
          <p className="text-xs text-ash mb-2">Tonight's Hours</p>
          <p className="text-sm text-cream">6:00 PM – 11:00 PM</p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center">
        <span className="text-ash text-xs uppercase tracking-wider mb-2">Scroll</span>
        <div className="w-px h-10 bg-white/20 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-ember-orange animate-pulse" />
        </div>
      </div>
    </section>
  );
}

export default Hero;