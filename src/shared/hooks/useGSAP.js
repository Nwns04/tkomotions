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