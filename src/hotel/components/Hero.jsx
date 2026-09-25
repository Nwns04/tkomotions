import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';

const heroSlides = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1920&q=80',
    eyebrow: 'Ikoyi · Lagos',
    title: 'A Private Estate in the Heart of the City',
    subtitle: 'Forty-eight rooms. One quiet address.',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1920&q=80',
    eyebrow: 'The Pool',
    title: 'Where Time Slows Down',
    subtitle: 'A 25-metre pool surrounded by tropical gardens.',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&q=80',
    eyebrow: 'Ori Restaurant',
    title: 'A Table Worth Travelling For',
    subtitle: 'Nigerian coastal cuisine, refined for the modern palate.',
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=1920&q=80',
    eyebrow: 'The Rooms',
    title: 'Designed for Disappearing',
    subtitle: 'Natural materials, soft light, and perfect silence.',
  },
];

function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const contentRef = useRef(null);
  const imageRefs = useRef([]);

  useEffect(() => {
    const timer = setInterval(() => {
      if (!isAnimating) {
        goToSlide((currentSlide + 1) % heroSlides.length);
      }
    }, 6000);

    return () => clearInterval(timer);
  }, [currentSlide, isAnimating]);

  // Ken Burns effect on current image
  useEffect(() => {
    const currentImage = imageRefs.current[currentSlide];
    if (currentImage) {
      gsap.fromTo(currentImage,
        { scale: 1, x: 0 },
        {
          scale: 1.1,
          x: -20,
          duration: 6,
          ease: 'none',
        }
      );
    }
  }, [currentSlide]);

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
    <section className="relative h-screen overflow-hidden">
      {/* Background Images with Ken Burns */}
      {heroSlides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            ref={el => imageRefs.current[index] = el}
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          {/* Strong gradient overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20" />
        </div>
      ))}

      {/* Content */}
      <div className="relative h-full container-hotel flex flex-col justify-end pb-24 md:pb-32">
        <div ref={contentRef} className="max-w-4xl">
          {/* Eyebrow with bronze line */}
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-12 h-px bg-hotel-bronze" />
            <p className="text-hotel-champagne text-sm font-medium tracking-[0.3em] uppercase drop-shadow-lg">
              {heroSlides[currentSlide].eyebrow}
            </p>
          </div>
          
          {/* Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-light text-white leading-tight mb-6 drop-shadow-2xl">
            {heroSlides[currentSlide].title}
          </h1>
          
          {/* Subtitle */}
          <p className="text-lg md:text-xl text-white/90 font-light mb-8 drop-shadow-lg">
            {heroSlides[currentSlide].subtitle}
          </p>
          
          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <Link to="/hotel/rooms" className="btn-hotel btn-hotel-primary">
              Explore Rooms
            </Link>
            <Link to="/hotel/contact" className="btn-hotel border border-white text-white hover:bg-white hover:text-hotel-ink">
              Reserve Your Stay
            </Link>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 right-8 flex items-center space-x-3 z-10">
        {heroSlides.map((slide, index) => (
          <button
            key={slide.id}
            onClick={() => goToSlide(index)}
            className={`relative transition-all duration-500 ${
              index === currentSlide
                ? 'w-12 h-1 bg-hotel-bronze'
                : 'w-6 h-1 bg-white/40 hover:bg-white/70'
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
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center">
        <span className="text-white/60 text-xs uppercase tracking-wider mb-2">Scroll</span>
        <div className="w-px h-10 bg-white/30 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-white animate-pulse" />
        </div>
      </div>
    </section>
  );
}

export default Hero;