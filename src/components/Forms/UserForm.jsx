import React, { useContext } from "react";
import styled from "styled-components";
import { Heading, Subheading, Form, FormContainer } from "../../globalStyles";
import { GeneralContext } from "../../App";

const StyledLabel = styled.label`
  color: #1d3c5a;
  font-weight: 500;
  margin-bottom: 0.25rem;
  font-size: 0.875rem;
  display: flex;
  justify-content: space-between;
`;

const StyledSpan = styled.span`
  color: red;
`;

const StyledInput = styled.input`
  border: 1px solid ${({ bc }) => bc};
  border-radius: 8px;
  padding: 0.75rem;
  margin-bottom: 1rem;
  color: #031633;

  &:focus {
    border: 2px solid #524e93;
    outline: 0;
  }
`;

export default function EmailForm() {
  const { userInfo, setUserInfo, formValid } = useContext(GeneralContext);
  const { name, email, number } = userInfo;
  const { nameValid, emailValid, numberValid } = formValid;

  function handleChange(event) {
    setUserInfo((prevState) => {
      return {
        ...prevState,
        [event.target.id]: event.target.value,
      };
    });
  }

  return (
    <FormContainer>
      <Heading>Personal info</Heading>
      <Subheading>
        Please provide your name, email address, and phone number.
      </Subheading>
      <Form>
        <StyledLabel htmlFor="name">
          Name <StyledSpan>{nameValid ? "Field required" : ""}</StyledSpan>
        </StyledLabel>
        <StyledInput
          type="text"
          id="name"
          placeholder="e.g. Stephen King"
          onChange={(event) => handleChange(event)}
          defaultValue={name}
          bc={nameValid ? "red" : "lightgray"}
        />
        <StyledLabel htmlFor="email">
          Email Address{" "}
          <StyledSpan>{emailValid ? "Field required" : ""}</StyledSpan>
        </StyledLabel>
        <StyledInput
          type="email"
          id="email"
          placeholder="e.g. stephenking@lorem.com"
          onChange={(event) => handleChange(event)}
          defaultValue={email}
          bc={emailValid ? "red" : "lightgray"}
        />
        <StyledLabel htmlFor="number">
          Phone Number{" "}
          <StyledSpan>{numberValid ? "Field required" : ""}</StyledSpan>
        </StyledLabel>
        <StyledInput
          type="text"
          id="number"
          placeholder="e.g. +1 234 567 890"
          onChange={(event) => handleChange(event)}
          defaultValue={number}
          bc={numberValid ? "red" : "lightgray"}
        />
      </Form>
    </FormContainer>
  );
}
