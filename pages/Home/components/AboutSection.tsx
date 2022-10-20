import React from "react";
import Image from "next/image";
import Link from "next/link";

import styled from "styled-components";

import illustration from "../../../public/images/illustration.jpg";

const AboutContainer = styled.section`
  margin: 160px 276px;
  z-index: 0;
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
`;

const Title = styled.h2`
  display: inline-flex;
  font-size: 80px;
  font-weight: 600;
  margin: 100px 0;
`;

type ImageWrapperProps = {
  pageYOffset: number;
  handleScroll: boolean;
};
const ImageWrapper = styled.div<ImageWrapperProps>`
  position: absolute;
  top: ${[
    (props) =>
      props.pageYOffset > 3100
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

  a {
    font-size: 80px;
    font-weight: 400;
    padding-bottom: 4px;
    border-bottom: 4px solid var(--primary-color);
  }
`;

const AboutSection = ({ pageYOffset }: { pageYOffset: number }) => {
  const handleScroll = (minY: number) => (pageYOffset >= minY ? true : false);

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
          <Image src={illustration} alt="illustration of myself" />
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
