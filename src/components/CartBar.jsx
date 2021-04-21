import React from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 2em 10em 2em 10em;
  flex-grow: 1;
  display: flex;
  position: fixed;
  bottom: 0;
  background-color: #ccc;
  box-shadow: 0 0 3em 10px #e9e9e9;
  width: 100%;
  justify-content: end;
`;

const TotalDisplay = styled.div`
  display: flex;
  justify-content: end;
`;

export default function CartBar({ total }) {
  return (
    <Wrapper>
      <Container>
        <TotalDisplay>Total: {total.toFixed(2)}</TotalDisplay>
        <button>Checkout</button>
      </Container>
    </Wrapper>
  );
}
