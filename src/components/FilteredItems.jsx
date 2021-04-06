import React from "react";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import styled from "styled-components";
import {
  childrenToggle,
  menToggle,
  selectItems,
  womenToggle,
} from "../features/cart/cartSlice";
import ItemDisplay from "./ItemDisplay";
import ItemCarousel from "./ItemCarousel";

const Wrapper = styled.div`
  padding: 4em 0 4em 0;
`;

export default function FilteredItems() {
  const items = useSelector(selectItems);

  const menShow = useSelector(menToggle);

  const womenShow = useSelector(womenToggle);

  const childrenShow = useSelector(childrenToggle);

  const sampleItems = items.slice(0, 15).map((item) => {
    return <ItemDisplay key={item.name} item={item} />;
  });

  const sampleItemsWo = items.slice(16, 30).map((item) => {
    return <ItemDisplay key={item.name} item={item} />;
  });

  const sampleItemsCh = items.slice(31, 45).map((item) => {
    return <ItemDisplay key={item.name} item={item} />;
  });

  return (
    <Wrapper>
      <Container>
        {menShow && <ItemCarousel items={sampleItems} title="Men" />}
        {womenShow && <ItemCarousel items={sampleItemsWo} title="Women" />}
        {childrenShow && (
          <ItemCarousel items={sampleItemsCh} title="Children" />
        )}
        {!menShow && !womenShow && !childrenShow && <div>Nothing selected</div>}
      </Container>
    </Wrapper>
  );
}
