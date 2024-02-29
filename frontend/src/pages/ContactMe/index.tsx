import React from 'react'
import Contact from '../../components/organisms/Contact'
import ContactCard from '../../components/organisms/ContactCard'
import { CenteredText, ContactContainer, StyledContactMeSection } from '../../utils/styled'
import { CONTACT, CONTACT_ME } from '../../utils/constants'
import { useScrollReveal } from '../../hook/useScrollReveal'

const ContactMeSection = () => {
    useScrollReveal();

    return (
      <ContactContainer id={CONTACT} className='reveal'>
        <CenteredText>{CONTACT_ME}</CenteredText>
        <StyledContactMeSection>
          <ContactCard />
          <Contact />
        </StyledContactMeSection>
      </ContactContainer>
    );
}

export default ContactMeSection