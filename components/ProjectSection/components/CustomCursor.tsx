import React, { useEffect, useRef } from "react";

import styled from "styled-components";

type SVGProps = {
  visible: boolean;
};
const SVG = styled.svg<SVGProps>`
  width: 100px;
  position: fixed;
  animation: rotation 8s infinite linear;
  pointer-events: none;
  transition-timing-function: ease-out;
  z-index: 3;
  margin: -26px 0 0 -26px;
  opacity: ${(props) => (props.visible ? 1 : 0)};
  transition: opacity 0.3s ease-in-out;
  border-radius: 100%;
  backdrop-filter: blur(1px);

  @keyframes rotation {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(359deg);
    }
  }
`;

const SVGText = styled.text`
  font-size: 48px;
  font-weight: bold;
  fill: white;
`;

const CustomCursor = ({ isVisible }: { isVisible: boolean }) => {
  const cursor = useRef<SVGSVGElement>(null as any);

  useEffect(() => {
    const trackCursor = (event: any) => {
      const x = event.pageX;
      const y = event.pageY;
      const scrollTop = window.scrollY !== undefined ? window.scrollY : document.body.scrollTop;
      const scrollLeft = window.scrollX !== undefined ? window.scrollX : document.body.scrollLeft;
      if (cursor.current !== null) {
        cursor.current.style.left = x - scrollLeft + "px";
        cursor.current.style.top = y - scrollTop + "px";
      }
    };

    document.addEventListener("mousemove", trackCursor);
    return () => document.removeEventListener("mousemove", trackCursor);
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