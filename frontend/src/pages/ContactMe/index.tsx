import React from 'react'
import Contact from '../../components/organisms/Contact'
import ContactCard from '../../components/organisms/ContactCard'
import { StyledContactMeSection } from '../../utils/styled'
import styled from '@emotion/styled'
import { CONTACT_ME } from '../../utils/constants'

export const ContactContainer = styled('div')({
    height: "100%",
    marginTop:"50px"
})

const ContactMeSection = () => {
    return (
      <ContactContainer>
        <h1 style={{ textAlign: "center" }}>{CONTACT_ME}</h1>
        <StyledContactMeSection id="contact">
          <ContactCard />
          <Contact />
        </StyledContactMeSection>
      </ContactContainer>
    );
}

export default ContactMeSection