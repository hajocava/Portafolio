import { useState, useEffect } from 'react';

export default function useWindowDimensions() {
  const [prevScroll, setPrevScroll] = useState(window.pageYOffset);

  useEffect(() => {
    window.addEventListener('scroll', () => setPrevScroll(window.pageYOffset))
    return () => window.removeEventListener('scroll', () => setPrevScroll(window.pageYOffset))
  }, []);

  return prevScroll;
}
