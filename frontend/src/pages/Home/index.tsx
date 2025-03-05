import React, { useEffect, useRef, useState } from 'react';
import Typed from 'typed.js';
import { greetingsHello, greets, typeAttributes } from '../../services/mocks/mocks';
import { HIRE_ME_HREF, RESUME_LINK, TERMINAL_PORTFOLIO_URL } from '../../utils/constants';
import { ButtonHomeDiv, CapsuleButton, GreetHomeDiv, HomeDiv, IntroDiv, LeftHomeDiv, RightHomeDiv, TerminalIcon, TypedHomeDiv } from '../../utils/styled';
import SocialMediaIcons from '../../components/molecules/SocialMediaIcons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faUser, faTerminal } from '@fortawesome/free-solid-svg-icons';
import AnimatedName from '../../components/molecules/AnimatedName';
import TiltedHeroImage from '../../components/atoms/TiltedHeroImage';
import './style.css';
import TerminalPortfolioModal from '../../components/organisms/TerminalModel';
import { Tooltip } from '@mui/material';

const HomeSection = () => {
  const el = useRef(null);
  const el1 = useRef(null);
  const [isModalOpen, setModalOpen] = useState(false);

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
        <div className="ocean-wave"></div>
        <div className="ocean-wave"></div>
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
        
       
        <Tooltip title='Terminl Portfolio' arrow>
          <TerminalIcon 
            className="terminal-icon"
            onClick={() => setModalOpen(true)}
          >
            <FontAwesomeIcon icon={faTerminal} size="2x" />
          </TerminalIcon> 
        </Tooltip> 
      </LeftHomeDiv>
      <RightHomeDiv>
        <TiltedHeroImage />    
      </RightHomeDiv>

      <TerminalPortfolioModal 
        isOpen={isModalOpen} 
        onClose={() => setModalOpen(false)} 
        url={TERMINAL_PORTFOLIO_URL}
      />
    </HomeDiv>
  );
};

export default HomeSection;
