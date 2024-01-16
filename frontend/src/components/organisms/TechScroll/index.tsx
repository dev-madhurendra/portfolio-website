import React, { useState } from 'react'
import MyChip from '../../atoms/Chip';
import { updateIndices } from '../../../services/functions/functions';
import { faChevronCircleLeft, faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CHEVRON_LEFT_ROLE, CHEVRON_RIGHT_ROLE } from '../../../services/mocks/testMocks';
import MuiButton from '../../atoms/Button';
import { StyledExpTechDiv } from '../../../utils/styled';

export interface ITechScroll {
    technologies: string
}

const TechScroll = (props: ITechScroll) => {
  const [pageState, setPageState] = useState({
    startIndex: 0,
    endIndex: 10,
  });
  const techArray = props.technologies.split(',');
  const handlePageChange = (step: string) => {
    setPageState((prevState) => {
      const { newStartIndex, newEndIndex } = updateIndices(
        prevState.startIndex,
        prevState.endIndex,
        step,
        techArray,
        10,
        true
      );
      return {
        startIndex: newStartIndex,
        endIndex: newEndIndex,
      };
    });
  }
  return (
    <StyledExpTechDiv>
        <MuiButton
            onClick={() => handlePageChange('prev')}
            disabled={pageState.startIndex === 0}
            children={<FontAwesomeIcon icon={faChevronCircleLeft} />}
            role={CHEVRON_LEFT_ROLE}
        />          
        {techArray
            .slice(pageState.startIndex,
                pageState.endIndex < techArray.length ? pageState.endIndex : techArray.length)
            .map((tech, index) => {
                return <MyChip key={index} label={tech} />;
        })}
        <MuiButton
            onClick={() => handlePageChange('next')}
            disabled={pageState.endIndex >= techArray.length}
            children={<FontAwesomeIcon icon={faChevronCircleRight} />}
            role={CHEVRON_RIGHT_ROLE}
        />  
    </StyledExpTechDiv>
  )
}

export default TechScroll