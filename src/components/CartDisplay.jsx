import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { selectCart } from "../features/cart/cartSlice";
import CartBar from "./CartBar";
import ItemCart from "./ItemCart";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 4em 0 4em 0;
`;

const Spaccing = styled.div`
  padding-top: 6em;
`;

const GridArea = styled.div`
  display: grid;
  /* grid-template-columns: repeat(auto-fill, minmax(450px, 1fr)); */
  align-items: center;
  grid-gap: 2em 1em;
`;

const EmptyArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export default function CartDisplay() {
  const cart = useSelector(selectCart);
  // const items = useSelector(selectItems);
  // const dispatch = useDispatch();
  var valorTotal = 0.0;
  const [total, setTotal] = useState(0.0);

  // const itemList = items.map((data, index) => {
  //   const item = JSON.parse(data);
  //   return (
  //     <div key={item.name}>
  //       {item.name}
  //       <button onClick={() => dispatch(additem(JSON.stringify(item)))}>
  //         Add
  //       </button>
  //     </div>
  //   );
  // });

  const cartList = cart.map((data, index) => {
    const item = JSON.parse(data);
    var valor = item.item.value;
    var number = Number(valor.replace(/[^0-9.-]+/g, ""));
    valorTotal = number * item.qnt + valorTotal;

    return <ItemCart item={item} key={index} index={index} />;
  });

  useEffect(() => {
    setTotal(valorTotal);
  }, [valorTotal]);

  return (
    <Wrapper>
      <Container>
        {cartList.length >= 1 ? (
          <GridArea>{cartList}</GridArea>
        ) : (
          <EmptyArea>
            <AiOutlineShoppingCart size={128} />
          </EmptyArea>
        )}
      </Container>
      <Spaccing>
        <CartBar total={total} />
      </Spaccing>
    </Wrapper>
  );
}
