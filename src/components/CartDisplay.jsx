import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { additem, selectCart, selectItems } from "../features/cart/cartSlice";
import ItemCart from "./ItemCart";

export default function CartDisplay() {
  const cart = useSelector(selectCart);
  const items = useSelector(selectItems);
  const dispatch = useDispatch();

  const itemList = items.map((data, index) => {
    const item = JSON.parse(data);
    return (
      <div key={item.name}>
        {item.name}
        <button onClick={() => dispatch(additem(JSON.stringify(item)))}>
          Add
        </button>
      </div>
    );
  });

  const cartList = cart.map((data, index) => {
    const item = JSON.parse(data);
    return <ItemCart item={item} key={index} index={index} />;
  });

  return (
    <div>
      <div>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <div>
            <div>Cart List</div>
            {cartList}
          </div>
          <div>
            <div>Item List</div>
            {itemList}
          </div>
        </div>
      </div>
    </div>
  );
}
