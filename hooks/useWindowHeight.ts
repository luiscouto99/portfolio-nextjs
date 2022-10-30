import React, { useEffect, useState } from 'react'

export const useWindowHeight = () => {
  const [screenHeight, setScreenHeight] = useState(1080);

  useEffect(() => {
    setScreenHeight(window.innerHeight);
    window.addEventListener("resize", () => setScreenHeight(window.innerHeight));

    return () => {
      window.removeEventListener("resize", () =>
        setScreenHeight(window.innerHeight)
      );
    };
  }, [screenHeight]);

  return screenHeight;
}