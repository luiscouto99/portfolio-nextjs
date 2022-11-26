import React from 'react';

import ecommerce from '../../../public/images/ecommerce.jpg';
import keyboards from '../../../public/images/keyboards.jpg';
import pokemon from '../../../public/images/pokemon.jpg';

import { Project as ProjectType } from '../../../types/project';
import { useWindowWidth } from '../../../hooks/useWindowWidth';
import {
  ProjectAnchor,
  CardAnchor,
  CardInfo,
  Title,
  DescriptionWrapper,
  Separator,
  Description,
  ImageWrapper,
  ImageContainer,
} from './ProjectCard.styled';

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
  const screenWidth = useWindowWidth();

  const handleScroll = (minY: number, maxY: number, id: number) =>
    pageYOffset >= minY && pageYOffset < maxY && project.id === id ? true : false;

  return (
    <ProjectAnchor>
      <CardAnchor
        href={project.link}
        target="_blank"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <CardInfo>
          <Title>{project.name}</Title>
          <DescriptionWrapper>
            <Separator />
            <Description>{project.description}</Description>
          </DescriptionWrapper>
        </CardInfo>

        {screenWidth > 1410 ? (
          <>
            <ImageWrapper handleScroll={handleScroll(145, 1099, 1)}>
              <ImageContainer src={ecommerce} alt="" />
            </ImageWrapper>

            <ImageWrapper handleScroll={handleScroll(1100, 1699, 2)}>
              <ImageContainer src={pokemon} alt="" />
            </ImageWrapper>

            <ImageWrapper handleScroll={handleScroll(1700, 2500, 3)}>
              <ImageContainer src={keyboards} alt="" />
            </ImageWrapper>
          </>
        ) : (
          <ImageWrapper>
            {screenWidth > 1080 ? (
              <ImageContainer src={project.image} alt="project thumbnail" layout="fill" />
            ) : (
              <ImageContainer
                src={project.mobileImage}
                alt="project thumbnail mobile"
                layout="fill"
              />
            )}
          </ImageWrapper>
        )}
      </CardAnchor>
    </ProjectAnchor>
  );
};

export default ProjectCard;
