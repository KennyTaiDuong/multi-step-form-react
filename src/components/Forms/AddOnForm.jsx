import React, { useContext } from "react";
import styled from "styled-components";
import { Heading, Subheading, Form, FormContainer } from "../../globalStyles";
import AddOns from "../AddOns";
import { GeneralContext } from "../../App";

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export default function AddOnForm() {
  const { userPlan } = useContext(GeneralContext);
  const { frequency, service, storage, profile } = userPlan;

  return (
    <FormContainer>
      <Heading>Pick add-ons</Heading>
      <Subheading>Add-ons help enhance your gaming experience.</Subheading>
      <StyledForm>
        <AddOns
          title="Online service"
          subtitle="Access to multiplayer games"
          price={frequency === "mo" ? 1 : 10}
          frequency={frequency}
          id="service"
          isSelected={service}
        />
        <AddOns
          title="Larger storage"
          subtitle="Extra 1TB of cloud save"
          price={frequency === "mo" ? 2 : 20}
          frequency={frequency}
          id="storage"
          isSelected={storage}
        />
        <AddOns
          title="Customizable profile"
          subtitle="Custom theme on your profile"
          price={frequency === "mo" ? 2 : 20}
          frequency={frequency}
          id="profile"
          isSelected={profile}
        />
      </StyledForm>
    </FormContainer>
  );
}
