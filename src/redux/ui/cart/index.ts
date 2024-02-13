import { createSlice } from "@reduxjs/toolkit";

const initialState: Record<string, number> = {};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    increment: (state, { payload: productId }) => {
      state[productId] = (state[productId] || 0) + 1;
    },
    decrement: (state, { payload: productId }) => {
      if (!state[productId]) {
        return;
      }
      state[productId] = state[productId] - 1;
      if (state[productId] === 0) {
        delete state[productId];
      }
    },
  },
  selectors: {
    // state - состояние данного слайса
    selectProductAmountById: (state, productId) => {
      return state[productId] || 0;
    },
    selectTotalProductsAmount: (state) => {
      return Object.values(state).reduce((acc, amount) => acc + amount, 0);
    },
    selectCartProducIds: (state) => Object.keys(state), // TODO ❌ WARNING: this _always_ returns a new reference, so it will _always_ re-render!
  },
});

/* getSelectors - в state прилетает все состояние, в .selectors - кусочек слайса
тут кусочек слайса имеет вид  { cart: Record<string, number> } */
export const { selectProductAmountById } = cartSlice.selectors;
export const { selectTotalProductsAmount } = cartSlice.selectors;
export const { selectCartProducIds } = cartSlice.selectors;
export const { increment, decrement } = cartSlice.actions;
