import React from 'react';

import { AboutContainer, Greeting } from './AboutSection.styled';

import ContactForm from './ContactForm/ContactForm';
import Description from './Description/Description';
import GetToKnowMe from './GetToKnowMe/GetToKnowMe';

const AboutSection = ({ pageYOffset }: { pageYOffset: number }) => {
  const handleScroll = (minY: number) => (pageYOffset >= minY ? true : false);

  return (
    <AboutContainer id="scrollAbout">
      <Greeting handleScroll={handleScroll(2200)}>Hey there : &#41;</Greeting>
      <Description />
      <GetToKnowMe pageYOffset={pageYOffset} />
      <ContactForm />
    </AboutContainer>
  );
};

export default AboutSection;
