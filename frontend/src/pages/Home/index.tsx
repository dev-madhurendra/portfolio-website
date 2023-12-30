import React, { useEffect } from 'react'
import Typed from 'typed.js';
import { typeAttributes } from '../../services/mocks/mocks';
import { HERO_SECTION_IMAGE, RESUME_LINK } from '../../utils/constants';
import { ButtonHomeDiv, CapsuleButton, GreetHomeDiv, HomeDiv, IntroDiv, LeftHomeDiv, RightHomeDiv, TypedHomeDiv } from '../../utils/styled';
import SocialMediaIcons from '../../components/molecules/SocialMediaIcons';
import HeroSectionImage from '../../../public/gif/Video-Call.gif'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faUser } from '@fortawesome/free-solid-svg-icons';
import AnimatedName from '../../components/molecules/AnimatedName';
import './style.css'



const HomeSection = () => {
  const el = React.useRef(null);
  useEffect(() => {
    const typed = new Typed(el.current, typeAttributes);

    return () => {
      typed.destroy();
    };
  }, []);
  return (
        <HomeDiv id={'home'}>
          <LeftHomeDiv>
              <GreetHomeDiv>
                  <h1>Hello</h1>      
                  <h1 className='wave'>👋</h1>  
              </GreetHomeDiv>
              <IntroDiv>
                <AnimatedName />
              </IntroDiv>  
              <TypedHomeDiv>
                  <h4 ref={el}></h4>      
              </TypedHomeDiv>
              <SocialMediaIcons />
              <ButtonHomeDiv>
                <CapsuleButton
                  variant="contained"
                  startIcon={<FontAwesomeIcon icon={faDownload} />}
                  href={RESUME_LINK}
                >
                    Resume
                </CapsuleButton>
                <CapsuleButton
                  variant="outlined"
                  startIcon={<FontAwesomeIcon
                    icon={faUser} />}
                >
                  Hire Me
                </CapsuleButton>
              </ButtonHomeDiv>  
          </LeftHomeDiv>
          <RightHomeDiv>
            <img
              src={HeroSectionImage}
              alt={HERO_SECTION_IMAGE}
            />      
          </RightHomeDiv>
      </HomeDiv>
  )
}

export default HomeSection