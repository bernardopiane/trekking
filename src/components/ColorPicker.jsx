import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
`;

const ColorBtn = styled.div`
  height: 20px;
  width: 20px;
  background-color: ${(props) => props.color};
  border-radius: 100%;
  margin: 0 0.25rem 0 0.25rem;
  cursor: pointer;
`;

export default function ColorPicker({ colors, handleColor }) {
  function setColor(value) {
    handleColor(value);
  }

  const buildBtn = colors.map((color) => (
    <ColorBtn
      key={color}
      color={color}
      onClick={(color) => {
        setColor(color);
      }}
    />
  ));

  return <Wrapper>{buildBtn}</Wrapper>;
}
