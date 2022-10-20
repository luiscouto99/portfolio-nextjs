import React from "react";
import Image from "next/image";

import styled from "styled-components";

import scroll from "../public/images/scroll.png";

type ScrollContainerProps = {
  pageYOffset: number;
};
const ScrollContainer = styled.div<ScrollContainerProps>`
    position: fixed;
    bottom: ${props => props.pageYOffset > 4200 ? "120px" : "20px"};
    right: 16px;
    cursor: pointer;
    opacity: ${props => props.pageYOffset >= 835 ? 1 : 0};
    transition: 0.6s ease-in-out;
`;

const ScrollToTop = ({ pageYOffset }: { pageYOffset: number }) => {
  return (
    <ScrollContainer pageYOffset={pageYOffset}>
      <Image src={scroll} alt="scroll to top" onClick={() => window.scrollTo(0, 0)}/>
    </ScrollContainer>
  );
};

export default ScrollToTop;
