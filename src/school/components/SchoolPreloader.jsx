import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

function SchoolPreloader() {
  const containerRef = useRef(null);
  const crestRef = useRef(null);
  const textRef = useRef(null);
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
      .fromTo(crestRef.current,
        { scale: 0, rotation: -180 },
        { scale: 1, rotation: 0, duration: 0.8, ease: 'back.out(2)' },
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
      .to([crestRef.current, textRef.current, counterRef.current, progressRef.current], {
        opacity: 0,
        y: -20,
        duration: 0.3,
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
      className="fixed inset-0 z-[100] bg-oak-green flex flex-col items-center justify-center"
    >
      {/* Crest */}
      <div ref={crestRef} className="relative mb-8">
        <div className="w-20 h-20 rounded-full border-2 border-white/50 flex items-center justify-center">
          <div className="w-14 h-14 rounded-full border border-white/30 flex items-center justify-center">
            <span className="text-2xl font-serif font-bold text-white">O</span>
          </div>
        </div>
      </div>

      {/* Wordmark */}
      <div ref={textRef} className="text-center mb-8 opacity-0">
        <h1 className="text-3xl md:text-4xl font-serif font-bold text-white tracking-wide mb-2">
          CRESTFIELD
        </h1>
        <p className="text-xs text-white/70 tracking-[0.3em] uppercase">
          International School
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
            className="h-full bg-white transition-all duration-300"
            style={{ width: '0%' }}
          />
        </div>
      </div>
    </div>
  );
}

export default SchoolPreloader;