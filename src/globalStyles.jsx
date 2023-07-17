import styled, { createGlobalStyle } from "styled-components";
import React from "react";

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Ubuntu', sans-serif;
    }

    body {
        width: 100vw;
        height: 100vh;
    }

    html {
        height: 100%;
    }

    button, label {
      cursor: pointer;
    }

`;

export const Heading = styled.h2`
  color: hsl(213, 96%, 18%);
  margin-bottom: 1rem;
  font-size: ${({ size }) => size};
`;

export const Subheading = styled.h4`
  color: rgb(160, 160, 160);
  font-weight: 400;
  font-size: 1rem;
  margin-bottom: 1.5rem;
  line-height: 1.5;
  padding: ${({ padding }) => padding};
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: auto;
  padding: 0.5rem;

  @media (min-width: 655px) {
    margin-right: auto;
    width: 100%;
    max-width: 500px;
    padding: ${({ padding }) => padding};
  }
`;

export const ContentTitle = styled.p`
  color: ${({ color }) => color};
  font-weight: 500;
  margin-bottom: 0.35rem;
  font-size: ${({ size }) => size};
`;

export const ContentSubtitle = styled.p`
  color: hsl(231, 11%, 63%);
  font-size: ${({ size }) => size};
`;

export default function Global() {
  return <GlobalStyle />;
}
