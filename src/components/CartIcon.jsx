import React from "react";
import { useSelector } from "react-redux";
import { selectCart } from "../features/cart/cartSlice";
import { MdShoppingCart } from "react-icons/md";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Counter = styled.div`
  position: absolute;
  top: -10px;
  right: -10px;
`;

const Wrapper = styled.div`
  position: relative;
  cursor: pointer;
`;

const MyLink = styled(Link)`
  color: white;
  transition: color 125ms ease-in-out;
  :hover{
    color: #b8b8b8;
  }
`;

export default function CartIcon() {
  const cart = useSelector(selectCart);

  return (
    <Wrapper>
      <MyLink to="/cart">
        <MdShoppingCart size="1.5em" />
        <Counter>{cart.length > 0 ? cart.length : ""}</Counter>
      </MyLink>
    </Wrapper>
  );
}
