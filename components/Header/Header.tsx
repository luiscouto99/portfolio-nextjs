import React, { useEffect, useState } from 'react';
import { getLondonTime } from '../../services/getLondonTime';
import {
  HeaderContainer,
  NavBar,
  Logo,
  NavbarList,
  NavbarItem,
  Time,
  ItemWrapper,
  ItemContent,
} from './Header.styled';

const Header = ({
  setEasterEgg,
  altered,
}: {
  setEasterEgg: React.Dispatch<React.SetStateAction<boolean>>;
  altered?: boolean;
}) => {
  const [time, setTime] = useState('');
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const getTime = async () => {
      const timeInLondon = await getLondonTime();
      setTime(timeInLondon);
    };

    const timeInterval = setInterval(() => {
      getTime();
    }, 90000);

    getTime();

    return () => clearInterval(timeInterval);
  }, []);

  const handleClick = () => {
    if (counter === 4) {
      setEasterEgg(true);
    }
    setCounter(counter + 1);
  };

  return (
    <HeaderContainer altered={altered}>
      <NavBar>
        <Logo onClick={handleClick}>LUIS COUTO</Logo>

        <NavbarList>
          <NavbarItem>
            <Time>London {time}</Time>
          </NavbarItem>

          <NavbarItem>
            <ItemWrapper onClick={() => document?.getElementById('scrollProj')?.scrollIntoView()}>
              <ItemContent> Projects</ItemContent>
              <ItemContent faded>Projects</ItemContent>
            </ItemWrapper>

            <ItemWrapper onClick={() => document?.getElementById('scrollAbout')?.scrollIntoView()}>
              <ItemContent>About</ItemContent>
              <ItemContent faded>About</ItemContent>
            </ItemWrapper>
          </NavbarItem>
        </NavbarList>
      </NavBar>
    </HeaderContainer>
  );
};

export default Header;
