import React from "react";
import styled from "styled-components";
import ColorPicker from "./ColorPicker";
import SizePicker from "./SizePicker";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 30em;
  width: 95%;
  padding: 1em;
  border: transparent 3px solid;
  transition: all 125ms ease-in-out;
  border-radius: 3px;
  background-color: #f5f6f7;
  :hover {
    border: #aa9b77 3px solid;
  }
  :focus {
    border: #aa9b77 3px solid;
  }
  :active {
    border: #aa9b77 3px solid;
  }
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
  padding: 1em 0 1em 0;
  object-fit: cover;
`;

const Value = styled.div`
  font-size: 22px;
  color: #424242;
`;

const Type = styled.div`
  font-size: 18px;
  color: #aa9b77;
`;

export default function ItemDisplay({ item }) {
  return (
    <Wrapper>
      <Row>
        <SizePicker />
        <ColorPicker colors={["red", "green", "blue"]} />
      </Row>
      <Image src={item.image} />
      <Row>
        <Type>Type</Type>
        <Value>{item.value}</Value>
      </Row>
    </Wrapper>
  );
}
