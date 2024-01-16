import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import {
    StyledContactSection,
    ContactGrid,
    LeftColumn,
    ImageContainer,
    ContactDetails,
    SocialLinks
} from "../../../utils/styled";
import { CONTACT_DESC, CONTACT_IMAGE_URL, MADHURENDRA_NATH_TIWARI, SOFTWARE_ENGINEER } from "../../../utils/constants";

const ContactCard = () => {
  return (
    <StyledContactSection>
      <ContactGrid>
        <LeftColumn>
          <ImageContainer>
            <img
              src={CONTACT_IMAGE_URL}
              alt="/"            
            />
          </ImageContainer>
          <ContactDetails>
            <h3>{MADHURENDRA_NATH_TIWARI}</h3>
            <p>{SOFTWARE_ENGINEER}</p>
            <p>{CONTACT_DESC}</p>
            </ContactDetails>
          <SocialLinks>
            <a
              href="https://www.linkedin.com/in/dev-madhurendra/"
              target="_blank"
              rel="noreferrer"
            >
              <div>
                <FontAwesomeIcon icon={faLinkedinIn} />
              </div>
            </a>
            <a href="https://github.com/suryac72" target="_blank" rel="noreferrer">
              <div>
                <FontAwesomeIcon icon={faLinkedinIn} />
              </div>
            </a>
            <div>
              <FontAwesomeIcon icon={faLinkedinIn} />
            </div>
            <a href="/resume">
                <div>
                    <FontAwesomeIcon icon={faLinkedinIn} />
                </div>
            </a>
            </SocialLinks>
        </LeftColumn>
      </ContactGrid>
    </StyledContactSection>
  );
};

export default ContactCard;
