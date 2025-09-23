import React from "react";
import {
  SkeletonHeroContainer,
  SkeletonGradientOrb,
  SkeletonHeroContent,
  SkeletonLeftSection,
  SkeletonGreeting,
  SkeletonWaveEmoji,
  SkeletonGreetingText,
  SkeletonName,
  SkeletonTypedText,
  SkeletonIntroText,
  SkeletonIntroLine,
  SkeletonSocialLinks,
  SkeletonSocialIcon,
  SkeletonButtonGroup,
  SkeletonButton,
  SkeletonRightSection,
  SkeletonHeroImageContainer,
  SkeletonHeroImage,
  SkeletonFloatingElements,
  SkeletonFloatingCard,
  SkeletonCardIcon,
  SkeletonCardLabel,
  SkeletonScrollIndicator,
  SkeletonScrollIcon,
  SkeletonScrollText,
} from "./styled";

const SkeletonHomeSection = () => {
  return (
    <SkeletonHeroContainer id="home">
      <SkeletonGradientOrb className="orb-1" />
      <SkeletonGradientOrb className="orb-2" />
      <SkeletonGradientOrb className="orb-3" />

      <SkeletonHeroContent>
        <SkeletonLeftSection>
          <SkeletonGreeting>
            <SkeletonWaveEmoji />
            <SkeletonGreetingText />
          </SkeletonGreeting>

          <div>
            <SkeletonName />
            <SkeletonTypedText />
          </div>

          <SkeletonIntroText>
            <SkeletonIntroLine style={{ width: "100%" }} />
            <SkeletonIntroLine style={{ width: "90%" }} />
            <SkeletonIntroLine style={{ width: "75%" }} />
          </SkeletonIntroText>

          <SkeletonSocialLinks>
            {[1, 2, 3, 4].map((item) => (
              <SkeletonSocialIcon key={item} />
            ))}
          </SkeletonSocialLinks>

          <SkeletonButtonGroup>
            <SkeletonButton className="primary" />
            <SkeletonButton className="secondary" />
          </SkeletonButtonGroup>
        </SkeletonLeftSection>

        <SkeletonRightSection>
          <SkeletonHeroImageContainer>
            <SkeletonHeroImage />
          </SkeletonHeroImageContainer>

          <SkeletonFloatingElements>
            {[1, 2, 3, 4].map((item) => (
              <SkeletonFloatingCard key={item} className={`card-${item}`}>
                <SkeletonCardIcon />
                <SkeletonCardLabel />
              </SkeletonFloatingCard>
            ))}
          </SkeletonFloatingElements>
        </SkeletonRightSection>
      </SkeletonHeroContent>

      <SkeletonScrollIndicator>
        <SkeletonScrollIcon />
        <SkeletonScrollText />
      </SkeletonScrollIndicator>
    </SkeletonHeroContainer>
  );
};

export default SkeletonHomeSection;
