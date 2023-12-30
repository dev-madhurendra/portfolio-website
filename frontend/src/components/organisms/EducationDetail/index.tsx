import React from 'react'
import { getEducationDetails, getRandomImage } from '../../../services/functions/functions';
import { educationImage } from '../../../services/mocks/mocks';
import { EDUCATION_ALT } from '../../../utils/constants';
import { IEducationDetail } from '../../../interfaces/types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';
import TypedText from '../TypedText';
import { EducationDiv, EducationImageDiv, EducationDetails, EducationIconTextDiv } from '../../../utils/styled';

const EducationDetail = (props: IEducationDetail) => {

  const educationDetails = getEducationDetails(props)

  return (
    <EducationDiv>
        <EducationImageDiv>
            <img
                src={getRandomImage(educationImage)}
                alt={EDUCATION_ALT}
            />      
        </EducationImageDiv>
        <EducationDetails>
            {educationDetails.map((detail, index) => (
                <EducationIconTextDiv key={index}>
                    <FontAwesomeIcon icon={faCircleArrowRight} />
                    <TypedText text={detail.value} />
                </EducationIconTextDiv>
            ))}      
        </EducationDetails>
    </EducationDiv>
  )
}

export default EducationDetail