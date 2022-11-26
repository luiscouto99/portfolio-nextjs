import styled, { css } from 'styled-components';

type HeaderContainerProps = {
  altered?: boolean;
};
export const HeaderContainer = styled.header<HeaderContainerProps>`
  padding: 12px 64px;
  height: 100px;
  display: flex;
  align-items: center;
  z-index: 1;

  @media (max-width: 768px) {
    padding: 12px 20px;
  }

  ${(props) =>
    props.altered &&
    css`
      position: relative;
      background: linear-gradient(
        180deg,
        rgba(255, 255, 255, 0.9) 0%,
        rgba(255, 255, 255, 0.8) 100%
      );
      backdrop-filter: blur(3px);
      z-index: 1;
    `}
`;

export const NavBar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 18px;
  width: 100%;
  font-weight: 400;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
  cursor: pointer;
`;

export const NavbarList = styled.ul`
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

export const NavbarItem = styled.li`
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

export const ItemWrapper = styled.div`
  position: relative;
  display: inline-block;
  overflow: hidden;
  height: 22px;
  transition: 0.3s ease-in-out;
  cursor: pointer;

  &:hover > * {
    top: -100%;
  }
`;

type ItemContentProps = {
  faded?: boolean;
};
export const ItemContent = styled.p<ItemContentProps>`
  position: relative;
  display: block;
  height: 100%;
  top: 0;
  margin: 0;
  transition: 0.3s ease-in-out;
  color: ${(props) => (props.faded ? 'rgba(102, 217, 155, 0.6)' : 'var(--primary-color)')};
`;

export const Time = styled.p``;