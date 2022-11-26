import { useEffect, useState } from 'react';

export const useWindowHeight = () => {
  const [screenHeight, setScreenHeight] = useState(1080);

  useEffect(() => {
    setScreenHeight(window.innerHeight);

    const trackPageHeight = () => setScreenHeight(window.innerHeight);
    
    window.addEventListener('resize', trackPageHeight);
    return () => window.removeEventListener('resize', trackPageHeight);
  }, [screenHeight]);

  return screenHeight;
};
