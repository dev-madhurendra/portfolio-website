import React, { useEffect, useRef, useState } from 'react';
import Typed from 'typed.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faUser, faTerminal, faArrowDown, faMouse } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import HeroSectionImage from "../../../public/png/Hero-Section-Image.png"
import HeroSectionAnimation from "../../../public/gif/HeroSectionAnimation.gif"
import HeroSectionAnimationLight from "../../../public/gif/HeroSectionAnimationLight.gif"
import { HeroContainer, ButtonGroup, GradientOrb, HeroContent, LeftSection, GreetingText, TypedText, IntroText, PrimaryButton, SecondaryButton, SocialLinks, SocialIcon, RightSection, HeroImageContainer, HeroImage, FloatingElements, FloatingCard, ScrollIndicator } from './styled';
import { MADHURENDRA_NATH_TIWARI } from '../../utils/constants';
import { useDarkMode } from '../../services/customhook/useDarkMode';
import { LinksWrapper } from '../../components/molecules/Navbar/styled';
import LikeFeature from '../../components/organisms/LikeWrapper';


const HeroSection = () => {
  const typedRef = useRef(null);
  const {isDark} = useDarkMode();
  const greetingRef = useRef(null);
  const [isModalOpen, setModalOpen] = useState(false);

  const floatingCards = [
  { icon: "💻", label: "Clean Code" },
  { icon: "⚡", label: "Fast Performance" },
  { icon: "🛠️", label: "Full Stack Dev" },
  { icon: "☁️", label: "Cloud Integration" },
  { icon: "🔒", label: "Secure Apps" },
  { icon: "📱", label: "Responsive Design" } 
  ];

  // Typed.js configuration
  const typeAttributes = {
    strings: [
      'Full Stack Developer',
      'Frontend Engineer',
      'Backend Engineer',
      'Cloud & DevOps Engineer',
      'Mobile App Developer',
      'Software Architect'
    ]
,
    typeSpeed: 80,
    backSpeed: 60,
    backDelay: 2000,
    loop: true,
    showCursor: false
  };

  const greetingAttributes = {
    strings: ['Hello, I\'m', 'Hi there, I\'m', 'Welcome, I\'m'],
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 3000,
    loop: true,
    showCursor: false
  };

  useEffect(() => {
    const typed = new Typed(typedRef.current, typeAttributes);
    const greetingTyped = new Typed(greetingRef.current, greetingAttributes);
    
    return () => {
      typed.destroy();
      greetingTyped.destroy();
    };
  }, []);

  const socialLinks = [
    { icon: faGithub, url: 'https://github.com/dev-madhurendra', label: 'GitHub' },
    { icon: faLinkedin, url: 'https://linkedin.com/dev-madhurendra', label: 'LinkedIn' },
    { icon: faTwitter, url: 'https://x.com/dev_madhurendra', label: 'Twitter' },
    { icon: faInstagram, url: 'https://instagram.com/dev-madhurendra', label: 'Instagram' }
  ];

  return (
    <HeroContainer id="home">
      <GradientOrb className="orb-1" />
      <GradientOrb className="orb-2" />
      <GradientOrb className="orb-3" />
      
      <HeroContent>
        <LeftSection>
          <GreetingText>
            <span className="wave">👋</span>
            <span ref={greetingRef}></span>
          </GreetingText>
          
          <h1>
            <span className="name">{MADHURENDRA_NATH_TIWARI}</span>
            <br />
            <TypedText ref={typedRef}></TypedText>
          </h1>
          
          <IntroText>
            I craft beautiful digital experiences that connect brands with their audiences. 
            Specialized in creating intuitive interfaces and compelling user journeys that 
            drive engagement and conversion.
          </IntroText>

           <SocialLinks>
            {socialLinks.map((social, index) => (
              <SocialIcon 
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                title={social.label}
              >
                <FontAwesomeIcon icon={social.icon} />
              </SocialIcon>
            ))}
          </SocialLinks>

          <LikeFeature />
          
          <ButtonGroup>
            <PrimaryButton href="#contact">
              <FontAwesomeIcon icon={faUser} />
              Hire Me
            </PrimaryButton>
            <SecondaryButton href="/resume.pdf" download>
              <FontAwesomeIcon icon={faDownload} />
              Resume
            </SecondaryButton>
          </ButtonGroup>
          
         
        </LeftSection>
        
        <RightSection>
          <HeroImageContainer>
            <HeroImage 
              src={isDark ? HeroSectionAnimation : HeroSectionAnimationLight}
              alt="Madhurendra Nath Tiwari - Software Engineer"
            />
          </HeroImageContainer>
          
           <FloatingElements>
            {floatingCards.map((card, index) => (
              <FloatingCard key={index} className={`card-${index + 1}`}>
                <div className="icon">{card.icon}</div>
                <span>{card.label}</span>
              </FloatingCard>
            ))}
          </FloatingElements>
        </RightSection>
      </HeroContent>
      
      <ScrollIndicator>
        <FontAwesomeIcon icon={faMouse} />
        <span>Scroll to explore</span>
      </ScrollIndicator>

    </HeroContainer>
  );
};

export default HeroSection;