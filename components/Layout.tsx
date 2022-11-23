import dynamic from 'next/dynamic';
import React, { useState } from 'react'

import styled from 'styled-components';
import { useWindowWidth } from '../hooks/useWindowWidth';
import BackgroundGrid from './BackgroundGrid';
import EasterEggLog from './EasterEggLog';
import Footer from './Footer';
import Header from './Header';

type ContainerProps = {
  isLoading: boolean;
}
const Container = styled.div<ContainerProps>`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: var(--background-color);
  color: var(--primary-color);
  opacity: ${(props) => props.isLoading ? 0 : 1};
  transition: opacity 0.6s ease-in-out;
`;

const Main = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const Layout = ({ children, isLoading }: { children: React.ReactNode, isLoading: boolean }) => {
  const [easterEgg, setEasterEgg] = useState(false);
  const screenWidth = useWindowWidth();

  const DynamicEasterEgg = dynamic(() => import("./EasterEgg"), { ssr: false });

  return (
    <>
      {screenWidth > 768 && <BackgroundGrid />}
      <Container isLoading={isLoading}>
        {!isLoading && (
          <>
            {easterEgg ? <DynamicEasterEgg /> : (
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
  )
}

export default Layout