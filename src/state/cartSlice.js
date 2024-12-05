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
      const itemInCart = state.cartItems.find((item) => item);
      if (itemInCart) {
        state.cartCount += 1;
        state.totalPrice += action.payload.price;
        itemInCart.price += action.payload.price;
        itemInCart.qty += action.payload.qty;
        console.log(state.totalPrice);
      } else {
        state.cartItems.push(action.payload);
        state.totalPrice += action.payload.price;
        state.cartCount += 1;
      }
    },
    //     addToCart: (state, action) => {
    // //Need to find a way to add to the quantity and not duplicate an item that is already there
    // const itemInCart =  state.items.find(
    //   (item) => item.id === action.payload.id
    // );
    // if (itemInCart) {
    //   const totalPrice = itemInCart.price + action.payload.price;
    //   itemInCart.quantity++;
    //   itemInCart.price = totalPrice;

    //   return;
    // } else {
    //   state.items.push(action.payload);
    // }

    //       state.cartCount += 1;
    //       state.price += action.payload.price;

    //       console.log(action.payload.price);
    //       console.log(state.cartCount);
    //       console.log(state.price);
    //    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
    },
    clearCart: () => {
      return initialState;
    },
  },
});

export const cartReducer = cartSlice.reducer;
export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
