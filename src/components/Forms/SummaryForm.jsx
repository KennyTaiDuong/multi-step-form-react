import React, { useContext } from "react";
import styled from "styled-components";
import {
  Heading,
  Subheading,
  FormContainer,
  ContentSubtitle,
  ContentTitle,
} from "../../globalStyles";
import ServiceItem from "../ServiceItem";
import { GeneralContext } from "../../App";

const Container = styled.div`
  padding: 1rem;
  background: #f8f9fe;
`;

const ChangeBtn = styled.button`
  border: 0;
  background: 0;
  text-decoration: underline;
  color: hsl(231, 11%, 63%);
  font-weight: 500;

  &:hover {
    color: #4e46b3;
  }
`;

const PlanPrice = styled(ContentTitle)`
  font-weight: bold;
  color: hsl(213, 96%, 18%);
`;

const PlanPriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid rgba(217, 218, 222, 255);
`;

const TotalPrice = styled(PlanPrice)`
  color: #483eff;
  font-size: 1.25rem;
`;

const TotalContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1.5rem 1rem 0;
`;

export default function FinalForm() {
  const { setStep, userPlan } = useContext(GeneralContext);
  const { plan, price, frequency, service, storage, profile } = userPlan;

  function handleChange() {
    setStep(2);
  }

  const serviceFee = frequency === "mo" ? 1 : 10;
  const storageFee = frequency === "mo" ? 2 : 20;
  const profileFee = frequency === "mo" ? 2 : 20;
  const planFee = price ? parseInt(price) : 0;
  const totalFee =
    (service ? serviceFee : 0) +
    (storage ? storageFee : 0) +
    (profile ? profileFee : 0) +
    planFee;

  return (
    <FormContainer>
      <Heading>Finishing up</Heading>
      <Subheading>
        Double-check everything looks OK before confirming.
      </Subheading>
      <Container>
        <ContentTitle color={"hsl(213, 96%, 18%)"}>
          {`${plan}`
            ? `${plan} (${frequency === "mo" ? "Monthly" : "Yearly"})`
            : `No plan selected`}
        </ContentTitle>
        <PlanPriceContainer>
          <ChangeBtn onClick={handleChange}>Change</ChangeBtn>
          <PlanPrice>
            {price ? `$${price}/${frequency}` : `$0/${frequency}`}
          </PlanPrice>
        </PlanPriceContainer>
        {service && (
          <ServiceItem
            service={"Online service"}
            price={serviceFee}
            frequency={frequency}
          />
        )}
        {storage && (
          <ServiceItem
            service={"Larger storage"}
            price={storageFee}
            frequency={frequency}
          />
        )}
        {profile && (
          <ServiceItem
            service={"Customizable profile"}
            price={profileFee}
            frequency={frequency}
          />
        )}
      </Container>
      <TotalContainer>
        <ContentSubtitle size={"1rem"}>
          Total (per {frequency === "mo" ? "month" : "year"})
        </ContentSubtitle>
        <TotalPrice>
          +${totalFee}/{frequency}
        </TotalPrice>
      </TotalContainer>
    </FormContainer>
  );
}
