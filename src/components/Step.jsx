import React, { useContext } from "react";
import styled from "styled-components";
import { WindowContext, GeneralContext } from "../App";

const StyledStepContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

const StepNumber = styled.h4`
  border-radius: 50%;
  border: 1px solid white;
  color: white;
  height: 36px;
  width: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SelectedStepNumber = styled(StepNumber)`
  background: #bedefd;
  color: hsl(213, 96%, 18%);
`;

const StepText = styled.p`
  color: rgb(160, 160, 160);
  font-size: 0.875rem;
`;

const StepLabel = styled.p`
  font-size: 1rem;
  font-weight: 500;
  color: white;
`;

const StepTextContainer = styled.div``;

export default function Step({ id, label }) {
  const screenWidth = useContext(WindowContext);
  const { step } = useContext(GeneralContext);

  return (
    <StyledStepContainer>
      {step !== id ? (
        <StepNumber>{id}</StepNumber>
      ) : (
        <SelectedStepNumber>{id}</SelectedStepNumber>
      )}
      {screenWidth > 655 && (
        <StepTextContainer>
          <StepText>Step {id}</StepText>
          <StepLabel>{label}</StepLabel>
        </StepTextContainer>
      )}
    </StyledStepContainer>
  );
}
