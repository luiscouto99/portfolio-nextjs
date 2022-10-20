import React from "react";
import Image from "next/image";

import styled from "styled-components";
import { Project as ProjectType } from "../types/project";

import ecommerce from "../public/images/ecommerce.jpg";
import keyboards from "../public/images/keyboards.jpg";
import pokemon from "../public/images/pokemon.jpg";
import githubSVG from "../public/images/githubSVG.svg"

const ProjectAnchor = styled.div``;

const CardAnchor = styled.a`
  display: flex;
  position: relative;
  width: 100%;
  cursor: url(${githubSVG.src}), auto;
  
  &:hover {
    & div:nth-child(1) {
      & div:nth-child(2) {
        transition: 0.3s ease-in-out;
        opacity: 1;
      }
    }
  }
`;

const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
  font-size: 96px;
  z-index: 1;
  margin: 0;
  margin-top: 30px;
  width: 70%;
  text-transform: uppercase;
`;

const ProjectWrapper = styled.div`
  opacity: 0;
  transition: 0.3s ease-in-out;
  margin-top: 32px;
`;

const Separator = styled.div`
  width: 204px;
  height: 2px;
  background-color: rgba(2, 109, 83, 0.4);
`;

const Description = styled.p`
  font-size: 20px;
  width: 35%;
  line-height: 1.4;
  color: white;
`;

type ImageWrapperProps = {
  handleScroll?: boolean;
};
const ImageWrapper = styled.div<ImageWrapperProps>`
  position: absolute;
  right: 0;
  z-index: 0;
  width: 816px;
  height: 400px;
  opacity: ${(props) => (props.handleScroll ? 1 : 0)};
  transition: 0.3s ease-in-out;
`;

// const ProjectSeparator = styled.div`
//   width: 100%;
//   height: 4px;
//   opacity: 0.5;
//   background: var(--secondary-color);
//   margin: 110px 0;
//   /* background: linear-gradient(to right, var(--background-color), var(--primary-color), var(--background-color)); */
// `;

const ImageContainer = styled(Image)`
  width: 100%;
`;

const ProjectCard = ({
  project,
  pageYOffset,
  handleMouseEnter,
  handleMouseLeave,
}: {
  project: ProjectType;
  pageYOffset: number;
  handleMouseEnter: () => void;
  handleMouseLeave: () => void;
}) => {
  const handleScroll = (minY: number, maxY: number, id: number) =>
    pageYOffset >= minY && pageYOffset < maxY && project.id === id
      ? true
      : false;

  return (
    <ProjectAnchor>
      <CardAnchor href={project.link} target='_blank' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <CardInfo>
          <Title>{project.name}</Title>
          <ProjectWrapper>
            <Separator />
            <Description>{project.description}</Description>
          </ProjectWrapper>
        </CardInfo>

        <ImageWrapper handleScroll={handleScroll(145, 1099, 1)}>
          <ImageContainer src={ecommerce} alt="" layout="fill" />
        </ImageWrapper>

        <ImageWrapper handleScroll={handleScroll(1100, 1699, 2)}>
          <ImageContainer src={pokemon} alt="" layout="fill" />
        </ImageWrapper>

        <ImageWrapper handleScroll={handleScroll(1700, 2299, 3)}>
          <ImageContainer src={keyboards} alt="" layout="fill" />
        </ImageWrapper>
      </CardAnchor>
      {/* <ProjectSeparator /> */}
    </ProjectAnchor>
  );
};

export default ProjectCard;
