import React from 'react'

import ProjectCard from "./ProjectCard";

import { projectsDB } from "../../../projectsDB";

import styled from 'styled-components';

const Container = styled.div`
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

  @media (max-width: 1410px) {
    margin: 40px 0;
  }
`;

const Project = ({
    pageYOffset,
    handleMouseEnter,
    handleMouseLeave
}: {
    pageYOffset: number,
    handleMouseEnter: () => void,
    handleMouseLeave: () => void
}) => {
    return (
        <Container>
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
        </Container>
    )
}

export default Project