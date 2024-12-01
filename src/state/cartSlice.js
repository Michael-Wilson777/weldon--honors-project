import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  cartCount: 0,
  price: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.items.push(action.payload);
      state.cartCount += 1;

      console.log(state.cartCount);
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
      state.cartCount -= 1;
    },
    clearCart: () => {
      return initialState;
    },
  },
});

export const cartReducer = cartSlice.reducer;
export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
