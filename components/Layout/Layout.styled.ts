import styled from 'styled-components';

type ContainerProps = {
  isLoading: boolean;
};
export const Container = styled.div<ContainerProps>`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: var(--background-color);
  color: var(--primary-color);
  opacity: ${(props) => (props.isLoading ? 0 : 1)};
  transition: opacity 0.6s ease-in-out;
`;

export const Main = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
`;
