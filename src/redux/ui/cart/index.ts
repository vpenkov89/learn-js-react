import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface ICartPayload {
  restaurantId: string;
  dishId: string;
}

export interface SetAmountParams {
  restaurantId: string;
  dishId: string;
  amount: number;
}
// Record<restaurantId, Record<dishId, amount>>
const initialState: Record<string, Record<string, number>> = {};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setAmount: (state, action: PayloadAction<SetAmountParams>) => {
      const { restaurantId, dishId, amount } = action.payload;
      if (!state[restaurantId]) {
        state[restaurantId] = {};
      }
      state[restaurantId][dishId] = amount;
      if (state[restaurantId][dishId] <= 0) {
        delete state[restaurantId][dishId];
        if (!Object.keys(state[restaurantId])?.length) {
          delete state[restaurantId];
        }
      }
    },
  },
  selectors: {
    // state - состояние данного слайса
    selectDishesAmountById: (
      state,
      restaurantId: string,
      productId: string
    ) => {
      return state[restaurantId] && state[restaurantId][productId]
        ? state[restaurantId][productId]
        : 0;
    },
    selectTotalDishesAmount: (state) => {
      return Object.values(state).reduce(
        (acc: number, dishesWithAmount: Record<string, number>) =>
          acc +
          Object.values(dishesWithAmount).reduce(
            (acc, amount) => acc + amount,
            0
          ),
        0
      );
    },
    selectCartDishesByRestaurantIds: (state) => Object.entries(state), // TODO ❌ WARNING: this _always_ returns a new reference, so it will _always_ re-render!
  },
});

/* getSelectors - в state прилетает все состояние, в .selectors - кусочек слайса
тут кусочек слайса имеет вид  { cart: Record<string, number> } */
export const { selectDishesAmountById } = cartSlice.selectors;
export const { selectTotalDishesAmount } = cartSlice.selectors;
export const { selectCartDishesByRestaurantIds } = cartSlice.selectors;
export const { setAmount } = cartSlice.actions;
