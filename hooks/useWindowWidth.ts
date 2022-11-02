import React, { useEffect, useState } from 'react'

export const useWindowWidth = () => {
  const [screenWidth, setScreenWidth] = useState(1920);

  useEffect(() => {
    setScreenWidth(window.innerWidth);
    const trackWindowWidth = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", trackWindowWidth);
    return () => window.removeEventListener("resize", trackWindowWidth);
  }, [screenWidth]);

  return screenWidth;
}