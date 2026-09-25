import { useState, useEffect } from 'react';

export function useScrollPosition() {
  const [scrollPosition, setScrollPosition] = useState({
    x: 0,
    y: 0,
    isTop: true,
    isBottom: false,
  });

  useEffect(() => {
    const handleScroll = () => {
      const x = window.scrollX;
      const y = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;

      setScrollPosition({
        x,
        y,
        isTop: y === 0,
        isBottom: y >= maxScroll - 10,
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return scrollPosition;
}

export default useScrollPosition;