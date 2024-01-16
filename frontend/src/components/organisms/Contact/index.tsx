import React from "react";
import styled from "@emotion/styled";

const StyledContact = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content:center;
  align-items:center;
`;

const FormContainer = styled.div`
  grid-column: span 3;
  width: 80%;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(20px);
  webkit-backdrop-filter: blur(20px);
  border-radius: 20px;
  padding: 16px;
  @media (max-width: 468px) {
    width: 90%;
  }
`;

const Form = styled.form`
  width: 100%;
  max-width: 1240px;
  margin: auto;
  padding: 10px;
`;

const FormGroup = styled.div`
  display: flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;
  gap: 4px;
  width:100%;
  padding: 2px;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2px;
  width:100%;

  label {
    text-transform: uppercase;
    font-size: 0.875rem;
    padding: 2px;
  }

  input,
  textarea {
    border: 2px solid #cbd5e0;
    border-radius: 8px;
    padding: 10px;
    margin: 4px 0;
  }

  textarea {
    resize: vertical;
  }
`;

const SendButton = styled.button`
  width: 100%;
  padding: 16px;
  text-align: center;
  background-color: #4a5568;
  color: #ffffff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
`;
const formFields = [
  { name: "Name", type: "text", field: "name" },
  { name: "Phone Number", type: "text", field: "phone" },
  { name: "Email", type: "email", field: "email" },
  { name: "Subject", type: "text", field: "subject" },
  { name: "Message", type: "textarea", field: "message" },
];
const Contact = () => {
  return (
    <StyledContact id="contact">
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
                            <input type={field.type} name={field.field}/>
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

