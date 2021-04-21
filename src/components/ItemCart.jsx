import React from "react";
import { useDispatch } from "react-redux";
import { removeAt, changeQnt } from "../features/cart/cartSlice";

export default function ItemCart({ item: data, index }, key) {
  const dispatch = useDispatch();
  return (
    <div>
      {data.item.name} - {data.item.value} / Cor : {data.color} / Size :
      {data.size} / Quantity :
      <input
        type="number"
        name="test"
        value={data.qnt}
        min="1"
        id="test'"
        style={{ margin: "0 0.5em", width: "5em" }}
        onChange={
          // dispatch(changeQnt(index, 1))
          (value) => dispatch(changeQnt([index, value.target.value]))
          // (value) => console.log(value.target.value, index)
          // dispatch(changeQnt(index, value.target.value))
        }
      />
      <button onClick={() => dispatch(removeAt(index))}>Remove</button>
    </div>
  );
}
