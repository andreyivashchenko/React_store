import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalPrice: 0,
  totalCount: 0,
};

const findItem = (state, obj) => {
  return state.items.find(
    (item) =>
      item.id === obj.id &&
      item.color === obj.color &&
      item.storage === obj.storage
  );
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const foundItem = findItem(state, action.payload);
      if (foundItem) {
        foundItem.count++;
      } else {
        state.items.push({ ...action.payload, count: 1 });
      }
      state.totalPrice = state.items.reduce((sum, obj) => {
        return obj.price * obj.count + sum;
      }, 0);
      state.totalCount = state.items.reduce((sum, obj) => {
        return obj.count + sum;
      }, 0);
    },
    removeItem: (state, action) => {},
    increment: (state, action) => {},
    decrement: (state, action) => {
      const foundItem = findItem(state, action.payload);
      if (foundItem && foundItem.count > 0) {
        foundItem.count--;
        state.totalCount--;
        state.totalPrice = state.totalPrice - foundItem.price;
      }
    },
  },
});

export const { decrement, increment, removeItem, addItem } = cartSlice.actions;

export default cartSlice.reducer;
