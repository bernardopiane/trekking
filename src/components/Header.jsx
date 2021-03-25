import React from "react";
import { Container } from "react-bootstrap";
import styled, { keyframes } from "styled-components";
import Navbar from "./Navbar";
import { MdKeyboardArrowDown } from "react-icons/md";

const Wrapper = styled.div`
  background-image: url("/images/Livello 1.png");
  background-position: center;
  background-size: cover;
  min-height: 1000px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
`;

const Middle = styled(Container)`
  display: flex;
  flex-grow: 2;
`;

const Content = styled.div`
  color: white;
`;

const Title = styled.div`
  font-size: 3.75rem;
`;

const SubText = styled.div`
  font-size: 1.25rem;
`;

const float = keyframes`
  0% {
    transform: translatey(0px);
  }
  50% {
		transform: translatey(-10px);
  }
  100% {
    transform: translatey(0px);
  }
`;

const Bottom = styled.div`
  color: white;
  font-size: 6em;
  animation: ${float} 2s linear infinite;
`;

export default function Header() {
  return (
    <Wrapper>
      <Navbar />
      <Middle>
        <Content>
          <Title>Our clothing , your comfort</Title>
          <SubText>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores
            expedita voluptatibus fuga eligendi similique tempore rerum ad
            voluptatum aliquam quia? Enim, deleniti. Nihil perspiciatis in
            exercitationem, nulla suscipit quo dolorum.
          </SubText>
        </Content>
      </Middle>
      <Bottom>
        <MdKeyboardArrowDown />
      </Bottom>
    </Wrapper>
  );
}
