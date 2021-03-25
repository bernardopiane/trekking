import React from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import { AiOutlineTwitter } from "react-icons/ai";
const Wrapper = styled.div`
  background-color: #535253;
  padding: 1em 0 1em 0;
  color: white;
`;

const Icon = styled.div`
  color: #424242;
  display: flex;
  font-size: 4em;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
`;

const Text = styled.div`
  padding-left: 2em;
  font-size: 2em;
`;

export default function TwitterBar() {
  return (
    <Wrapper>
      <Container>
        <Content>
          <Icon>
            <AiOutlineTwitter />
          </Icon>
          <Text>“ E-commerce psd theme available ” </Text>
        </Content>
      </Container>
    </Wrapper>
  );
}
