import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [
    {
      id: 0,
      name: "welding jacket",
      category: "weld protection",
      qty: 1,
      img: "https://sp.yimg.com/ib/th?id=OPHS.ukyh%2b8elqAw3hg474C474&o=5&pid=21.1&w=160&h=105",
      price: 25,
      review: "",
      description: "",
    },
    {
      id: 1,
      name: "weld gage",
      category: "hand tools",
      qty: 1,
      img: "https://sp.yimg.com/ib/th?id=OPHS.lEIIQptPgbf%2bcQ474C474&o=5&pid=21.1&w=160&h=105",
      price: 10,
      review: "",
      description: "",
    },
    {
      id: 2,
      name: "chipping hammer",
      category: "hand tools",
      qty: 1,
      img: "https://sp.yimg.com/ib/th?id=OPHS.63qvMp0%2fUE1%2bIA474C474&o=5&pid=21.1&w=160&h=105",
      price: 12,
      review: "",
      description: "",
    },
  ],
};

const merchSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    deleteItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});

export const merchReducer = merchSlice.reducer;
export const { addItem, deleteItem } = merchSlice.actions;
