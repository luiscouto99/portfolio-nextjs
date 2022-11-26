import dynamic from 'next/dynamic';
import React, { useState } from 'react';

import { useWindowWidth } from '../../hooks/useWindowWidth';
import BackgroundGrid from '../BackgroundGrid/BackgroundGrid';
import EasterEggLog from '../EasterEgg/EasterEggLog';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import { Container, Main } from './Layout.styled';

const Layout = ({ children, isLoading }: { children: React.ReactNode; isLoading: boolean }) => {
  const [easterEgg, setEasterEgg] = useState(false);
  const screenWidth = useWindowWidth();

  const DynamicEasterEgg = dynamic(() => import('../EasterEgg/EasterEgg'), { ssr: false });

  return (
    <>
      {screenWidth > 768 && <BackgroundGrid />}
      <Container isLoading={isLoading}>
        {!isLoading && (
          <>
            {easterEgg ? (
              <DynamicEasterEgg />
            ) : (
              <>
                <EasterEggLog />
                <Header setEasterEgg={setEasterEgg} />
                <Main>{children}</Main>
                <Footer />
              </>
            )}
          </>
        )}
      </Container>
    </>
  );
};

export default Layout;
