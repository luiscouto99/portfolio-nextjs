import React, { useState } from "react";

import ProjectCard from "../../../components/ProjectCard";
import { projectsDB } from "../../../projectsDB";

import styled from "styled-components";
import CustomCursor from "../../../components/CustomCursor";
import blur from "../../../public/images/blur.svg";

type ProjectsProps = {
  pageYOffset: number;
};
const ProjectsContainer = styled.section<ProjectsProps>`
  margin: ${(props) => (props.pageYOffset > 0 && props.pageYOffset < 2500 ? "80px 64px" : "80px 276px")};
  padding: ${(props) => (props.pageYOffset > 0 && props.pageYOffset < 2500 ? "48px 212px" : "48px 0")};
  display: flex;
  flex-direction: column;
  row-gap: 100px;
  color: var(--primary-color);

  background-image: url(${blur.src});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-color: rgba(3, 30, 25, 0.75);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.125);
  transition: all 1s ease-in-out;

  & > div:last-child {
    & > div:last-child {
      & > div:last-child {
        background-color: transparent;
        margin-bottom: 10px;
      }
    }
  }

  @media (max-width: 1410px) {
    margin: ${(props) => (props.pageYOffset > 0 && props.pageYOffset < 3300 ? "80px 64px" : "80px 212px")};
    padding: ${(props) => (props.pageYOffset > 0 && props.pageYOffset < 3300 ? "48px 212px" : "48px 0")};
  }

  @media (max-width: 1080px) {
    margin: ${(props) => (props.pageYOffset > 0 && props.pageYOffset < 3300 ? "80px 64px" : "80px 128px")};
    padding: ${(props) => (props.pageYOffset > 0 && props.pageYOffset < 3300 ? "48px 128px" : "48px 0")};
  }

  @media (max-width: 668px) {
    padding: ${(props) => (props.pageYOffset > 0 && props.pageYOffset < 3300 ? "48px 20px" : "48px 0")};
  }

  @media (max-width: 500px) {
    margin: 80px 64px;
    padding: 48px 20px;
  }
`;

const ButtonToScroll = styled.div`
  position: relative;
  margin: 0 auto;
`;

const SectionTitle = styled.p`
  margin: 0;
  text-transform: uppercase;
  color: var(--primary-color);
  font-weight: 600;
  padding: 12px 0;
  cursor: pointer;

  &:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: 4px;
    left: 0;
    background-color: var(--primary-color);
    transform: scaleX(0);
    transform-origin: bottom right;
    transition: transform 0.3s;
  }

  &:hover {
    &:after {
      transform-origin: bottom left;
      transform: scaleX(1);
    }
  }
`;

const ProjectContainer = styled.div`
  position: relative;
  z-index: 2;
`;

const ProjectWrapper = styled.div``;

const ProjectSeparator = styled.div`
  width: 100%;
  height: 4px;
  opacity: 0.5;
  background: var(--secondary-color);
  margin: 110px 0;

  @media (max-width: 1410px) {
    margin: 80px 0;
  }
`;

const ProjectSection = ({ pageYOffset }: { pageYOffset: number }) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleMouseEnter = () => setIsVisible(true);
  const handleMouseLeave = () => setIsVisible(false);

  return (
    <ProjectsContainer pageYOffset={pageYOffset}>
      <CustomCursor isVisible={isVisible} />
      <ButtonToScroll onClick={() => window.scrollTo(0, window.innerWidth > 1410 ? 835 : 791)}>
        <SectionTitle>Selected Works (3)</SectionTitle>
      </ButtonToScroll>
      <ProjectContainer>
        {projectsDB.map((project) => {
          return (
            <ProjectWrapper key={project.id}>
              <ProjectCard
                project={project}
                pageYOffset={pageYOffset}
                handleMouseEnter={handleMouseEnter}
                handleMouseLeave={handleMouseLeave}
              />
              <ProjectSeparator />
            </ProjectWrapper>
          );
        })}
      </ProjectContainer>
    </ProjectsContainer>
  );
};

export default ProjectSection;
