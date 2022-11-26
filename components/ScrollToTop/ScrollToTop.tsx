import React from 'react';
import Image from 'next/image';

import scroll from '../../public/icons/scroll.png';
import { ScrollContainer } from './ScrollToTop.styled';

const ScrollToTop = ({ pageYOffset }: { pageYOffset: number }) => {
  return (
    <ScrollContainer
      pageYOffset={pageYOffset}
      onClick={() => window.scrollTo(0, 0)}
      data-testid="scroll-btn"
    >
      <Image src={scroll} alt="scroll to top" data-testid="scroll-img" />
    </ScrollContainer>
  );
};

export default ScrollToTop;
