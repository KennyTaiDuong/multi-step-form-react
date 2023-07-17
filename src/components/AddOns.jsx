import React, { useContext } from "react";
import styled from "styled-components";
import { ContentSubtitle, ContentTitle } from "../globalStyles";
import { GeneralContext } from "../App";

const AddOnsLabel = styled.label`
  border-radius: 5px;
  width: 100%;
  border: 1px solid ${({ bc }) => bc};
  background: ${({ bg }) => bg};
  padding: 1rem;
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Checkbox = styled.input`
  width: 16px;
  height: 16px;
`;

const AddOnPrice = styled.p`
  color: hsl(243, 100%, 62%);
  font-size: 0.75rem;
  margin-left: auto;
  font-weight: 500;
`;

export default function AddOns({
  title,
  subtitle,
  price,
  frequency,
  id,
  isSelected,
}) {
  const { userPlan, setUserPlan } = useContext(GeneralContext);
  const { service, storage, profile } = userPlan;

  function handleClick() {
    setUserPlan((prevState) => {
      return {
        ...prevState,
        [id]:
          id === "service"
            ? !service
            : id === "storage"
            ? !storage
            : id === "profile"
            ? !profile
            : null,
      };
    });
  }

  return (
    <AddOnsLabel
      bc={isSelected ? "#59549c" : "#e5e5e6"}
      onChange={() => handleClick()}
    >
      <Checkbox type="checkbox" defaultChecked={isSelected} />
      <TitleContainer>
        <ContentTitle size={"0.875rem"} color="hsl(213, 96%, 18%)">
          {title}
        </ContentTitle>
        <ContentSubtitle size={"0.75rem"}>{subtitle}</ContentSubtitle>
      </TitleContainer>
      <AddOnPrice>
        +${price}/{frequency}
      </AddOnPrice>
    </AddOnsLabel>
  );
}
