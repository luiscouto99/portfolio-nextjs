import React from 'react';

import portrait from '../../public/images/portrait.jpg';

import {
  CareerContainer,
  Careers,
  Hero,
  HeroInfo,
  HeroPortrait,
  ImageContainer,
  Separator,
  Title,
  TitleSpan,
} from './HeroSection.styled';

const HeroSection = () => (
  <Hero>
    <HeroInfo>
      <Title>
        Creative <TitleSpan>Developer</TitleSpan>
      </Title>

      <CareerContainer>
        <Separator />
        <Careers>Designer & Frontend Dev</Careers>
      </CareerContainer>
    </HeroInfo>

    <HeroPortrait>
      <ImageContainer src={portrait} alt="portrait of myself" layout="responsive" priority />
    </HeroPortrait>
  </Hero>
);

export default HeroSection;
