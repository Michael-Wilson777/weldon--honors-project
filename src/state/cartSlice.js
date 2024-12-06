import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  cartCount: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemInCart = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      if (itemInCart) {
        state.cartCount += 1;
        state.totalPrice += action.payload.price;
        itemInCart.price += action.payload.price;
        itemInCart.qty += action.payload.qty;
      } else {
        state.cartItems.push(action.payload);
        state.totalPrice += action.payload.price;
        state.cartCount += 1;
      }
    },

    removeFromCart: (state, action) => {
      console.log(action.payload);
      if (action.payload.qty > 1) {
        state.cartItems.filter((item) => {
          if (item.id === action.payload.id) {
            item.qty -= 1;
            item.price = (action.payload.price / action.payload.qty) * item.qty;
            state.totalPrice -= action.payload.price - item.price;
            state.cartCount--;
          } else return;
        });
      } else {
        state.cartItems = state.cartItems.filter(
          (item) => item.id !== action.payload.id
        );
        state.totalPrice -= action.payload.price;
        state.cartCount -= action.payload.qty;
      }
    },
    clearCart: () => {
      return initialState;
    },
  },
});

export const cartReducer = cartSlice.reducer;
export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
