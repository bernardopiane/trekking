import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { additem } from "../features/cart/cartSlice";
import ColorPicker from "./ColorPicker";
import SizePicker from "./SizePicker";
import { BsPlusCircle, BsCheckCircle } from "react-icons/bs";

const AddToCartArea = styled.div`
  position: absolute;
  height: 0;
  width: 0;
  top: 0;
  right: 0;
  z-index: -1;
  display: none;
  transition: all 225ms ease-in-out;
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
  padding: 1em 0 1em 0;
  object-fit: cover;
  transition: filter 225ms ease-in-out;
`;

const Wrapper = styled.div`
  position: relative;
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
  :hover > ${Image} {
    filter: grayscale(50%);
  }
  :hover > ${AddToCartArea} {
    height: 100%;
    width: 100%;
    z-index: 2;
    display: flex;
    justify-content: center;
    align-items: center;
    pointer-events: none;
  }
  //Consertar não poder clicar em baixo
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

const Value = styled.div`
  font-size: 22px;
  color: #424242;
`;

const Type = styled.div`
  font-size: 18px;
  color: #aa9b77;
`;

const AddToCartBtn = styled.div`
  pointer-events: initial;
  /* background-color: #c4c4c4; */
  border-radius: 100%;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 45px;
  width: 45px;
`;

export default function ItemDisplay({ item }) {
  const dispatch = useDispatch(additem);
  const [size, setSize] = useState(item.size[0]);
  const [color, setColor] = useState(item.colors[0]);
  const [bought, setBought] = useState(false);

  function handleSize(value) {
    setSize(value);
  }

  function handleColor(value) {
    setColor(value);
  }

  return (
    <Wrapper>
      <AddToCartArea>
        {bought ? (
          <AddToCartBtn>
            <BsCheckCircle size={48} color="green" />
          </AddToCartBtn>
        ) : (
          <AddToCartBtn
            onClick={() => {
              dispatch(additem(JSON.stringify(item)));
              setBought(!bought);
            }}
          >
            <BsPlusCircle size={32} />
          </AddToCartBtn>
        )}
      </AddToCartArea>

      <Row>
        <SizePicker sizes={item.size} handleSize={handleSize} />
        {/* <ColorPicker colors={["red", "green", "blue"]} /> */}
        <ColorPicker colors={[item.colors]} handleColor={handleColor} />
      </Row>
      <Image src={item.image} />
      <Row>
        {/* <Type>Type</Type> */}
        <Type onClick={() => console.log(size, color)}>Type</Type>
        <Value>{item.value}</Value>
      </Row>
    </Wrapper>
  );
}
