import React, { useEffect, useState } from "react";
import Link from "next/link";

import styled from "styled-components";

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

  @media (max-width: 1380px) {
    width: auto;
  }
`;

const NavbarItem = styled.li`
  &:nth-of-type(2) {
    display: flex;
    gap: 156px;

    @media (max-width: 768px) {
      gap: 60px;
    }

    @media (max-width: 600px) {
      gap: 20px;
    }
  }

  @media (max-width: 1380px) {
    &:nth-of-type(1) {
      display: none;
    }

    &:nth-of-type(2) {
      justify-content: flex-end;
    }
  }
`;

const ItemWrapper = styled.div`
  position: relative;
  text-decoration: none;
  padding: 10px 0;
`;

const ItemContent = styled.p`
  cursor: pointer;

  &:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 1px;
    bottom: 24px;
    left: 0;
    background-color: var(--primary-color);
    transform: scaleX(0);
    transform-origin: bottom right;
    transition: transform 0.3s;
  }

  &:hover {
    &:after {
      transform-origin: bottom left;
      transform: scaleX(1);
    }
  }
`;

const Time = styled.p``;

const Header = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      const hours =
        date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
      const minutes =
        date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();

      setTime(hours + ":" + minutes + ` ${date.getHours() < 12 ? "AM" : "PM"}`);
    }, 1000);
  }, [time]);

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
            <ItemWrapper>
              <ItemContent onClick={() => window.scrollTo(0, window.innerWidth > 1410 ? 835 : 791)}>
                Projects
              </ItemContent>
            </ItemWrapper>
            <ItemWrapper>
              <ItemContent onClick={() => window.scrollTo(0, 3000)}>
                About
              </ItemContent>
            </ItemWrapper>
          </NavbarItem>
        </NavbarList>
      </NavBar>
    </HeaderContainer>
  );
};

export default Header;
