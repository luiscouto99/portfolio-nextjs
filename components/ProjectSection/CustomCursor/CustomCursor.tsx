import React, { useEffect, useRef } from 'react';
import { SVG, SVGText } from './CustomCursor.styled';

const CustomCursor = ({ isVisible }: { isVisible: boolean }) => {
  const cursor = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const trackCursor = (event: MouseEvent) => {
      const x = event.pageX;
      const y = event.pageY;
      const scrollTop = window.scrollY !== undefined ? window.scrollY : document.body.scrollTop;
      const scrollLeft = window.scrollX !== undefined ? window.scrollX : document.body.scrollLeft;
      if (cursor.current !== null) {
        cursor.current.style.left = x - scrollLeft + 'px';
        cursor.current.style.top = y - scrollTop + 'px';
      }
    };

    document.addEventListener('mousemove', trackCursor);
    return () => document.removeEventListener('mousemove', trackCursor);
  }, []);

  return (
    <SVG
      xmlns="http://www.w3.org/2000/svg"
      xmlLang="en"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 500 500"
      ref={cursor}
      visible={isVisible}
    >
      <defs>
        <path
          id="textcircle"
          d="M250,400
                    a150,150 0 0,1 0,-300a150,150 0 0,1 0,300Z"
          transform="rotate(12,250,250)"
        />
      </defs>
      <circle cx="50%" cy="50%" r="205" fill="none" />
      <SVGText>
        <textPath xlinkHref="#textcircle" textLength="900">
          VIEW · WITH · GITHUB ·
        </textPath>
      </SVGText>
    </SVG>
  );
};

export default CustomCursor;
