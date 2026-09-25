import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function useGSAP(callback, dependencies = []) {
  const scopeRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      callback(scopeRef.current);
    }, scopeRef);

    return () => ctx.revert();
  }, dependencies);

  return scopeRef;
}

export const fadeInUp = (element, delay = 0, y = 50) => {
  return gsap.fromTo(element,
    { opacity: 0, y },
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      delay,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: element,
        start: 'top 85%',
      },
    }
  );
};

export const fadeIn = (element, delay = 0) => {
  return gsap.fromTo(element,
    { opacity: 0 },
    {
      opacity: 1,
      duration: 1,
      delay,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: element,
        start: 'top 90%',
      },
    }
  );
};

export const staggerChildren = (parent, children, stagger = 0.1) => {
  return gsap.fromTo(children,
    { opacity: 0, y: 30 },
    {
      opacity: 1,
      y: 0,
      duration: 0.6,
      stagger,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: parent,
        start: 'top 85%',
      },
    }
  );
};

export const parallaxScroll = (element, speed = 0.3) => {
  return gsap.to(element, {
    yPercent: speed * 100,
    ease: 'none',
    scrollTrigger: {
      trigger: element,
      start: 'top bottom',
      end: 'bottom top',
      scrub: true,
    },
  });
};

export const horizontalScroll = (container) => {
  const sections = container.querySelectorAll('.scroll-section');
  const totalWidth = sections.length * window.innerWidth;

  return gsap.to(container, {
    x: -totalWidth + window.innerWidth,
    ease: 'none',
    scrollTrigger: {
      trigger: container,
      pin: true,
      scrub: 1,
      end: () => `+=${totalWidth}`,
    },
  });
};

export default useGSAP;