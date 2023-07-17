import React, { useContext, useState } from "react";
import styled from "styled-components";
import { Heading, Subheading, FormContainer } from "../../globalStyles";
import Plan from "../Plan";
import ArcadeIcon from "../../assets/images/icon-arcade.svg";
import AdvancedIcon from "../../assets/images/icon-advanced.svg";
import ProIcon from "../../assets/images/icon-pro.svg";
import Switch from "../Switch";
import { GeneralContext } from "../../App";

const SwitchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
`;

const StyledSubheading = styled(Subheading)`
  margin: 0;
  font-weight: 500;
  color: ${({ color }) => color};
`;

const Container = styled.div`
  @media (min-width: 655px) {
    display: flex;
    gap: 1rem;
    padding: 1rem 0;
  }
`;

export default function PlanForm() {
  const { userPlan, setUserPlan } = useContext(GeneralContext);
  const { frequency } = userPlan;

  function handleSwitch() {
    setUserPlan((prevState) => {
      return {
        ...prevState,
        frequency: `${frequency === "mo" ? "yr" : "mo"}`,
        price: `${
          frequency === "mo"
            ? parseInt(prevState.price) * 10
            : parseInt(prevState.price) / 10
        }`,
      };
    });
  }

  return (
    <FormContainer>
      <Heading>Select your plan</Heading>
      <Subheading>You have the option of monthly or yearly billing.</Subheading>
      <Container>
        <Plan
          type="Arcade"
          price={frequency === "mo" ? "9/mo" : "90/yr"}
          source={ArcadeIcon}
        />
        <Plan
          type="Advanced"
          price={frequency === "mo" ? "12/mo" : "120/yr"}
          source={AdvancedIcon}
        />
        <Plan
          type="Pro"
          price={frequency === "mo" ? "15/mo" : "150/yr"}
          source={ProIcon}
        />
      </Container>
      <SwitchContainer>
        <StyledSubheading
          color={
            frequency === "mo" ? "hsl(213, 96%, 18%)" : "rgb(160, 160, 160)"
          }
        >
          Monthly
        </StyledSubheading>
        <Switch handleSwitch={() => handleSwitch()} />
        <StyledSubheading
          color={
            frequency === "yr" ? "hsl(213, 96%, 18%)" : "rgb(160, 160, 160)"
          }
        >
          Yearly
        </StyledSubheading>
      </SwitchContainer>
    </FormContainer>
  );
}
