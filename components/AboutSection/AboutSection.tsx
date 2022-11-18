import React from "react";

import styled from "styled-components";

import ContactForm from "./components/ContactForm/ContactForm";
import Description from "./components/Description";
import GetToKnowMe from "./components/GetToKnowMe";

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

const AboutSection = ({ pageYOffset }: { pageYOffset: number }) => {
  const handleScroll = (minY: number) => (pageYOffset >= minY ? true : false);

  return (
    <AboutContainer id="scrollAbout">
      <Greeting handleScroll={handleScroll(2200)} >Hey there : &#41;</Greeting>
      <Description />
      <GetToKnowMe pageYOffset={pageYOffset}/>
      <ContactForm />
    </AboutContainer>
  );
};

export default AboutSection;
