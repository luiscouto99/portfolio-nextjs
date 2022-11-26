import React, { useState } from 'react';

import CustomCursor from './CustomCursor/CustomCursor';

import { useWindowWidth } from '../../hooks/useWindowWidth';

import Project from './Project/Project';
import { ProjectsContainer, ButtonToScroll, SectionTitle } from './ProjectSection.styled';

const ProjectSection = ({ pageYOffset }: { pageYOffset: number }) => {
  const [isVisible, setIsVisible] = useState(false);
  const screenWidth = useWindowWidth();

  const handleMouseEnter = () => setIsVisible(true);
  const handleMouseLeave = () => setIsVisible(false);

  return (
    <ProjectsContainer pageYOffset={pageYOffset} id="scrollProj">
      {screenWidth > 768 && <CustomCursor isVisible={isVisible} />}

      <ButtonToScroll onClick={() => document?.getElementById('scrollProj')?.scrollIntoView()}>
        <SectionTitle>Selected Works (3)</SectionTitle>
      </ButtonToScroll>

      <Project
        pageYOffset={pageYOffset}
        handleMouseEnter={handleMouseEnter}
        handleMouseLeave={handleMouseLeave}
      />
    </ProjectsContainer>
  );
};

export default ProjectSection;
