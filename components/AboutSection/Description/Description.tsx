import React from 'react';

import { useWindowWidth } from '../../../hooks/useWindowWidth';
import {
  DescriptionContainer,
  DescriptionLine,
  SpanWrapper,
  DescriptionSpan,
} from './Description.styled';

const Description = () => {
  const handleScroll = (minY: number) => (pageYOffset >= minY ? true : false);
  const screenWidth = useWindowWidth();

  return (
    <DescriptionContainer>
      <DescriptionLine handleScroll={handleScroll(2300)}>
        <SpanWrapper>
          <DescriptionSpan>Frontend developer</DescriptionSpan>
        </SpanWrapper>{' '}
        based in Porto{' '}
      </DescriptionLine>

      <DescriptionLine handleScroll={handleScroll(2500)}>
        and a former{' '}
        <SpanWrapper>
          <DescriptionSpan>graphic designer</DescriptionSpan>
        </SpanWrapper>{' '}
        (UI),{' '}
      </DescriptionLine>

      <DescriptionLine handleScroll={handleScroll(screenWidth < 1000 ? 2600 : 2700)}>
        who now codes for the web.
      </DescriptionLine>
    </DescriptionContainer>
  );
};

export default Description;
