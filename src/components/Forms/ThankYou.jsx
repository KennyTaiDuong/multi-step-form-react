import React from "react";
import styled from "styled-components";
import ThankYouIcon from "../../assets/images/icon-thank-you.svg";
import { Heading, Subheading, FormContainer } from "../../globalStyles";

const StyledFormContainer = styled(FormContainer)`
  padding: 4rem 0;
  text-align: ${({ textalign }) => textalign};
`;

const ThankYouLogo = styled.img`
  width: 50px;
  margin: 0 auto 1rem;
`;

export default function ThankYou() {
  return (
    <StyledFormContainer textalign="center">
      <ThankYouLogo src={ThankYouIcon} />
      <Heading>Thank you!</Heading>
      <Subheading padding="0 1rem">
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </Subheading>
    </StyledFormContainer>
  );
}
