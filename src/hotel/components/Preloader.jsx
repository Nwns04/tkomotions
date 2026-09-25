import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

function Preloader() {
  const containerRef = useRef(null);
  const leftLineRef = useRef(null);
  const rightLineRef = useRef(null);
  const topDiamondRef = useRef(null);
  const bottomDiamondRef = useRef(null);
  const centerDiamondRef = useRef(null);
  const textRef = useRef(null);
  const counterRef = useRef(null);
  const progressRef = useRef(null);

  useEffect(() => {
    const timeline = gsap.timeline();
    const counterObj = { value: 0 };

    // Phase 1: Background (0.3s) - starts at 0s
    timeline
      .fromTo(containerRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.3, ease: 'power2.out' }
      )

      // Phase 2: Lines draw (0.6s) - starts at 0.2s
      .fromTo(leftLineRef.current,
        { scaleX: 0, transformOrigin: 'left center' },
        { scaleX: 1, duration: 0.6, ease: 'power2.inOut' },
        '-=0.1'
      )
      .fromTo(rightLineRef.current,
        { scaleX: 0, transformOrigin: 'right center' },
        { scaleX: 1, duration: 0.6, ease: 'power2.inOut' },
        '-=0.6'
      )

      // Phase 3: Diamonds (0.5s) - starts at 0.5s
      .fromTo(topDiamondRef.current,
        { opacity: 0, y: -30, scale: 0 },
        { opacity: 1, y: 0, scale: 1, duration: 0.5, ease: 'back.out(2)' },
        '-=0.3'
      )
      .fromTo(bottomDiamondRef.current,
        { opacity: 0, y: 30, scale: 0 },
        { opacity: 1, y: 0, scale: 1, duration: 0.5, ease: 'back.out(2)' },
        '-=0.3'
      )

      // Phase 4: Center diamond (0.5s) - starts at 0.7s
      .fromTo(centerDiamondRef.current,
        { opacity: 0, scale: 0, rotation: 45 },
        { opacity: 1, scale: 1, rotation: 0, duration: 0.5, ease: 'power3.out' },
        '-=0.2'
      )

      // Phase 5: Text (0.4s) - starts at 0.9s
      .fromTo(textRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.4, ease: 'power3.out' },
        '-=0.2'
      )

      // Phase 6: Counter appears (0.2s) - starts at 1.1s
      .fromTo(counterRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.2 },
        '-=0.1'
      );

    // Counter animation (1.2s) - starts at 1.2s, ends at 2.4s
    const counterTween = gsap.to(counterObj, {
      value: 100,
      duration: 1.2,
      ease: 'power2.inOut',
      onUpdate: () => {
        if (counterRef.current) {
          counterRef.current.textContent = `${Math.floor(counterObj.value)}%`;
        }
        if (progressRef.current) {
          progressRef.current.style.width = `${counterObj.value}%`;
        }
      },
    });

    // Phase 7: Exit (starts at 2.4s)
    timeline
      .to([leftLineRef.current, rightLineRef.current, topDiamondRef.current, bottomDiamondRef.current, centerDiamondRef.current, textRef.current, counterRef.current, progressRef.current], {
        opacity: 0,
        y: -20,
        duration: 0.3,
        ease: 'power2.in',
      }, '+=1.2')
      .to(containerRef.current, {
        yPercent: -100,
        duration: 0.5,
        ease: 'power3.inOut',
      }, '-=0.1');

    // Add counter to timeline
    timeline.add(counterTween, '-=1.2');

    return () => {
      timeline.kill();
      counterTween.kill();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[100] bg-hotel-charcoal flex flex-col items-center justify-center"
    >
      {/* Connecting Lines */}
      <div className="relative w-[280px] md:w-[320px] h-40">
        <div
          ref={leftLineRef}
          className="absolute left-0 top-1/2 w-20 h-px bg-hotel-bronze"
        />
        <div
          ref={rightLineRef}
          className="absolute right-0 top-1/2 w-20 h-px bg-hotel-bronze"
        />
        <div
          ref={topDiamondRef}
          className="absolute left-1/2 top-0 -translate-x-1/2 w-3 h-3 bg-hotel-bronze rotate-45"
        />
        <div
          ref={bottomDiamondRef}
          className="absolute left-1/2 bottom-0 -translate-x-1/2 w-3 h-3 bg-hotel-bronze rotate-45"
        />
        <div
          ref={centerDiamondRef}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 border-2 border-hotel-bronze rotate-45"
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-2 h-2 bg-hotel-bronze rotate-45" />
          </div>
        </div>
      </div>

      {/* Wordmark */}
      <div ref={textRef} className="text-center mb-8 mt-12 opacity-0">
        <div className="flex items-center justify-center space-x-2 mb-2">
          <span className="text-2xl md:text-3xl font-serif font-light text-white">
            MERIDIAN
          </span>
          <span className="w-1.5 h-1.5 bg-hotel-bronze rotate-45" />
          <span className="text-2xl md:text-3xl font-serif font-light text-white">
            HOUSE
          </span>
        </div>
        <p className="text-xs md:text-sm text-white/50 tracking-[0.3em] uppercase mt-2">
          Ikoyi · Lagos
        </p>
      </div>

      {/* Progress */}
      <div className="relative w-48">
        <div ref={counterRef} className="text-center text-white/70 text-sm mb-3 opacity-0">
          0%
        </div>
        <div className="w-full h-px bg-white/20 overflow-hidden">
          <div
            ref={progressRef}
            className="h-full bg-hotel-bronze transition-all duration-300"
            style={{ width: '0%' }}
          />
        </div>
      </div>
    </div>
  );
}

export default Preloader;