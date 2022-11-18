import React from "react";
import Image from "next/image";

import styled from "styled-components";

import scroll from "../../public/icons/scroll.png";

type ScrollContainerProps = {
  pageYOffset: number;
};
const ScrollContainer = styled.button<ScrollContainerProps>`
    position: fixed;
    background: none;
    border: none;
    bottom: ${props => props.pageYOffset > 4200 ? "120px" : "20px"};
    right: 8px;
    cursor: pointer;
    opacity: ${props => props.pageYOffset >= 835 ? 1 : 0};
    transition: 0.6s ease-in-out;
    z-index: 2;
`;

const ScrollToTop = ({ pageYOffset }: { pageYOffset: number }) => {
  return (
    <ScrollContainer pageYOffset={pageYOffset} onClick={() => window.scrollTo(0, 0)} data-testid="scroll-btn">
      <Image src={scroll} alt="scroll to top" data-testid='scroll-img'/>
    </ScrollContainer>
  );
};

export default ScrollToTop;
