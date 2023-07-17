import React from "react";
import styled from "styled-components";
import bgDesktop from "../assets/images/bg-sidebar-desktop.svg";
import bgMobile from "../assets/images/bg-sidebar-mobile.svg";
import Step from "./Step";

const Background = styled.div`
  background: url(${bgMobile});
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  width: 100%;
  justify-content: center;
  gap: 1rem;
  padding: 2rem 2rem 5rem;

  @media (min-width: 655px) {
    background: url(${bgDesktop}) no-repeat;
    border-radius: 10px;
    flex-direction: column;
    gap: 0.5rem;
    max-width: 274px;
    min-height: 568px;
    justify-content: start;
  }
`;

export default function Sidebar() {
  return (
    <Background>
      <Step id={1} label="YOUR INFO" />
      <Step id={2} label="SELECT PLAN" />
      <Step id={3} label="ADD-ONS" />
      <Step id={4} label="SUMMARY" />
    </Background>
  );
}
