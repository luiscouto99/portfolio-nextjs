import React from 'react'

import styled from 'styled-components'
import { useWindowWidth } from '../../../hooks/useWindowWidth';

const DescriptionContainer = styled.div``;

type DescriptionLineProps = {
    handleScroll: boolean;
};
const DescriptionLine = styled.h2<DescriptionLineProps>`
    font-size: 72px;
    font-weight: 400;
    text-align: center;
    opacity: ${(props) => (props.handleScroll ? 1 : 0)};
    transition: 1s ease-in-out;
  
    @media (max-width: 1906px) {
      font-size: 64px;
    }
  
    @media (max-width: 1757px) {
      font-size: 56px;
    }
  
    @media (max-width: 1609px) {
      font-size: 48px;
    }
  
    @media (max-width: 1460px) {
      font-size: 40px;
    }
  
    @media (max-width: 1184px) {
      font-size: 32px;
    }
  
     @media (max-width: 739px) {
      font-size: 24px;
    }
  
    @media (max-width: 591px) {
      font-size: 20px;
    }
  
    @media (max-width: 517px) {
      font-size: 18px;
    }
  `;

const SpanWrapper = styled.div`
    display: inline;
      position:relative;
  `;

const DescriptionSpan = styled.span`
    font-weight: 500;
    color: white;
  
    &::before {
      content: '';
      position: absolute;
      width: 0;
      height: 100%;
      background: var(--primary-color);
      z-index: -1;
      left: 0;
      transition: width 0.35s cubic-bezier(1, 0.08, 0.07, 1.01);
    }
  
    &:hover::before {
      content: '';
      width: 100%;
    }
  `;

const Description = () => {
    const handleScroll = (minY: number) => (pageYOffset >= minY ? true : false);
    const screenWidth = useWindowWidth();

    return (
        <DescriptionContainer>
            <DescriptionLine handleScroll={handleScroll(2300)}>
                <SpanWrapper>
                    <DescriptionSpan>Frontend developer</DescriptionSpan>
                </SpanWrapper>
                {" "}based in Porto{" "}
            </DescriptionLine>

            <DescriptionLine handleScroll={handleScroll(2500)}>
                and a former{" "}
                <SpanWrapper>
                    <DescriptionSpan>graphic designer</DescriptionSpan>
                </SpanWrapper>
                {" "}(UI),{" "}
            </DescriptionLine>

            <DescriptionLine handleScroll={handleScroll(screenWidth < 1000 ? 2600 : 2700)}>
                who now codes for the web.
            </DescriptionLine>
        </DescriptionContainer>
    )
}

export default Description