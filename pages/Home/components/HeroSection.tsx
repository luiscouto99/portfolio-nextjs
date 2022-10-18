import React from 'react'
import Image from 'next/image'

import portrait from '../../../public/images/portrait.jpg'

import styled from 'styled-components'

const Hero = styled.section`
  margin: 0 276px;
  display: flex;
`;

const HeroInfo = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

type TitleProps = {
  outline?: boolean;
}
const Title = styled.h1<TitleProps>`
  text-transform: uppercase;
  font-size: 96px;
  font-weight: 700;
  margin: 0;
  padding-bottom: 128px;
`;

const TitleSpan = styled.span`
  color: var(--background-color);
  text-shadow:
      1px 1px 0 var(--primary-color), 
      -1px -1px 0 var(--primary-color), 
      1px -1px 0 var(--primary-color),
      -1px 1px 0 var(--primary-color), 
      1px 1px 0 var(--primary-color);
`;

const CareerContainer = styled.div``;

const Separator = styled.div`
  width: 204px;
  height: 1px;
  background-color: var(--primary-color);
`;

const Careers = styled.p`
  text-transform: uppercase;
  font-size: 16px;
`;

const HeroPortrait = styled.div`
  width: 50%;

  &:nth-child(1)  {
    width: 100%;
  }
`;

const ImageContainer = styled(Image)`
  width: 100%;
`;

const HeroSection = () => {
  return (
    <Hero>
        <HeroInfo>
          <Title>Frontend <TitleSpan>Developer</TitleSpan></Title>

          <CareerContainer>
            <Separator />
            <Careers>Designer & Front End Developer</Careers>
          </CareerContainer>
        </HeroInfo>

        <HeroPortrait>
          <ImageContainer src={portrait} alt="portrait of myself" layout='responsive' />
        </HeroPortrait>
      </Hero>
  )
}

export default HeroSection