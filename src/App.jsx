import React, { createContext, useEffect, useState } from "react";
import Global from "./globalStyles";
import styled from "styled-components";
import Sidebar from "./components/Sidebar";
import UserForm from "./components/Forms/UserForm";
import PlanForm from "./components/Forms/PlanForm";
import AddOnForm from "./components/Forms/AddOnForm";
import SummaryForm from "./components/Forms/SummaryForm";
import ThankYou from "./components/Forms/ThankYou";
import Buttons from "./components/Buttons";
import { FormContainer } from "./globalStyles";

const Container = styled.div`
  height: 100%;
  width: 100%;
  background: rgba(237, 244, 254, 255);
  position: fixed;
  display: flex;
  flex-direction: column;
`;

const Modal = styled.div`
  width: 90%;
  max-width: 960px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  border-radius: 10px;
  padding: 1rem;

  @media (min-width: 655px) {
    display: flex;
  }
`;

export const WindowContext = createContext();
export const GeneralContext = createContext();

const App = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [step, setStep] = useState(1);
  const [userPlan, setUserPlan] = useState({
    plan: "",
    price: "",
    frequency: "mo",
    service: false,
    storage: false,
    profile: false,
  });
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    number: "",
  });
  const [formValid, setFormValid] = useState({
    nameValid: false,
    emailValid: false,
    numberValid: false,
  });

  const CurrentStep =
    step === 1 ? (
      <UserForm />
    ) : step === 2 ? (
      <PlanForm />
    ) : step === 3 ? (
      <AddOnForm />
    ) : step === 4 ? (
      <SummaryForm />
    ) : step === 5 ? (
      <ThankYou />
    ) : null;

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, [windowWidth]);

  return (
    <WindowContext.Provider value={windowWidth}>
      <Container>
        <Global />
        <GeneralContext.Provider
          value={{
            userPlan,
            setUserPlan,
            step,
            setStep,
            userInfo,
            setUserInfo,
            formValid,
            setFormValid,
          }}
        >
          {windowWidth < 655 ? (
            <>
              <Sidebar />
              <Modal>{CurrentStep}</Modal>
              <Buttons />
            </>
          ) : (
            <Modal>
              <Sidebar />
              <FormContainer>
                {CurrentStep}
                <Buttons />
              </FormContainer>
            </Modal>
          )}
        </GeneralContext.Provider>
      </Container>
    </WindowContext.Provider>
  );
};

export default App;
