import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../images/Livello 8.png";
import CartIcon from "./CartIcon";

const Wrapper = styled.div`
  padding: 2em 1em 2em 1em;
  background-color: ${(props) => props.bgColor || "transparent"};
  flex-grow: 1;

  @media only screen and (min-width: 800px) {
    padding: 3em 10em 3em 10em;
  }
`;

const LinkSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  & > a,
  & > div {
    color: white;
    margin: 0 0 0 3em;
  }
`;

export default function Navbar({ hasBG }) {
  return (
    <Wrapper bgColor={hasBG}>
      <Container
        fluid
        className="d-flex justify-content-between align-content-center"
      >
        <>
          <img src={logo} alt="" />
        </>
        <LinkSection>
          <Link to="/">Home</Link>
          <a href="#!">Products</a>
          <CartIcon />
        </LinkSection>
      </Container>
    </Wrapper>
  );
}
