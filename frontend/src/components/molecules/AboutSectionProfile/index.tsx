import React from "react";
import {
  ProfileImage,
  ProfileImageWrapper,
  ProfileParticles,
  ProfileRings,
  ProfileSection,
  TechIcons,
} from "./styled";
import AboutSectionImage from "../../../../public/gif/HeroSectionAnimation.gif";
import { techIcons } from "../../../services/mocks/mocks";

const EnhancedProfileSection = ({ className }: { className?: string }) => {
  return (
    <ProfileSection className={className}>
      <ProfileImageWrapper>
        <ProfileRings>
          <div className="ring ring-1"></div>
          <div className="ring ring-2"></div>
          <div className="ring ring-3"></div>
        </ProfileRings>

        <ProfileImage src={AboutSectionImage} alt="Madhurendra Nath Tiwari" />

        <ProfileParticles>
          {[...Array(6)].map((_, i) => (
            <div key={i} className={`particle particle-${i + 1}`}></div>
          ))}
        </ProfileParticles>

        <TechIcons>
          {techIcons.map(({ icon: Icon, title, className }, index) => (
            <Icon
              key={index}
              className={`tech-icon ${className}`}
              title={title}
            />
          ))}
        </TechIcons>
      </ProfileImageWrapper>
    </ProfileSection>
  );
};

export default EnhancedProfileSection;
