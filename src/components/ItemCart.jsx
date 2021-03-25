import React from "react";
import { useDispatch } from "react-redux";
import { removeItem } from "../features/cart/cartSlice";

export default function ItemCart({ item }, key) {
  const dispatch = useDispatch();
  return (
    <div>
      {item.name} - {item.value}
      <button onClick={() => dispatch(removeItem(item))}>Remove</button>
    </div>
  );
}
