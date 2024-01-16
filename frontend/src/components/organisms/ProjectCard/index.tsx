import React from 'react';
import { IProjectCardProps } from '../../../interfaces/types';
import MyChip from '../../atoms/Chip';
import { PROJECT_ALT, PROJECT_IMAGE } from '../../../utils/constants';
import Link from '../../atoms/LInk';
import { ImageContainer, StyledProjectContainer, StyledProjectImageDiv, StyledProjectInfoDiv, StyledProjectUrlsDiv } from '../../../utils/styled';
import { getRandomImage } from '../../../services/functions/functions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareGithub } from '@fortawesome/free-brands-svg-icons';
import { faExternalLink } from '@fortawesome/free-solid-svg-icons';

const ProjectCard = (props: IProjectCardProps) => {
  const technologiesProject = props.projects.technologies.split(',');

  return (
    <StyledProjectContainer>
      <StyledProjectImageDiv>
        <ImageContainer>
            <img
                src={getRandomImage(PROJECT_IMAGE)}
                alt={`${PROJECT_ALT} ${props.projects.title}`}
                width={500}        
                height={500}        
            />
        </ImageContainer>
      </StyledProjectImageDiv>
      <StyledProjectInfoDiv>
        <h1>{props.projects.title}</h1>
        <p>{props.projects.description}</p>
        <div>
          {technologiesProject.map((tech, index) => (
            <MyChip key={index} label={tech} />
          ))}
        </div>
      </StyledProjectInfoDiv>
      <StyledProjectUrlsDiv>
        <Link url={props.projects.githubUrl} children={<FontAwesomeIcon icon={faSquareGithub} />} />
        <Link url={props.projects.deployedUrl} children={<FontAwesomeIcon icon={faExternalLink} />} />
      </StyledProjectUrlsDiv>
    </StyledProjectContainer>
  );
};

export default ProjectCard;
