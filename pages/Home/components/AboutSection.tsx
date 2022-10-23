import React from "react";
import Image from "next/image";
import Link from "next/link";

import styled from "styled-components";

import illustration from "../../../public/images/illustration.jpg";
import illustrationM from "../../../public/images/illustrationM.jpg";
import { useWindowWidth } from "../../../hooks/useWindowWidth";

const AboutContainer = styled.section`
  margin: 160px 276px;
  z-index: 0;

  @media (max-width: 1410px) {
    margin: 160px 212px;
  }

  @media (max-width: 1080px) {
    margin: 80px 64px 160px;
  }

  @media (max-width: 768px) {
    margin: 40px 20px;
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
  color: rgba(102, 217, 155, 0.4);
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

const DescriptionSpan = styled.span`
  font-weight: 500;
`;

const GetToKnowMe = styled.div`
  position: relative;
  margin: 160px 60px;
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
  margin: 100px 0;
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

  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

type ImageWrapperProps = {
  pageYOffset: number;
  handleScroll: boolean;
};
const ImageWrapper = styled.div<ImageWrapperProps>`
  position: absolute;
  top: ${[
    (props) =>
      props.pageYOffset > 3000
        ? `calc(100% - (${pageYOffset + "px"}*0.1))`
        : "90%",
  ]};
  transition: ${[
    (props) =>
      props.pageYOffset >= 3000 && props.pageYOffset <= 3500
        ? "1s ease-in-out"
        : "0.3s ease-in-out",
  ]};
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
`;

const EmailContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 240px 0;

  @media (max-width: 680px) {
    margin: 80px 0;
  }


  a {
    font-size: 80px;
    font-weight: 400;
    padding-bottom: 4px;
    border-bottom: 4px solid var(--primary-color);
    transition: 1s ease-in-out;

    @media (max-width: 1280px) {
      font-size: 64px;
    }

    @media (max-width: 1280px) {
      font-size: 48px;
    }

    @media (max-width: 680px) {
      font-size: 34px;
    }

    @media (max-width: 500px) {
      font-size: 26px;
    }
  }
`;

const AboutSection = ({ pageYOffset }: { pageYOffset: number }) => {
  const handleScroll = (minY: number) => (pageYOffset >= minY ? true : false);
  const screenWidth = useWindowWidth();

  return (
    <AboutContainer>
      <Greeting handleScroll={handleScroll(2200)}>Hey there : &#41;</Greeting>

      <Description>
        <DescriptionLine handleScroll={handleScroll(2300)}>
          I&apos;m a portuguese{" "}
          <DescriptionSpan>frontend developer</DescriptionSpan>
        </DescriptionLine>

        <DescriptionLine handleScroll={handleScroll(2500)}>
          who started as a <DescriptionSpan>graphic designer,</DescriptionSpan>{" "}
        </DescriptionLine>

        <DescriptionLine handleScroll={handleScroll(2700)}>
          and developed a passion for coding.
        </DescriptionLine>
      </Description>

      <GetToKnowMe>
        <Title>
          Get to <br /> know me
        </Title>
        <ImageWrapper
          pageYOffset={pageYOffset}
          handleScroll={handleScroll(3000)}
        >
          {screenWidth > 920 ? (
            <Image src={illustration} alt="illustration of myself" />
          ) : (
            <Image src={illustrationM} alt="illustration of myself" />
          )}
        </ImageWrapper>
        <Title>
          — and reach <br /> out to me!
        </Title>
      </GetToKnowMe>

      <EmailContainer>
        <Link href="mailto: luismfcouto@gmail.com">luismfcouto@gmail.com</Link>
      </EmailContainer>
    </AboutContainer>
  );
};

export default AboutSection;
