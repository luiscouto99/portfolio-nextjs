import React from "react";
import Image from "next/image";

import portrait from "../../../public/images/portrait.jpg";

import styled from "styled-components";

const Hero = styled.section`
  margin: 0 276px;
  display: flex;

  @media (max-width: 1680px) {
    margin: 0 64px;
  }

  @media (max-width: 820px) {
    flex-direction: column-reverse;
  }

  @media (max-width: 768px) {
    margin: 0 20px;
  }
`;

const HeroInfo = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 1080px) {
    width: 100%;
  }
`;

type TitleProps = {
  outline?: boolean;
};
const Title = styled.h1<TitleProps>`
  text-transform: uppercase;
  font-size: 96px;
  font-weight: 700;
  margin: 0;
  padding-bottom: 128px;

  @media (max-width: 1840px) {
    font-size: 80px;
  }

  @media (max-width: 1380px) {
    font-size: 64px;
  }

  @media (max-width: 1180px) {
    font-size: 56px;
  }

  @media (max-width: 1080px) {
     padding-bottom: 64px; 
  }

  @media (max-width: 980px) {
    font-size: 48px;
  }

  @media (max-width: 768px) {
    text-align: center;
  }

  @media (max-width: 754px) {
    font-size: 36px;
  }

  @media (max-width: 602px) {
    font-size: 27px;
  }
`;

const TitleSpan = styled.span`
  color: var(--background-color);
  text-shadow: 1px 1px 0 var(--primary-color), -1px -1px 0 var(--primary-color),
    1px -1px 0 var(--primary-color), -1px 1px 0 var(--primary-color),
    1px 1px 0 var(--primary-color);
`;

const CareerContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 820px) {
    align-items: center;
  }
`;

const Separator = styled.div`
  width: 204px;
  height: 1px;
  background-color: var(--primary-color);
`;

const Careers = styled.p`
  text-transform: uppercase;
  font-size: 16px;

  @media (max-width: 366px) {
    font-size: 14px;
  }
`;

const HeroPortrait = styled.div`
  width: 50%;

  &:nth-child(1) {
    width: 100%;
  }

  @media (max-width: 1080px) {
    width: 100%;
    margin: 0 auto;
    margin-bottom: 20px;
  }
`;

const ImageContainer = styled(Image)`
  width: 100%;
`;

const HeroSection = () => {
  return (
    <Hero>
      <HeroInfo>
        <Title>
          Frontend <TitleSpan>Developer</TitleSpan>
        </Title>

        <CareerContainer>
          <Separator />
          <Careers>Designer & Front End Developer</Careers>
        </CareerContainer>
      </HeroInfo>

      <HeroPortrait>
        <ImageContainer
          src={portrait}
          alt="portrait of myself"
          layout="responsive"
        />
      </HeroPortrait>
    </Hero>
  );
};

export default HeroSection;
