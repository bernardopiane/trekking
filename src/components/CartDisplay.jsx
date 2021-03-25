import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  additem,
  removeItem,
  selectCart,
  selectItems,
} from "../features/cart/cartSlice";
import ItemCart from "./ItemCart";

export default function CartDisplay() {
  const cart = useSelector(selectCart);
  const items = useSelector(selectItems);
  const dispatch = useDispatch();

  const itemList = items.map((item) => (
    <div key={item.name}>
      {item.name}
      {cart.includes(item) ? (
        <button onClick={() => dispatch(removeItem(item))}>Remove</button>
      ) : (
        <button onClick={() => dispatch(additem(item))}>Add</button>
      )}
    </div>
  ));

  const cartList = cart.map(
    (item) => {
      console.log(item);
      return <ItemCart item={item} key={item.name} />;
    }
    // <div key={item.name}>
    //   <div>{item.name}</div>
    //   <div>{item.value}</div>
    //   <button onClick={() => dispatch(removeItem(item))}>Remove</button>
    // </div>
  );

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
