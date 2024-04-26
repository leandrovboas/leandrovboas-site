import { useEffect, useState } from 'react';

const useScrollPosition = () => {
  if (typeof window === 'undefined') return 500;

  const [scrollPostion, setScrollPostion] = useState(0);

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
    const scrollTop = window.pageYOffset; // how much the user has scrolled by
    const winHeight = window.innerHeight;
    const docHeight = getDocHeight();

    const totalDocScrollLength = docHeight - winHeight;
    const postion = Math.floor((scrollTop / totalDocScrollLength) * 100);
    setScrollPostion(postion);
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

  return scrollPostion;
};

export default useScrollPosition;
