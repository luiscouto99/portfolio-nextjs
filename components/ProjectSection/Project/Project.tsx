import React from 'react';

import ProjectCard from '../ProjectCard/ProjectCard';

import { projectsDB } from '../../../projectsDB';
import { Container, ProjectSeparator, ProjectWrapper } from './Project.styled';

const Project = ({
  pageYOffset,
  handleMouseEnter,
  handleMouseLeave,
}: {
  pageYOffset: number;
  handleMouseEnter: () => void;
  handleMouseLeave: () => void;
}) => (
  <Container>
    {projectsDB.map((project) => (
      <ProjectWrapper key={project.id}>
        <ProjectCard
          project={project}
          pageYOffset={pageYOffset}
          handleMouseEnter={handleMouseEnter}
          handleMouseLeave={handleMouseLeave}
        />
        <ProjectSeparator />
      </ProjectWrapper>
    ))}
  </Container>
);

export default Project;
