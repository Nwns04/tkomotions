import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function SchoolStats({ stats }) {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    const counters = element.querySelectorAll('.stat-number');

    counters.forEach((counter) => {
      const value = parseInt(counter.dataset.value);
      const suffix = counter.dataset.suffix || '';
      const obj = { value: 0 };

      gsap.to(obj, {
        value,
        duration: 2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: counter,
          start: 'top 85%',
        },
        onUpdate: () => {
          counter.textContent = Math.floor(obj.value) + suffix;
        },
      });
    });
  }, []);

  return (
    <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-8">
      {stats.map((stat, index) => (
        <div key={index} className="text-center">
          <p 
            className="stat-number text-4xl md:text-5xl font-serif font-bold text-oak-green mb-2"
            data-value={stat.value}
            data-suffix={stat.suffix || ''}
          >
            0{stat.suffix || ''}
          </p>
          <p className="text-sm text-slate uppercase tracking-wider">{stat.label}</p>
        </div>
      ))}
    </div>
  );
}

export default SchoolStats;