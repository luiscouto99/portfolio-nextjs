import React from 'react';
import Image from 'next/image';

import github from '../../public/icons/github.png';
import linkedin from '../../public/icons/linkedin.png';
import cv from '../../public/icons/cv.png';
import {
  FooterContainer,
  SocialsContainer,
  SocialLink,
  SocialTitle,
  InfoContainer,
  InfoText,
} from './Footer.styled';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <FooterContainer>
      <SocialsContainer>
        <SocialLink href="https://github.com/luiscouto99" target="_blank">
          <Image src={github} alt="link to github" layout="fixed" />
          <SocialTitle>Github</SocialTitle>
        </SocialLink>
        <SocialLink href="https://www.linkedin.com/in/luismfcouto/" target="_blank">
          <Image src={linkedin} alt="link to linkedin" layout="fixed" />
          <SocialTitle>Linkedin</SocialTitle>
        </SocialLink>
        <SocialLink href="/pdf/cv.pdf" target="_blank">
          <Image src={cv} alt="link to resume" layout="fixed" />
          <SocialTitle>Resume</SocialTitle>
        </SocialLink>
      </SocialsContainer>

      <InfoContainer>
        <InfoText>© {year} - Portfolio by Luis Couto</InfoText>
      </InfoContainer>
    </FooterContainer>
  );
};

export default Footer;
