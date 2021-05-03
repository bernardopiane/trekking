import React from "react";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { selectItems } from "../features/cart/cartSlice";
import ItemDisplay from "./ItemDisplay";

const Wrapper = styled(Container)`
  padding-top: 4em;
  padding-bottom: 4em;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
`;

//TODO paginação

export default function AllProducts() {
  const items = useSelector(selectItems);

  const itemList = items.map((data, index) => {
    const item = JSON.parse(data);
    //TODO Filter based on active selector from store
    return <ItemDisplay key={item.name} item={item} />;
  });

  return <Wrapper>{itemList}</Wrapper>;
}
