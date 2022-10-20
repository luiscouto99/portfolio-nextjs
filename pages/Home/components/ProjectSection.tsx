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
  margin: ${(props) => (props.pageYOffset > 0 ? "80px 64px" : "80px 276px")};
  padding: ${(props) => (props.pageYOffset > 0 ? "48px 276px" : "48px 0")};
  display: flex;
  flex-direction: column;
  row-gap: 100px;
  color: var(--primary-color);

  background-image: url(${blur.src});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  /* backdrop-filter: blur(16px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%); */
  background-color: rgba(3, 30, 25, 0.75);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.125);
  transition: all 0.6s ease-in-out;

  & > div:last-child {
    & > div:last-child {
      & > div:last-child {
        background-color: transparent;
        margin-bottom: 10px;
      }
    }
  }
`;

const ButtonToScroll = styled.div``;

const SectionTitle = styled.p`
  text-transform: uppercase;
  text-align: center;
  margin: 0;
  color: var(--primary-color);
  font-weight: 600;
  cursor: pointer;
  padding: 12px;
`;

const ProjectContainer = styled.div`
  position: relative;
  z-index: 2;
`;

const ProjectSeparator = styled.div`
  width: 100%;
  height: 4px;
  opacity: 0.5;
  background: var(--secondary-color);
  margin: 110px 0;
  /* background: linear-gradient(to right, var(--background-color), var(--primary-color), var(--background-color)); */
`;

const ProjectWrapper = styled.div``;

const ProjectSection = ({ pageYOffset }: { pageYOffset: number }) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleMouseEnter = () => setIsVisible(true);
  const handleMouseLeave = () => setIsVisible(false);

  return (
    <ProjectsContainer pageYOffset={pageYOffset}>
      <CustomCursor isVisible={isVisible} />
      <ButtonToScroll onClick={() => window.scrollTo(0, 835)}>
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
