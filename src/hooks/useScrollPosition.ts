
 
import { useEffect, useState } from 'react';

const useScrollPosition = () => {
  if (typeof window === 'undefined') return 500;

  const [scrollPosition, setScrollPosition] = useState(0);

  const getDocHeight = () =>
    Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.offsetHeight,
      document.body.clientHeight,
      document.documentElement.clientHeight
    );

  const calculateScrollDistance = () => {
    const scrollTop = window.scrollY; // how much the user has scrolled by
    const winHeight = window.innerHeight;
    const docHeight = getDocHeight();

    const totalDocScrollLength = docHeight - winHeight;
    const position = Math.floor((scrollTop / totalDocScrollLength) * 100);
    setScrollPosition(position);
  };

  useEffect(() => {
    const listenToScrollEvent = () => {
      document.addEventListener('scroll', () => {
        requestAnimationFrame(() => {
          calculateScrollDistance();
        });
      });
    };

    window.addEventListener('resize', listenToScrollEvent);
    listenToScrollEvent();
    return () => window.removeEventListener('resize', listenToScrollEvent);
  });

  return scrollPosition;
};

export default useScrollPosition;
