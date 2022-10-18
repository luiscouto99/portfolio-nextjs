import React from 'react'

import styled from 'styled-components';
import Footer from './Footer';
import Header from './Header';

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: var(--background-color);
  color: var(--primary-color);
`;

const Main = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  /* margin: 0 64px; */
`;

const Layout = ({ children } : { children: any}) => {
    return (
        <Container>
            <Header />
            <Main>
                {children}
            </Main>
            <Footer />
        </Container>
    )
}

export default Layout