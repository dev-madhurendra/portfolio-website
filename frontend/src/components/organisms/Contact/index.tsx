import React, { useState, FormEvent, ChangeEvent } from "react";
import { Form, FormGroup } from "react-bootstrap";
import {
  StyledContact,
  FormContainer,
  InputWrapper,
  SendButton,
} from "../../../utils/styled";
import {
  CONTACT,
  FORM_URL,
  MULTI_PART_FORM_DATA,
  POST,
  SUBMIT,
  TEXTAREA,
} from "../../../utils/constants";
import { formFields, initialContactFormData } from "../../../services/mocks/mocks";
import { IFormData, IFormErrors } from "../../../interfaces/types";
import { FormHelperText } from "@mui/material";


const Contact = () => {
  const [formData, setFormData] = useState<IFormData>(initialContactFormData);
  const [errors, setErrors] = useState<IFormErrors>({});

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length === 0) {
      event.currentTarget.submit();
    } else {
      setErrors(validationErrors);
    }
  };

  const validateForm = (data: IFormData): IFormErrors => {
    const errors: IFormErrors = {};
    if (!data.name.trim()) {
      errors.name = "Name is required";
    }
    if (!data.phone.trim()) {
      errors.phone = "Phone number is required";
    }
    if (!data.email.trim()) {
      errors.email = "Email is required";
    } else if (!isValidEmail(data.email)) {
      errors.email = "Invalid email format";
    }
    return errors;
  };

  const isValidEmail = (email: string) => {
    const emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(email);
  };

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  return (
    <StyledContact id={CONTACT}>
      <FormContainer>
        <Form
          action={FORM_URL}
          method={POST}
          encType={MULTI_PART_FORM_DATA}
          onSubmit={handleSubmit}
        >
          <FormGroup>
            {formFields.map(field => (
              <InputWrapper key={field.field}>
                <label htmlFor={field.field}>{field.name}</label>
                {field.type === TEXTAREA ? (
                  <textarea
                    rows={10}
                    name={field.field}
                    value={formData[field.field as keyof IFormData]}
                    onChange={handleInputChange}
                  />
                ) : (
                  <input
                    type={field.type}
                    name={field.field}
                    value={formData[field.field as keyof IFormData]}
                    onChange={handleInputChange}
                  />
                )}
                {errors[field.field as keyof IFormData] && (
                  <FormHelperText error>
                    {errors[field.field as keyof IFormData]}
                  </FormHelperText>
                )}
              </InputWrapper>
            ))}
          </FormGroup>
          <SendButton type={SUBMIT}>Send Message</SendButton>
        </Form>
      </FormContainer>
    </StyledContact>
  );
};

export default Contact;
