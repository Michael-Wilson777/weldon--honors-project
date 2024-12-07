import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  messagesArray: [],
  message: "",
};

const messageSlice = createSlice({
  name: "messages",
  initialState,
  reducers: {
    addMessage: (state, action) => {
        console.log(action.payload)
      state.messagesArray.push(action.payload);
    },
  },
});

export const messagesReducer = messageSlice.reducer;
export const { addMessage } = messageSlice.actions;
export const selectAllMessages = (state) => state.messages.messagesArray;
