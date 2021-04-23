import React from "react";
import { useDispatch } from "react-redux";
import { removeAt, changeQnt } from "../features/cart/cartSlice";
import { AiOutlineCloseCircle } from "react-icons/ai";
import styled from "styled-components";
import ColorPicker from "./ColorPicker";

const Wrapper = styled.div`
  display: flex;
  position: relative;
`;

const CloseButton = styled.div`
  transition: color 125ms ease-in-out;
  background-color: white;
  padding: 2px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: 100% 100% 100% 0;
  position: absolute;
  top: -1em;
  right: -1em;
  color: #868686;
  :hover {
    color: red;
  }
`;

const Card = styled.div`
  padding: 1em 2em;
  width: 100%;
  display: flex;
  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }
  /* align-items: center; */
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
`;

const Title = styled.div`
  font-size: 24px;
`;

const Image = styled.img`
  height: 15em;
  width: 10em;
  padding: 1em 0 1em 0;
  object-fit: cover;
  @media only screen and (max-width: 600px) {
    height: 100%;
    width: 100%;
  }
  transition: filter 225ms ease-in-out;
`;

const InformationArea = styled.div`
  margin: 1em 1em;
  flex-grow: 4;
`;

const PriceArea = styled.div`
  align-self: center;
  font-size: 1.5em;
  font-weight: bold;
  flex-grow: 1;
  padding: 0.5em 0;
`;

const ColorArea = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5em 0;
`;

const SizeArea = styled.div`
  padding: 0.5em 0;
`;

const QntArea = styled.div`
  align-self: center;
  margin: 1em 1em;
  flex-grow: 1;
`;

const IndividualPrice = styled.div`
  font-size: 16px;
  font-weight: lighter;
  position: absolute;
`;

export default function ItemCart({ item: data, index }, key) {
  const dispatch = useDispatch();
  var totalPrice = Number(
    data.item.value.replace(/[^0-9.-]+/g, "") * data.qnt
  ).toFixed(2);
  return (
    <Wrapper>
      <Card>
        <div>
          <Image src={data.item.image} alt="" />
        </div>
        <InformationArea>
          <Title>{data.item.name}</Title>
          <ColorArea>
            Cor : {data.color}
            <ColorPicker colors={[data.color]} handleColor={() => {}} />
          </ColorArea>
          <SizeArea>Size :{data.size}</SizeArea>
        </InformationArea>
        <QntArea>
          Quantity :
          <input
            type="number"
            name="test"
            value={data.qnt}
            min="1"
            id="test"
            style={{ margin: "0 0.5em", width: "5em" }}
            onChange={(value) =>
              dispatch(changeQnt([index, value.target.value]))
            }
          />
          <CloseButton onClick={() => dispatch(removeAt(index))}>
            <AiOutlineCloseCircle size={36} />
          </CloseButton>
        </QntArea>
        <PriceArea>
          Preço: {totalPrice}
          <br />
          {data.qnt > 1 && (
            <IndividualPrice>
              Preço individual : {data.item.value}
            </IndividualPrice>
          )}
        </PriceArea>
      </Card>
    </Wrapper>
  );
}
