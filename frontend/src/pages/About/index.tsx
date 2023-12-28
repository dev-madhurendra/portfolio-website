import React, { useEffect } from 'react'
import Typed from 'typed.js';
import AboutImage from "../../../public/jpeg/About-Image.jpg"
import MyChip from '../../components/atoms/Chip'
import { skillsData, socialMediaData, typeNameAttributes } from '../../services/mocks/mocks'
import { ABOUT_DESC, ABOUT_SUB_DESC, ABOUT_SUB_FOOTER_DESC } from '../../utils/constants';
import { AboutDiv, LeftAboutDiv, RightAboutDiv, SkillAboutDiv } from '../../utils/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLink } from '@fortawesome/free-solid-svg-icons';


const About = () => {
  const el = React.useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, typeNameAttributes);

    return () => {
      typed.destroy();
    };
  }, []);
    

  return (
    <AboutDiv>
        <LeftAboutDiv>
            <img src={AboutImage} />      
        </LeftAboutDiv>        
        <RightAboutDiv>
            <h1>{'<About />'}</h1>
            <div>
            <h2 ref={el}></h2>
            <MyChip label='<Software Engineer />' size='small' style={{fontSize:"15px"}} />      
            </div>
            <div><h3>{ABOUT_DESC}</h3></div>
            <div><h3>{ABOUT_SUB_DESC}</h3></div>
            <SkillAboutDiv>
                {skillsData.map((skill, index) => (
                    <MyChip
                        key={index}
                        label={skill.label}
                        size='small'
                    />
                ))}
            </SkillAboutDiv>
            <div>
                <a href={`${socialMediaData[0].link}`} target='_blank'>
                    <FontAwesomeIcon icon={faExternalLink} style={{cursor:"pointer"}} />      
                </a>
                {ABOUT_SUB_FOOTER_DESC}
            </div>
        </RightAboutDiv>
    </AboutDiv>
  )
}

export default About