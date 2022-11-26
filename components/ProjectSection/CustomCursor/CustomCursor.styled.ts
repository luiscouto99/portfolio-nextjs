import styled from 'styled-components';

type SVGProps = {
  visible: boolean;
};
export const SVG = styled.svg<SVGProps>`
  width: 100px;
  position: fixed;
  animation: rotation 8s infinite linear;
  pointer-events: none;
  transition-timing-function: ease-out;
  z-index: 3;
  margin: -26px 0 0 -26px;
  opacity: ${(props) => (props.visible ? 1 : 0)};
  transition: opacity 0.3s ease-in-out;
  border-radius: 100%;
  backdrop-filter: blur(1px);

  @keyframes rotation {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(359deg);
    }
  }
`;

export const SVGText = styled.text`
  font-size: 48px;
  font-weight: bold;
  fill: white;
`;
