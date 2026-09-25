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
        <svg className="w-12 h-12 mx-auto mb-8 text-bronze" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.017 21v-7.391C14.017 8.78 16.688 5.834 21 5v2.935c-2.059.417-3.35 1.64-3.874 3.67H21V21h-6.983zM3 21v-7.391C3 8.78 5.688 5.834 10 5v2.935c-2.059.417-3.35 1.64-3.874 3.67H10V21H3z"/>
        </svg>
        <blockquote className="text-2xl md:text-3xl font-serif font-light italic text-ink leading-relaxed mb-8">
          "{current.quote}"
        </blockquote>
        <div className="flex flex-col items-center">
          <p className="font-medium text-ink">{current.name}</p>
          <p className="text-sm text-ink/50 mt-1">{current.location}</p>
          <p className="text-xs text-bronze uppercase tracking-wider mt-2">{current.roomType}</p>
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="flex justify-center space-x-2 mt-8">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex ? 'bg-bronze w-6' : 'bg-ink/20'
            }`}
            aria-label={`Testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default Testimonial;