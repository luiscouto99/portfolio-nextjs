import styled from 'styled-components';

type ScrollContainerProps = {
  pageYOffset: number;
};
export const ScrollContainer = styled.button<ScrollContainerProps>`
  position: fixed;
  background: none;
  border: none;
  bottom: ${(props) => (props.pageYOffset > 4200 ? '120px' : '20px')};
  right: 8px;
  cursor: pointer;
  opacity: ${(props) => (props.pageYOffset >= 835 ? 1 : 0)};
  transition: 0.6s ease-in-out;
  z-index: 2;
`;
