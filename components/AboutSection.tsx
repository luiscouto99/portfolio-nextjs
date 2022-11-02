import React from "react";
import Image from "next/image";

import styled from "styled-components";

import illustrationM from "../public/images/illustrationM.jpg";
import { useWindowWidth } from "../hooks/useWindowWidth";
import ContactForm from "./ContactForm";

const AboutContainer = styled.section`
  margin: 160px 276px 32px;
  z-index: 1;

  @media (max-width: 1410px) {
    margin: 160px 212px;
  }

  @media (max-width: 1080px) {
    margin: 80px 64px 160px;
  }

  @media (max-width: 768px) {
    margin: 40px 20px 20px;
  }
`;

type GreetingProps = {
  handleScroll: boolean;
};
const Greeting = styled.p<GreetingProps>`
  font-size: 24px;
  opacity: ${(props) => (props.handleScroll ? 1 : 0)};
  transition: 1s ease-in-out;
  margin-bottom: 80px;
  color: #37654c;
  text-align: center;

  @media (max-width: 1609px) {
    font-size: 20px;
  }

  @media (max-width: 868px) {
    font-size: 18px;
  }

  @media (max-width: 517px) {
    font-size: 16px;
  }
`;

const Description = styled.div``;

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

const GetToKnowMe = styled.div`
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

const AboutSection = ({ pageYOffset }: { pageYOffset: number }) => {
  const handleScroll = (minY: number) => (pageYOffset >= minY ? true : false);
  const screenWidth = useWindowWidth();

  console.log(pageYOffset);

  return (
    <AboutContainer id="scrollAbout">
      <Greeting handleScroll={handleScroll(2200)} >Hey there : &#41;</Greeting>

      <Description>
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
      </Description>

      <GetToKnowMe>
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
      </GetToKnowMe>

      <ContactForm />
    </AboutContainer>
  );
};

export default AboutSection;
