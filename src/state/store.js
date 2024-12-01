import { configureStore } from '@reduxjs/toolkit';
import { merchReducer } from './merchSlice';
import { cartReducer } from './cartSlice';

export const store = configureStore({
  reducer: {
    items: merchReducer,
    cart: cartReducer,
  },
});
