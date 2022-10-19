import React, { useEffect, useState } from 'react'
import Link from 'next/link'

import styled from 'styled-components'

const HeaderContainer = styled.header`
  margin: 12px 64px;
  height: 100px;
  display: flex;
  align-items: center;
`;

const NavBar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 18px;
  width: 100%;
  font-weight: 400;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
`;

const NavbarList = styled.ul`
  list-style-type: none;
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 0;
`;

const NavbarItem = styled.li`
    &:nth-of-type(2) {
        display: flex;
        gap: 156px;
    }
`;

const ItemContent = styled.p`
    cursor: pointer;
`;

const Time = styled.p``;

const Header = () => {
    const [time, setTime] = useState('');

    useEffect(() => {
        setInterval(() => {
            const date = new Date();
            const hours = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
            const minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();

            setTime(hours + ":" + minutes + ` ${date.getHours() < 12 ? 'AM' : 'PM'}`);
        }, 1000);
    }, [time])


    return (
        <HeaderContainer>
            <NavBar>
                <Logo>
                    <Link href="/">LUIS COUTO</Link>
                </Logo>

                <NavbarList>
                    <NavbarItem>
                        <Time>London {time}</Time>
                    </NavbarItem>

                    <NavbarItem>
                        <ItemContent onClick={() => window.scrollTo(0, 835)}>Projects</ItemContent>
                        <ItemContent>About</ItemContent>
                    </NavbarItem>
                </NavbarList>
            </NavBar>
        </HeaderContainer>
    )
}

export default Header