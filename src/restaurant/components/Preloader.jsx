import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

function Preloader() {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const flameRef = useRef(null);
  const counterRef = useRef(null);
  const progressRef = useRef(null);

  useEffect(() => {
    const timeline = gsap.timeline();
    const counterObj = { value: 0 };

    timeline
      .fromTo(containerRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.3 }
      )
      .fromTo(flameRef.current,
        { opacity: 0, scale: 0, rotation: -45 },
        { opacity: 1, scale: 1, rotation: 0, duration: 0.8, ease: 'back.out(2)' },
        '-=0.1'
      )
      .fromTo(textRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' },
        '-=0.4'
      )
      .fromTo(counterRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.3 },
        '-=0.2'
      );

    const counterTween = gsap.to(counterObj, {
      value: 100,
      duration: 1.5,
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

    timeline
      .to([flameRef.current, textRef.current, counterRef.current, progressRef.current], {
        opacity: 0,
        y: -20,
        duration: 0.3,
        ease: 'power2.in',
      }, '+=1.3')
      .to(containerRef.current, {
        yPercent: -100,
        duration: 0.6,
        ease: 'power3.inOut',
      }, '-=0.1');

    timeline.add(counterTween, '-=1.5');

    return () => {
      timeline.kill();
      counterTween.kill();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[100] bg-ember-black flex flex-col items-center justify-center"
    >
      {/* Flame Diamond */}
      <div ref={flameRef} className="relative mb-8">
        <div className="w-20 h-20 rotate-45 border-2 border-ember-orange relative">
          <div className="absolute inset-2 rotate-45 border border-ember-orange/50" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-3 h-3 bg-ember-orange rotate-45" />
          </div>
        </div>
      </div>

      {/* Wordmark */}
      <div ref={textRef} className="text-center mb-8 opacity-0">
        <h1 className="text-4xl md:text-5xl font-serif text-cream tracking-widest mb-2">
          EMBER
        </h1>
        <p className="text-xs text-ash tracking-[0.4em] uppercase">
          Contemporary African Kitchen
        </p>
      </div>

      {/* Progress */}
      <div className="relative w-48">
        <div ref={counterRef} className="text-center text-ash text-sm mb-3 opacity-0">
          0%
        </div>
        <div className="w-full h-px bg-white/20 overflow-hidden">
          <div
            ref={progressRef}
            className="h-full bg-ember-orange transition-all duration-300"
            style={{ width: '0%' }}
          />
        </div>
      </div>
    </div>
  );
}

export default Preloader;