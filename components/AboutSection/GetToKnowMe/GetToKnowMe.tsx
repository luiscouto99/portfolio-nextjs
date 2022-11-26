import React from 'react';
import Image from 'next/image';

import { useWindowWidth } from '../../../hooks/useWindowWidth';
import illustrationM from '../../../public/images/illustrationM.jpg';
import { KnowMeContainer, Title, ImageWrapper } from './GetToKnowMe.styled';

const GetToKnowMe = ({ pageYOffset }: { pageYOffset: number }) => {
  const screenWidth = useWindowWidth();
  const handleScroll = (minY: number) => (pageYOffset >= minY ? true : false);

  return (
    <KnowMeContainer>
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
    </KnowMeContainer>
  );
};

export default GetToKnowMe;
