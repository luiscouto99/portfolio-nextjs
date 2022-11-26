import styled from 'styled-components';

type LoaderContainerProps = {
  percentage: number;
};
export const LoaderContainer = styled.div<LoaderContainerProps>`
  position: absolute;
  top: ${(props) => (props.percentage === 100 ? '-1000px' : '0px')};
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background-color: var(--primary-color);
  transition: top 1s ease-in-out;
  z-index: 10;
`;

export const LoaderTitle = styled.h1`
  font-size: 92px;
  color: var(--background-color);
`;
