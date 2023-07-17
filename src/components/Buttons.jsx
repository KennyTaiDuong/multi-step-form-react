import React, { useContext } from "react";
import styled from "styled-components";
import { GeneralContext } from "../App";

const ButtonContainer = styled.div`
  width: 100%;
  background: white;
  margin-top: auto;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  position: fixed;
  bottom: 0;

  @media (min-width: 655px) {
    position: static;
    padding: 0.5rem;
  }
`;

const NextBtn = styled.button`
  border: none;
  background: #483eff;
  color: white;
  padding: 0.75rem 1rem;
  border-radius: 5px;
  margin-left: auto;

  &:active {
    background-color: ${({ bgc }) => bgc};
  }
`;

const BackBtn = styled.button`
  border: 0;
  background: 0;
  color: hsl(231, 11%, 63%);
  font-weight: 500;
`;

export default function Buttons() {
  const { step, setStep, userInfo, userPlan, setFormValid } =
    useContext(GeneralContext);
  const { name, email, number } = userInfo;
  const { plan } = userPlan;

  function handleNextButton() {
    // Prevents user from moving on without filling out current form
    if (step === 1 && name && email && number) {
      setStep((prevStep) => prevStep + 1);
    } else if (step === 2 && plan) {
      setStep((prevStep) => prevStep + 1);
    } else if (step > 2) {
      setStep((prevStep) => prevStep + 1);
    }

    // Checks if name, email, and/or number has been filled out
    if (!name) {
      setFormValid((prevState) => {
        return {
          ...prevState,
          nameValid: true,
        };
      });
    } else {
      setFormValid((prevState) => {
        return {
          ...prevState,
          nameValid: false,
        };
      });
    }
    if (!email) {
      setFormValid((prevState) => {
        return {
          ...prevState,
          emailValid: true,
        };
      });
    } else {
      setFormValid((prevState) => {
        return {
          ...prevState,
          emailValid: false,
        };
      });
    }
    if (!number) {
      setFormValid((prevState) => {
        return {
          ...prevState,
          numberValid: true,
        };
      });
    } else {
      setFormValid((prevState) => {
        return {
          ...prevState,
          numberValid: false,
        };
      });
    }
  }

  function handleBackButton() {
    setStep((prevStep) => prevStep - 1);
  }

  return (
    <>
      {step !== 5 && (
        <ButtonContainer>
          {step !== 1 && <BackBtn onClick={handleBackButton}>Go Back</BackBtn>}
          <NextBtn bgc={step === 4 ? "#938cfe" : ""} onClick={handleNextButton}>
            {step === 4 ? "Confirm" : "Next Step"}
          </NextBtn>
        </ButtonContainer>
      )}
    </>
  );
}
