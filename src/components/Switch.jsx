import React, { useContext } from "react";
import styled from "styled-components";
import { GeneralContext } from "../App";

const StyledLabel = styled.label`
  position: relative;
  display: inline-block;
  width: 40px;
  height: 20px;
`;

const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: hsl(213, 96%, 18%);
  transition: 0.4s;
  border-radius: 34px;

  &:before {
    position: absolute;
    content: "";
    width: 12px;
    height: 12px;
    left: 4px;
    bottom: 4px;
    border-radius: 50%;
    background-color: white;
    transition: 0.4s;
  }
`;

const StyledCheckbox = styled.input`
  display: none;

  &:checked + ${Slider} {
    &:before {
      transform: translateX(20px);
    }
  }
`;

export default function Switch({ handleSwitch }) {
  const { userPlan } = useContext(GeneralContext);
  const { frequency } = userPlan;

  return (
    <StyledLabel>
      <StyledCheckbox
        type="checkbox"
        defaultChecked={frequency === "mo" ? false : true}
        onClick={handleSwitch}
      />
      <Slider />
    </StyledLabel>
  );
}
