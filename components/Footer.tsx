import React from "react";
import Image from "next/image";

import styled from "styled-components";

import github from "../public/icons/github.png";
import linkedin from "../public/icons/linkedin.png";
import cv from "../public/icons/cv.png";

const FooterContainer = styled.footer`
  margin: 12px 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 1;

  @media (max-width: 940px) {
    flex-direction: column;
  }

  @media (max-width: 768px) {
    margin: 12px 20px;
  }
`;

const SocialsContainer = styled.div`
  display: flex;
  gap: 64px;

  @media (max-width: 500px) {
    gap: 20px;
  }
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const SocialTitle = styled.p`
  font-size: 18px;
  border-bottom: 1px solid var(--primary-color);
`;

const InfoContainer = styled.div`

`;

const InfoText = styled.p`
  font-size: 18px;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <FooterContainer>
      <SocialsContainer>
        <SocialLink href='https://github.com/luiscouto99' target='_blank'>
          <Image src={github} alt="link to github" layout="fixed" />
          <SocialTitle>Github</SocialTitle>
        </SocialLink>
        <SocialLink href='https://www.linkedin.com/in/luismfcouto/' target='_blank'>
          <Image src={linkedin} alt="link to linkedin" layout="fixed" />
          <SocialTitle>Linkedin</SocialTitle>
        </SocialLink>
        <SocialLink href='/pdf/cvPDF.pdf' target='_blank'>
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
