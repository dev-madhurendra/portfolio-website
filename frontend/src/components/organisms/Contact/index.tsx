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
          action="https://getform.io/f/57d00a1e-cb8c-494a-9257-d5277f3d6880"
          method="POST"
          encType="multipart/form-data"
        >
            <FormGroup>
                {formFields.map((field) => (
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

