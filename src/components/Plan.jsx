import React, { useContext } from "react";
import styled from "styled-components";
import { ContentSubtitle, ContentTitle } from "../globalStyles";
import { GeneralContext } from "../App";

const PlanContainer = styled.div`
  width: 100%;
  border: 1px solid ${({ bc }) => bc};
  border-radius: 5px;
  padding: 1rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
  cursor: pointer;
  background: ${({ bg }) => bg};

  @media (min-width: 655px) {
    flex-direction: column;
    align-items: start;
    gap: 3rem;
  }
`;

const PlanIcon = styled.img`
  border-radius: 50%;
`;

const StyledSubtitle = styled(ContentTitle)`
  font-size: 0.75rem;
  font-weight: 400;
  margin-bottom: 0;
  margin-top: 0.25rem;
`;

export default function Plan({ type, price, source }) {
  const { userPlan, setUserPlan } = useContext(GeneralContext);
  const { plan, frequency } = userPlan;

  function handleClick(event) {
    setUserPlan((prevState) => {
      return {
        ...prevState,
        plan: event.target.id,
        price: price.split("/")[0],
        frequency: price.split("/")[1],
      };
    });
  }

  return (
    <PlanContainer
      bc={plan === type ? "#59549c" : "#e5e5e6"}
      bg={plan === type ? "#f8f9fe" : "white"}
      id={type}
      onClick={handleClick}
    >
      <PlanIcon id={type} src={source} />
      <div>
        <ContentTitle color={"hsl(213, 96%, 18%)"} id={type}>
          {type}
        </ContentTitle>
        <ContentSubtitle id={type}>${price}</ContentSubtitle>
        {frequency === "yr" ? (
          <StyledSubtitle>2 months free</StyledSubtitle>
        ) : null}
      </div>
    </PlanContainer>
  );
}
