import { useState, useEffect } from 'react';
import { gsap } from 'gsap';

function Testimonial({ testimonials }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  useEffect(() => {
    gsap.fromTo('.testimonial-content',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
    );
  }, [currentIndex]);

  const current = testimonials[currentIndex];

  return (
    <div className="text-center max-w-4xl mx-auto">
      <div className="testimonial-content">
        <div className="flex justify-center mb-6">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-5 h-5 text-ember-orange" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        <blockquote className="text-2xl md:text-3xl font-serif italic text-cream leading-relaxed mb-8">
          "{current.quote}"
        </blockquote>
        <div className="flex flex-col items-center">
          <p className="font-medium text-cream">{current.name}</p>
          <p className="text-sm text-ash mt-1">{current.role}</p>
        </div>
      </div>

      <div className="flex justify-center space-x-2 mt-8">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex ? 'bg-ember-orange w-6' : 'bg-white/20'
            }`}
            aria-label={`Testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default Testimonial;