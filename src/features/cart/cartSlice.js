import { createSlice } from "@reduxjs/toolkit";
import { arr } from "../../dummy/Items";
class Item {
  constructor(name, image, value, description, size, colors) {
    this.name = name;
    this.image = image;
    this.value = value;
    this.description = description;
    this.size = size;
    this.colors = colors;
  }
}

const ItemsArray = arr.map((item) =>
  JSON.stringify(
    new Item(
      item.name,
      item.image,
      item.value,
      item.description,
      [item.size],
      [item.colors]
    )
  )
);

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    value: 0,
    items: ItemsArray,
    cart: [],
    //Fazer em array de bools ou remover e fazer direto por localstorage
    menFilter: localStorage.getItem("menFilter"),
    womenFilter: localStorage.getItem("womenFilter"),
    childrenFilter: localStorage.getItem("childrenFilter"),
  },
  reducers: {
    additem: (state, action) => {
      state.cart = [...state.cart, action.payload];
    },
    removeItem: (state, action) => {
      state.cart = state.cart.filter((item) => item !== action.payload);
    },
    removeAt: (state, action) => {
      state.cart = [
        ...state.cart.slice(0, action.payload),
        ...state.cart.slice(action.payload + 1),
      ];
    },

    toggleFilter: (state, action) => {
      if (action.payload === "men") {
        localStorage.setItem("menFilter", !state.menFilter);
        state.menFilter = !state.menFilter;
      }
      if (action.payload === "women") {
        localStorage.setItem("womenFilter", !state.womenFilter);
        state.womenFilter = !state.womenFilter;
      }
      if (action.payload === "children") {
        localStorage.setItem("childrenFilter", !state.childrenFilter);
        state.childrenFilter = !state.childrenFilter;
      }
    },

    setFilter: (state, action) => {
      if (action.payload === "men") {
        state.menFilter = true;
      }
      if (action.payload === "women") {
        state.womenFilter = true;
      }
      if (action.payload === "children") {
        state.childrenFilter = true;
      }
    },

    changeQnt: (state, action) => {
      const item = JSON.parse(state.cart[action.payload[0]]);
      // const item = JSON.parse(action.payload[0]);
      item.qnt = action.payload[1];

      state.cart[action.payload[0]] = JSON.stringify(item);
    },
  },
});

export const {
  additem,
  removeItem,
  toggleFilter,
  removeAt,
  setFilter,
  changeQnt,
} = cartSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectCart = (state) => state.cart.cart;

export const selectItems = (state) => state.cart.items;

export const menToggle = (state) => state.cart.menFilter;

export const womenToggle = (state) => state.cart.womenFilter;

export const childrenToggle = (state) => state.cart.childrenFilter;

export default cartSlice.reducer;
