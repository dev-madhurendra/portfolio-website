import React, { FormEvent, useState } from "react";
import { Mail, User, MessageSquare } from "lucide-react";
import {
  CharacterContainer,
  CharacterSection,
  ContactContainer,
  ContactInfo,
  FormGroup,
  FormSection,
  Input,
  InputIcon,
  InputWrapper,
  MainCard,
  SocialLink,
  SocialLinks,
  SubmitButton,
  Subtitle,
  TextArea,
} from "./styled";
import { HeaderDescription, HeaderSection } from "../Project/styled";
import {
  AnimatedBackground,
  GradientText,
  MainTitle,
  TitleBadge,
} from "../../globalStyled";
import { GradientOrb, StyledFontAwesomeIcon } from "../Home/styled";
import { socialLinks } from "../../services/mocks/mocks";
import { useAnimateOnScroll } from "../../hook/useAnimateOnScroll";
import { Form } from "react-bootstrap";
import { FORM_URL, MULTI_PART_FORM_DATA, POST } from "../../utils/constants";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const { ref, isVisible } = useAnimateOnScroll({ threshold: [0, 4] });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setError(""); 
    setSuccess(""); 
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setError("⚠️ Please fill in all fields");
      return;
    }

    console.log("Form submitted:", formData);
    e.currentTarget.submit();
    setSuccess("✅ Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <ContactContainer id="contact" ref={ref}>
      <AnimatedBackground>
        <GradientOrb className="orb-1" />
        <GradientOrb className="orb-2" />
        <GradientOrb className="orb-3" />
      </AnimatedBackground>

      <HeaderSection>
        <TitleBadge>
          <Mail size={16} /> LET'S CONNECT
        </TitleBadge>
        <MainTitle>
          Collaborate & <GradientText>Create</GradientText>
        </MainTitle>
        <HeaderDescription>
          Have a project in mind or just want to chat? I'd love to hear from
          you. Drop me a message and let's build something amazing together.
        </HeaderDescription>
      </HeaderSection>

      <MainCard>
        <FormSection className={isVisible ? "visible" : ""}>
          <Subtitle>
            Have a question or want to collaborate? Fill in the form, and we'll
            get back to you shortly.
          </Subtitle>

          <Form
            action={FORM_URL}
            method={POST}
            encType={MULTI_PART_FORM_DATA}
            onSubmit={handleSubmit}
          >
            <FormGroup>
              <InputWrapper>
                <InputIcon>
                  <User size={18} />
                </InputIcon>
                <Input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Full Name"
                />
              </InputWrapper>
            </FormGroup>

            <FormGroup>
              <InputWrapper>
                <InputIcon>
                  <Mail size={18} />
                </InputIcon>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email Address"
                />
              </InputWrapper>
            </FormGroup>

            <FormGroup>
              <InputWrapper>
                <InputIcon>
                  <MessageSquare size={18} />
                </InputIcon>
                <TextArea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Your message..."
                />
              </InputWrapper>
            </FormGroup>

            {error && <p style={{ color: "red", marginTop: "8px" }}>{error}</p>}
            {success && (
              <p style={{ color: "green", marginTop: "8px" }}>{success}</p>
            )}

            <SubmitButton type="submit">Send Message</SubmitButton>
          </Form>
        </FormSection>

        <CharacterSection>
          <CharacterContainer className={isVisible ? "visible" : ""}>
            <img
              src="../../../public/png/contactmeVector.png"
              alt="character"
            />
          </CharacterContainer>

          <ContactInfo>
            <SocialLinks>
              {socialLinks.slice(-3).map((social, index) => (
                <SocialLink
                  className={isVisible ? "visible" : ""}
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={social.label}
                >
                  <StyledFontAwesomeIcon
                    icon={social.icon}
                    label={social.label}
                  />
                  <GradientText>{social.label.toUpperCase()}</GradientText>
                </SocialLink>
              ))}
            </SocialLinks>
          </ContactInfo>
        </CharacterSection>
      </MainCard>
    </ContactContainer>
  );
};

export default Contact;
