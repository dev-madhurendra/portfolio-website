import React, { useEffect } from 'react'
import Typed from 'typed.js';
import AboutImage from "../../../public/jpeg/About-Image.jpg"
import MyChip from '../../components/atoms/Chip'
import { nameType, skillsData, socialMediaData, typeAttributes,  } from '../../services/mocks/mocks'
import { ABOUT_COMPONENT, ABOUT_DESC, ABOUT_SUB_DESC, ABOUT_SUB_FOOTER_DESC, ICON_ABOUT_ALT } from '../../utils/constants';
import { AboutDiv, LeftAboutDiv, MuiChipAboutStyled, RightAboutDiv, SkillAboutDiv } from '../../utils/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLink } from '@fortawesome/free-solid-svg-icons';
import { useScrollReveal } from '../../hook/useScrollReveal';


const About = () => {
  const el = React.useRef(null);
  useScrollReveal();
  useEffect(() => {
    const typed = new Typed(el.current, typeAttributes(nameType));

    return () => {
      typed.destroy();
    };
  }, []);
    

  return (
    <AboutDiv data-testid={ABOUT_COMPONENT} id={'about'} className='reveal'>
        <LeftAboutDiv>
            <img src={AboutImage} alt={ICON_ABOUT_ALT} />      
        </LeftAboutDiv>        
        <RightAboutDiv>
            <h1>{'<About />'}</h1>
            <div>
            <h2 ref={el}></h2>
            <MyChip
              label='<Software Engineer />'
              size='small'
            />      
            </div>
            <div><h3>{ABOUT_DESC}</h3></div>
            <div><h3>{ABOUT_SUB_DESC}</h3></div>
            <SkillAboutDiv>
                {skillsData.map((skill, index) => (
                    <MyChip
                        key={index}
                        label={skill.label}
                        size='small'
                        style={MuiChipAboutStyled}
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
