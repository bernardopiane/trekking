import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { additem, selectCart } from "../features/cart/cartSlice";
import ColorPicker from "./ColorPicker";
import SizePicker from "./SizePicker";
import { BsPlusCircle, BsCheckCircle } from "react-icons/bs";
import Lottie from "react-lottie";
import animationData from "../animation/56807-favorite.json";

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

//TODO acertar cores da fundo, local do icone

const Favorite = styled.div`
  /* position: absolute; */
  /* top: 50px; */
  /* right: -5px; */
  background-color: rgba(0, 0, 0, 0.137);
  /* border-radius: 100%; */
  /* z-index: 100; */
`;

export default function ItemDisplay({ item }) {
  const dispatch = useDispatch(additem);
  const cart = useSelector(selectCart);
  const [size, setSize] = useState(item.size[0]);
  const [color, setColor] = useState(item.colors[0]);
  const [bought, setBought] = useState(false);

  function handleSize(value) {
    setSize(value);
  }

  function handleColor(value) {
    setColor(value);
  }

  const prepedItem = {
    item: item,
    size: size,
    color: color,
    qnt: 1,
  };

  const defaultOptions = {
    loop: false,
    autoplay: false,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const [Favorited, setFavorited] = useState(true);

  return (
    <Wrapper>
      <AddToCartArea>
        {cart.includes(JSON.stringify(prepedItem)) ? (
          <AddToCartBtn>
            <BsCheckCircle size={48} color="green" />
          </AddToCartBtn>
        ) : (
          <AddToCartBtn
            onClick={() => {
              dispatch(additem(JSON.stringify(prepedItem)));
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
        <Favorite onClick={() => setFavorited(!Favorited)}>
          <Lottie
            height={50}
            width={50}
            options={defaultOptions}
            isStopped={Favorited}
          />
        </Favorite>

        <Value>{item.value}</Value>
      </Row>
    </Wrapper>
  );
}
