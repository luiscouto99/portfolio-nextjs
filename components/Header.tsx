import React, { useEffect, useState } from "react";

import styled, { css } from "styled-components";

type HeaderContainerProps = {
  altered?: boolean;
}
const HeaderContainer = styled.header<HeaderContainerProps>`
  padding: 12px 64px;
  height: 100px;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    padding: 12px 20px;
  }

  ${props => props.altered && css`
    position: relative;
    background: linear-gradient(180deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.8) 100%);
    backdrop-filter: blur(3px);
    z-index: 1;
  `}
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
  cursor: pointer;
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

const Header = ({ setEasterEgg, altered }: { setEasterEgg: React.Dispatch<React.SetStateAction<boolean>>, altered?: boolean }) => {
  const [time, setTime] = useState("");
  const [counter, setCounter] = useState(0);

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

  const handleClick = () => {
    if (counter === 4) {
      setEasterEgg(true);
    } 
    setCounter(counter + 1);
  }

  return (
    <HeaderContainer altered={altered}>
      <NavBar>
        <Logo onClick={handleClick}>LUIS COUTO</Logo>

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
