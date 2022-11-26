import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  z-index: 2;
`;

export const ProjectWrapper = styled.div``;

export const ProjectSeparator = styled.div`
  width: 100%;
  height: 4px;
  opacity: 0.5;
  background: var(--secondary-color);
  margin: 110px 0;

  @media (max-width: 1410px) {
    margin: 80px 0;
  }

  @media (max-width: 1410px) {
    margin: 40px 0;
  }
`;
