import React, { useEffect, useState } from 'react';
import { IProject } from '../../interfaces/types';
import ProjectCard from '../../components/organisms/ProjectCard';
import { PROJECT_HEADING, PROJECT_REF } from '../../utils/constants';
import { getProjects } from '../../services/apicalls/getcall';
import { StyledProjectDiv, StyledProjectSection } from '../../utils/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleLeft, faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';
import { CHEVRON_LEFT_ROLE, CHEVRON_RIGHT_ROLE } from '../../services/mocks/testMocks';
import { projectPerPage } from '../../services/mocks/mocks';
import { updateIndices } from '../../services/functions/functions';
import MuiButton from '../../components/atoms/Button';

const Project = () => {
  const [projects, setProjects] = useState<IProject[]>([]);
  const [pageState, setPageState] = useState({
    startIndex: 0,
    endIndex: projectPerPage.mobile,
  });
  const [stepBy,setStepBy] = useState(1)

  useEffect(() => {    
    if (window.innerWidth >= 1000) {
        setPageState((prevState) => ({
            ...prevState,
            endIndex: projectPerPage.laptop,
        }));
        setStepBy(3);
    } else if (window.innerWidth >= 768) {
        setPageState((prevState) => ({
            ...prevState,
            endIndex: projectPerPage.tablet,
        }));
        setStepBy(2);
    } else {
        setPageState((prevState) => ({
            ...prevState,
            endIndex: projectPerPage.mobile,
        }));
    }

    getProjects()
      .then((res) => {
        setProjects(res.data);
      })
      .catch((error) => {
        throw new Error('Error while fetching projects ' + error);
      });
      
  }, []);
    
  const handlePageChange = (step: string) => {
    setPageState((prevState) => {
      const { newStartIndex, newEndIndex } = updateIndices(
        prevState.startIndex,
        prevState.endIndex,
        step,
        projects,
        stepBy,
        true
      );
      return {
        startIndex: newStartIndex,
        endIndex: newEndIndex,
      };
    });
  }

  return (
    <StyledProjectSection id={PROJECT_REF}>
      <div>
        <h1>{PROJECT_HEADING}</h1>
      </div>
      <StyledProjectDiv>
        <MuiButton
            onClick={() => handlePageChange('prev')}
            disabled={pageState.startIndex === 0}
            children={<FontAwesomeIcon icon={faChevronCircleLeft} />}
            role={CHEVRON_LEFT_ROLE}
        />
        {projects
            .slice(
                pageState.startIndex,
                pageState.endIndex < projects.length ? pageState.endIndex : projects.length
            )
            .map((project) => (
                <ProjectCard key={project.id} projects={project} />
            )
        )}
        <MuiButton
            onClick={() => handlePageChange('next')}
            disabled={pageState.endIndex >= projects.length}
            children={<FontAwesomeIcon icon={faChevronCircleRight} />}
            role={CHEVRON_RIGHT_ROLE}
        />      
      </StyledProjectDiv>
    </StyledProjectSection>
  );
};

export default Project;
