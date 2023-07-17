import React from "react";
import styled from "styled-components";
import { ContentSubtitle, ContentTitle } from "../globalStyles";

const ItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 0.75rem;
`;

const Item = styled(ContentSubtitle)``;
const Price = styled(ContentTitle)`
  color: hsl(213, 96%, 18%);
`;

export default function ServiceItem({ service, price, frequency }) {
  return (
    <ItemContainer>
      <Item>{service}</Item>
      <Price>
        +${price}/{frequency}
      </Price>
    </ItemContainer>
  );
}
