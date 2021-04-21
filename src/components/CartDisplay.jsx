import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { selectCart } from "../features/cart/cartSlice";
import CartBar from "./CartBar";
import ItemCart from "./ItemCart";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Spaccing = styled.div`
  padding-top: 6em;
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
      <div>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <div>
            <div>Cart List</div>
            {cartList}
          </div>
          {/* <div>
            <div>Item List</div>
            {itemList}
          </div> */}
        </div>
      </div>
      <Spaccing>
        <CartBar total={total} />
      </Spaccing>
    </Wrapper>
  );
}
