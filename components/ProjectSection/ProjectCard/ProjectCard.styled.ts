import styled from 'styled-components';

import githubSVG from '../../../public/images/githubSVG.svg';

import Image from 'next/image';

export const ProjectAnchor = styled.div``;

export const CardAnchor = styled.a`
  display: flex;
  position: relative;
  width: 100%;
  cursor: url(${githubSVG.src}), auto;

  &:hover {
    & div:nth-child(1) {
      & div:nth-child(2) {
        transition: 0.6s ease-in-out;
        opacity: 1;
      }
    }
  }

  @media (max-width: 1410px) {
    flex-direction: column-reverse;
  }
`;

export const CardInfo = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 1410px) {
    text-align: center;
  }
`;

export const Title = styled.h2`
  font-size: 96px;
  z-index: 1;
  margin: 0;
  margin-top: 30px;
  width: 70%;
  text-transform: uppercase;
  transition: 0.6s ease-in-out;

  @media (max-width: 1680px) {
    font-size: 80px;
  }

  @media (max-width: 1580px) {
    font-size: 64px;
  }

  @media (max-width: 1410px) {
    width: 100%;
    font-size: 56px;
  }

  @media (max-width: 1380px) {
    font-size: 48px;
  }

  @media (max-width: 1250px) {
    font-size: 36px;
  }

  @media (max-width: 1080px) {
    text-align: center;
  }

  @media (max-width: 862px) {
    font-size: 24px;
  }
`;

export const DescriptionWrapper = styled.div`
  opacity: 0;
  transition: 0.3s ease-in-out;
  margin-top: 32px;

  @media (max-width: 1080px) {
    opacity: 1;
  }
`;

export const Separator = styled.div`
  width: 204px;
  height: 2px;
  background-color: rgba(2, 109, 83, 0.4);

  @media (max-width: 1410px) {
    margin: 0 auto;
  }
`;

export const Description = styled.p`
  font-size: 20px;
  width: 35%;
  line-height: 1.4;
  color: white;
  transition: 0.6s ease-in-out;

  @media (max-width: 1733px) {
    font-size: 18px;
  }

  @media (max-width: 1580px) {
    font-size: 16px;
    width: 40%;
  }

  @media (max-width: 1410px) {
    font-size: 16px;
    width: 100%;
  }

  @media (max-width: 1080px) {
    text-align: center;
  }

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

type ImageWrapperProps = {
  handleScroll?: boolean;
};
export const ImageWrapper = styled.div<ImageWrapperProps>`
  position: absolute;
  right: 0;
  z-index: 0;
  width: 816px;
  height: 400px;
  opacity: ${(props) => (props.handleScroll || props.handleScroll === undefined ? 1 : 0)};
  transition: 0.6s ease-in-out;

  @media (max-width: 1680px) {
    width: 666px;
  }

  @media (max-width: 1580px) {
    width: 616px;
  }

  @media (max-width: 1520px) {
    width: 516px;
    top: 9%;
  }

  @media (max-width: 1410px) {
    position: relative;
    width: 100%;
    height: 400px;
    transition: 0.6s ease-in-out;
  }
`;

export const ImageContainer = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;
