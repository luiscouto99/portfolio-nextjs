import React, { useEffect, useState } from 'react'

export const useWindowWidth = () => {
  const [screenWidth, setScreenWidth] = useState(1920);

  useEffect(() => {
    setScreenWidth(window.innerWidth);
    window.addEventListener("resize", () => setScreenWidth(window.innerWidth));

    return () => {
      window.removeEventListener("resize", () =>
        setScreenWidth(window.innerWidth)
      );
    };
  }, [screenWidth]);

  return screenWidth;
}