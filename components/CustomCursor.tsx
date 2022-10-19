import React, { useEffect } from "react";

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
  z-index: 2;
  margin: -26px 0 0 -27px;
  opacity: ${(props) => (props.visible ? 1 : 0)};

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
  fill: var(--background-color);
`;

const CustomCursor = ({ isVisible }: { isVisible: boolean }) => {
  useEffect(() => {
    const cursor = document.getElementById("cursor");

    const trackCursor = (event: any) => {
      const x = event.pageX;
      const y = event.pageY;
      const scrollTop =
        window.pageYOffset !== undefined
          ? window.pageYOffset
          : document.body.scrollTop;
      const scrollLeft =
        window.pageXOffset !== undefined
          ? window.pageXOffset
          : document.body.scrollLeft;
      cursor.style.left = x - scrollLeft + "px";
      cursor.style.top = y - scrollTop + "px";
    };

    document.addEventListener("mousemove", trackCursor);
  }, []);

  return (
    <>
      <SVG
        xmlns="http://www.w3.org/2000/svg"
        xmlLang="en"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 500 500"
        id="cursor"
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
        <rect width="100%" height="100%" fill="none" />
        <SVGText>
          <textPath xlinkHref="#textcircle" textLength="900">
            VIEW · WITH · GITHUB ·
          </textPath>
        </SVGText>
      </SVG>
    </>
  );
};

export default CustomCursor;
