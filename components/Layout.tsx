import React from 'react'

import styled from 'styled-components';
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
  /* margin: 0 64px; */
`;

const Layout = ({ children, isLoading }: { children: any, isLoading: boolean }) => {
  return (
    <Container isLoading={isLoading}>
      {!isLoading && (
        <>
          <Header />
          <Main>
            {children}
          </Main>
          <Footer />
        </>
      )}
    </Container>
  )
}

export default Layout