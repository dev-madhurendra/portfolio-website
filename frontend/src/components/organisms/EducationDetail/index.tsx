import React from 'react'
import { getRandomImage } from '../../../services/functions/functions';
import { educationImage } from '../../../services/mocks/mocks';
import { EDUCATION_ALT } from '../../../utils/constants';
import { IEducationDetail } from '../../../interfaces/types';
import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';
import TypedText from '../TypedText';

    
export const EducationDiv = styled('div')({
    display: "flex",
    flexDirection:"column",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "90%",
    height: "37.5rem",
    background: 'rgba( 255, 255, 255, 0.1 )',
    boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
    backdropFilter: 'blur(20px)',
    WebkitBackdropFilter: 'blur(20px)',
    borderRadius: '50px',
    border: '1px solid rgba(255, 255, 255, 0.18)',
})

export const EducationIconTextDiv = styled('div')({
    display: "flex",
    justifyContent: "flex-start",
    textAlign:"justify",
    gap:"20px",
    width:"100%",
    fontSize: "1.25rem",
    '& span': {
        width:"20%",
    },
    '& p': {
        width:"60%",
    }
})
export const EducationImageDiv = styled('div')({
    display: "flex",
    justifyContent: "flex-start",
    borderRadius: "10px",
    width:"90%",
    '& img': {
        width: "100%",
        height: "18.75rem",
        borderRadius:"0.625rem"
    }
});

export const EducationDetails = styled('div')({
    display: "flex",
    flexDirection: "column",
    gap:"2px",
    justifyContent: "center",
    width: "90%",
});


const EducationDetail = (props: IEducationDetail) => {

    const educationDetails = [
        { label: 'School', value: props.school },
        { label: 'Percentage', value: props.percentage },
        { label: 'Duration', value: `${props.start_date} - ${props.end_date}` },
        { label: 'Location', value: props.location },
        { label: 'Description', value: props.description },
    ];
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