import React from "react";
import { useDispatch } from "react-redux";
import { removeAt } from "../features/cart/cartSlice";

export default function ItemCart({ item, index }, key) {
  const dispatch = useDispatch();
  return (
    <div>
      {item.name} - {item.value}
      <button onClick={() => dispatch(removeAt(index))}>Remove</button>
    </div>
  );
}
