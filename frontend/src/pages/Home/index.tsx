import React, { useEffect, useMemo, useState, useRef } from 'react';
import Typed from 'typed.js';
import { greetingsHello, greets, typeAttributes } from '../../services/mocks/mocks';
import { HIRE_ME_HREF, RESUME_LINK } from '../../utils/constants';
import { ButtonHomeDiv, CapsuleButton, GreetHomeDiv, HomeDiv, IntroDiv, LeftHomeDiv, RightHomeDiv, RotatedBackground, TypedHomeDiv } from '../../utils/styled';
import SocialMediaIcons from '../../components/molecules/SocialMediaIcons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faUser } from '@fortawesome/free-solid-svg-icons';
import AnimatedName from '../../components/molecules/AnimatedName';
import TiltedHeroImage from '../../components/atoms/TiltedHeroImage';
import './style.css';

const HomeSection = () => {
  const el = useRef(null);
  const el1 = useRef(null);

  // Typed.js Effect
  useEffect(() => {
    const typed = new Typed(el.current, typeAttributes(greets));
    const typed1 = new Typed(el1.current, typeAttributes(greetingsHello));
    
    return () => {
      typed.destroy();
      typed1.destroy();
    };
  }, []);

  return (      
      <HomeDiv id={'home'}>
        <div className="ocean">
          <div className="wave"></div>
          <div className="wave"></div>
        </div>
        <LeftHomeDiv>
          <GreetHomeDiv>
            <h1 ref={el1}></h1>      
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
              startIcon={<FontAwesomeIcon icon={faUser} />}
              href={HIRE_ME_HREF}
            >
              Hire Me
            </CapsuleButton>
          </ButtonHomeDiv>  
        </LeftHomeDiv>
        <RightHomeDiv>
          <TiltedHeroImage />    
        </RightHomeDiv>
      </HomeDiv>
  );
};

export default HomeSection;
