import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';

function SchoolHero() {
  const contentRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(contentRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.2, ease: 'power3.out', delay: 0.3 }
    );
  }, []);

  return (
    <section className="relative h-screen overflow-hidden bg-cream">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1920&q=80"
          alt="Diverse students at Oakbridge"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/70 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative h-full container-hotel flex flex-col justify-center">
        <div ref={contentRef} className="max-w-2xl">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-oak-green flex items-center justify-center">
              <span className="text-white font-serif font-bold text-lg">O</span>
            </div>
            <div>
              <p className="text-oak-green font-serif font-bold">OAKBRIDGE</p>
              <p className="text-xs text-slate uppercase tracking-wider">International School</p>
            </div>
          </div>

          <p className="text-deep-green text-sm font-semibold tracking-[0.3em] uppercase mb-4">
            Est. 2008 · Lekki, Lagos
          </p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-ink mb-6 leading-tight">
            Where Children Grow Into Who They Are Meant to Be
          </h1>
          <p className="text-lg md:text-xl text-slate mb-8">
            A co-educational British-Nigerian school for ages 18 months to 18 years.
          </p>
          <div className="flex flex-wrap gap-4 mb-8">
            <Link to="/school/admissions" className="btn-school btn-school-primary">
              Apply for Admission
            </Link>
            <Link to="/school/contact" className="btn-school border-2 border-oak-green text-oak-green hover:bg-oak-green hover:text-white">
              Book a Tour
            </Link>
          </div>
          <div className="flex flex-wrap gap-4 text-sm text-slate">
            <span className="flex items-center">
              <span className="w-1.5 h-1.5 bg-deep-green rounded-full mr-2" />
              British Curriculum
            </span>
            <span className="flex items-center">
              <span className="w-1.5 h-1.5 bg-deep-green rounded-full mr-2" />
              WAEC
            </span>
            <span className="flex items-center">
              <span className="w-1.5 h-1.5 bg-deep-green rounded-full mr-2" />
              Cambridge
            </span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center">
        <span className="text-slate text-xs uppercase tracking-wider mb-2">Scroll</span>
        <div className="w-px h-10 bg-slate/30 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-oak-green animate-pulse" />
        </div>
      </div>
    </section>
  );
}

export default SchoolHero;