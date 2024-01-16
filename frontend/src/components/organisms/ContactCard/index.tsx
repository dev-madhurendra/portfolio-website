import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    StyledContactSection,
    ContactGrid,
    LeftColumn,
    ImageContainer,
    ContactDetails,
    SocialLinks
} from "../../../utils/styled";
import {
    BLANK,
    CONTACT_DESC,
    CONTACT_IMAGE_URL,
    MADHURENDRA_NATH_TIWARI,
    SOFTWARE_ENGINEER
} from "../../../utils/constants";
import { socialLinks } from "../../../services/mocks/mocks";

const ContactCard = () => {
  return (
    <StyledContactSection>
      <ContactGrid>
        <LeftColumn>
          <ImageContainer>
            <img src={CONTACT_IMAGE_URL} alt="/" />
          </ImageContainer>
          <ContactDetails>
            <h3>{MADHURENDRA_NATH_TIWARI}</h3>
            <p>{SOFTWARE_ENGINEER}</p>
            <p>{CONTACT_DESC}</p>
          </ContactDetails>
          <SocialLinks>
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.link}
                target={BLANK}
              >
                <div>
                  <FontAwesomeIcon icon={social.icon} />
                </div>
              </a>
            ))}
          </SocialLinks>
        </LeftColumn>
      </ContactGrid>
    </StyledContactSection>
  );
};

export default ContactCard;
