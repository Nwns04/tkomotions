import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';

const heroSlides = [
  {
    id: 1,
    image: 'https://images.pexels.com/photos/1205651/pexels-photo-1205651.jpeg?w=1920&q=80',
    eyebrow: '2026/2027 Admissions',
    title: 'A Strong Start for Every Learner',
    subtitle: 'A clear, parent-friendly school website can turn first impressions into visits, enquiries, and enrolment.',
    alt: 'Graduating students in caps and gowns',
  },
  {
    id: 2,
    image: 'https://images.pexels.com/photos/8613319/pexels-photo-8613319.jpeg?w=1920&q=80',
    eyebrow: 'Joyful Learning',
    title: 'Where Children Love to Learn',
    subtitle: 'Play-based learning that sparks curiosity and builds confidence from day one.',
    alt: 'Children playing and learning together',
  },
  {
    id: 3,
    image: 'https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg?w=1920&q=80',
    eyebrow: 'Strong Partnership',
    title: 'Parents as Partners',
    subtitle: 'Regular parent-teacher meetings, workshops, and community events throughout the year.',
    alt: 'Parent-teacher meeting at school',
  },
];

function SchoolHeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const contentRef = useRef(null);

  // Auto-play
  useEffect(() => {
    const timer = setInterval(() => {
      if (!isAnimating) {
        goToSlide((currentSlide + 1) % heroSlides.length);
      }
    }, 6000);
    return () => clearInterval(timer);
  }, [currentSlide, isAnimating]);

  // Initial entrance
  useEffect(() => {
    gsap.fromTo(contentRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out', delay: 0.3 }
    );
  }, []);

  const goToSlide = (index) => {
    if (isAnimating || index === currentSlide) return;
    
    setIsAnimating(true);
    
    gsap.to(contentRef.current, {
      opacity: 0,
      y: -30,
      duration: 0.5,
      ease: 'power2.in',
      onComplete: () => {
        setCurrentSlide(index);
        
        gsap.fromTo(contentRef.current,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out',
            onComplete: () => setIsAnimating(false),
          }
        );
      },
    });
  };

  return (
    <section className="relative h-[85vh] min-h-[600px] overflow-hidden">
      {/* Background Images */}
      {heroSlides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={slide.image}
            alt={slide.alt}
            className="w-full h-full object-cover"
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-ink/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-ink/30" />
        </div>
      ))}

      {/* Content */}
      <div className="relative h-full container-hotel flex items-center">
        <div ref={contentRef} className="max-w-3xl text-center mx-auto">
          {/* Crest */}
          <div className="w-16 h-16 rounded-full bg-oak-green border-2 border-gold flex items-center justify-center mx-auto mb-6">
            <span className="text-white font-serif font-bold text-2xl">C</span>
          </div>

          {/* Eyebrow */}
          <p className="text-gold text-sm font-semibold tracking-[0.3em] uppercase mb-4">
            {heroSlides[currentSlide].eyebrow}
          </p>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 leading-tight">
            {heroSlides[currentSlide].title}
          </h1>

          {/* Subtitle */}
          <p className="text-white/80 text-lg md:text-xl mb-10">
            {heroSlides[currentSlide].subtitle}
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/school/admissions"
              className="bg-gold text-ink px-8 py-4 text-sm font-semibold uppercase tracking-wide rounded hover:bg-ochre transition-colors"
            >
              Apply Now
            </Link>
            <Link
              to="/school/contact"
              className="border-2 border-white text-white px-8 py-4 text-sm font-semibold uppercase tracking-wide rounded hover:bg-white/10 transition-colors"
            >
              Book a Tour
            </Link>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center space-x-3 z-10">
        {heroSlides.map((slide, index) => (
          <button
            key={slide.id}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-500 ${
              index === currentSlide
                ? 'w-12 h-1.5 bg-gold rounded-full'
                : 'w-6 h-1.5 bg-white/40 rounded-full hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Slide Counter */}
      <div className="absolute bottom-8 left-8 z-10 hidden md:block">
        <p className="text-white/60 text-sm font-light tracking-widest">
          {String(currentSlide + 1).padStart(2, '0')} — {String(heroSlides.length).padStart(2, '0')}
        </p>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 right-8 z-10 hidden md:flex flex-col items-center">
        <span className="text-white/60 text-xs uppercase tracking-wider mb-2">Scroll</span>
        <div className="w-px h-10 bg-white/30 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-gold animate-pulse" />
        </div>
      </div>
    </section>
  );
}

export default SchoolHeroCarousel;