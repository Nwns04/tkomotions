import { useState, useEffect } from 'react';

export function useScrollPosition() {
  const [scrollPosition, setScrollPosition] = useState({ y: 0, isTop: true });

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition({
        y: window.scrollY,
        isTop: window.scrollY === 0,
      });
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return scrollPosition;
}

export default useScrollPosition;