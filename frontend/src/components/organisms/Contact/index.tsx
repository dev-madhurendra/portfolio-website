import React from "react";
import { formFields } from "../../../services/mocks/mocks";
import { Form, FormGroup } from "react-bootstrap";
import { StyledContact, FormContainer, InputWrapper, SendButton } from "../../../utils/styled";
import { CONTACT } from "../../../utils/constants";

const Contact = () => {
  return (
    <StyledContact id={CONTACT}>
      <FormContainer>
        <Form
          action="https://getform.io/f/4a0d40e8-8d29-4e1d-a219-520384176f68"
          method="POST"
          encType="multipart/form-data"
        >
          <FormGroup>
            {formFields.map(field => (
              <InputWrapper key={field.field}>
                <label htmlFor={field.field}>{field.name}</label>
                {field.type === "textarea" ? (
                  <textarea rows={10} name={field.field} />
                ) : (
                  <input type={field.type} name={field.field} />
                )}
              </InputWrapper>
            ))}
          </FormGroup>
          <SendButton type="submit">Send Message</SendButton>
        </Form>
      </FormContainer>
    </StyledContact>
  );
};

export default Contact;

