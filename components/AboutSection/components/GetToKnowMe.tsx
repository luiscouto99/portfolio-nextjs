import React from 'react'
import Image from "next/image";

import styled from 'styled-components'
import { useWindowWidth } from '../../../hooks/useWindowWidth';
import illustrationM from "../../../public/images/illustrationM.jpg";

const KnowMeContainer = styled.div`
position: relative;
  margin: 360px 60px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  & h2:first-child {
    justify-content: flex-start;
    z-index: 3;
  }

  & h2:last-child {
    justify-content: flex-end;
    z-index: 3;

    @media (max-width: 500px) {
      padding-bottom: 75px;
    }
  }

  @media (max-width: 1480px) {
    margin: 160px 0;
  }

  @media (max-width: 768px) {
    margin: 40px;
  }
`;

const Title = styled.h2`
  display: inline-flex;
  font-size: 80px;
  font-weight: 600;
  margin: 0;
  padding: 100px 0;
  transition: 1s ease-in-out;

  @media (max-width: 1580px) {
    font-size: 72px;
  }

  @media (max-width: 1380px) {
    font-size: 64px;
  }

  @media (max-width: 1280px) {
    font-size: 56px;
  }

  @media (max-width: 800px) {
    padding: 120px 0;
  }

  @media (max-width: 768px) {
    font-size: 32px;
    padding: 150px 0;
  }

  @media (max-width: 768px) {
    font-size: 32px;
    padding: 75px 0 150px;
  }
`;

type ImageWrapperProps = {
  pageYOffset: number;
  handleScroll: boolean;
  screenWidth: number;
};
const ImageWrapper = styled.div<ImageWrapperProps>`
  position: absolute;
  top: ${(props) => {
    if (props.screenWidth <= 500) {
      return '270px';
    }
    return props.pageYOffset >= 2730 ? '375px' : '90%'
  }};
  transition: 1s ease-in-out;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
`;

const GetToKnowMe = ({ pageYOffset }: { pageYOffset: number }) => {
  const screenWidth = useWindowWidth();
  const handleScroll = (minY: number) => (pageYOffset >= minY ? true : false);

  return (
    <KnowMeContainer>
      <Title>
        Get to <br /> know me
      </Title>
      <ImageWrapper
        screenWidth={screenWidth}
        pageYOffset={pageYOffset}
        handleScroll={handleScroll(screenWidth > 768 ? 3000 : 2600)}
      >
        <Image src={illustrationM} alt="illustration of myself" />
      </ImageWrapper>
      <Title>
        — and reach <br /> out to me!
      </Title>
    </KnowMeContainer>
  )
}

export default GetToKnowMe