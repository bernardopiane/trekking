import React from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: #aa9b77;
  padding: 4em 0 4em 0;
`;

const Fieldset = styled.fieldset`
  border: 1px solid #918363;
  text-align: center;
  padding: 6em 4em 6em 4em;
  color: #424242;
  font-size: 16px;
  font-weight: bold;
  display: flex;
  justify-content: center;
`;

const Legend = styled.legend`
  text-align: center;
  width: auto;
  padding: 0 1em 0 1em;
  margin-left: auto;
  margin-right: auto;
  font-size: 20px;
  color: #837659;
  text-transform: uppercase;
`;

const Text = styled.div`
  max-width: 45rem;
`;

export default function AboutUs() {
  return (
    <Wrapper>
      <Container>
        <Fieldset>
          <Legend>About Us</Legend>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
            qui earum aspernatur, ex odio accusamus repudiandae voluptatem
            doloribus illum magnam possimus eveniet. Magnam aspernatur qui natus
            dolores fuga quo neque.
          </Text>
        </Fieldset>
      </Container>
    </Wrapper>
  );
}
