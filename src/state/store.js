import { configureStore } from '@reduxjs/toolkit';
import { merchReducer } from './merchSlice';
import { cartReducer } from './cartSlice';
import { messagesReducer } from './messageSlice';

export const store = configureStore({
  reducer: {
    items: merchReducer,
    cart: cartReducer,
    messages: messagesReducer
  },
});
