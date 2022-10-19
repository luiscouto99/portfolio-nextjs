import React, { useState } from "react";

import ProjectCard from "../../../components/ProjectCard";
import { projectsDB } from "../../../projectsDB";

import styled from "styled-components";
import CustomCursor from "../../../components/CustomCursor";

type ProjectsProps = {
  pageYOffset: number;
};
const ProjectsContainer = styled.section<ProjectsProps>`
  margin: ${(props) => (props.pageYOffset > 0 ? "80px 0" : "80px 276px")};
  padding: ${(props) => (props.pageYOffset > 0 ? "48px 276px" : "48px 0")};
  transition: all 0.6s ease-in-out;
  display: flex;
  flex-direction: column;
  row-gap: 100px;
  background-color: var(--primary-color);
  color: var(--secondary-color);
`;

const ButtonToScroll = styled.div``;

const SectionTitle = styled.p`
  text-transform: uppercase;
  text-align: center;
  margin: 0;
  color: rgba(2, 109, 83);
  font-weight: 600;
  cursor: pointer;
`;

const ProjectContainer = styled.div``;

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
            <ProjectCard
              key={project.id}
              project={project}
              pageYOffset={pageYOffset}
              handleMouseEnter={handleMouseEnter}
              handleMouseLeave={handleMouseLeave}
            />
          );
        })}
      </ProjectContainer>
    </ProjectsContainer>
  );
};

export default ProjectSection;
