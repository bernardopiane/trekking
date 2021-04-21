import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 2em 10em 2em 10em;
  flex-grow: 1;
  display: flex;
  position: fixed;
  bottom: 0;
  background-color: red;
  width: 100%;
`;

export default function CartBar({ total }) {
  return <Wrapper>{total.toFixed(2)}</Wrapper>;
}
