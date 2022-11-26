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

  // useEffect(() => {
  //   setInterval(() => {
  //     const date = new Date();
  //     const hours = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
  //     const minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();

  //     setTime(hours + ':' + minutes + ` ${date.getHours() < 12 ? 'AM' : 'PM'}`);
  //   }, 1000);
  // }, [time]);

  // useEffect(() => {
  //   const getTime = async () => {
  //     const timeLondon = await getLondonTime();
  //     setTime(timeLondon);
  //   };
  //   getTime();
  // }, []);

  useEffect(() => {
    const getTime = async () => {
      const timeInLondon = await getLondonTime();
      setTime(timeInLondon);
      console.log('logged time');
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
