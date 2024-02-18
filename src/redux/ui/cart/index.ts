import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: Record<string, number> = {};

export interface SetAmountParams {
  dishId: string;
  amount: number;
}

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    increment: (state, action: PayloadAction<string>) => {
      const dishId = action.payload;
      state[dishId] = (state[dishId] || 0) + 1;
    },
    decrement: (state, action: PayloadAction<string>) => {
      const dishId = action.payload;
      if (!state[dishId]) {
        return;
      }
      state[dishId] = state[dishId] - 1;
      if (state[dishId] === 0) {
        delete state[dishId];
      }
    },
    setAmount: (state, action: PayloadAction<SetAmountParams>) => {
      const { dishId, amount } = action.payload;
      state[dishId] = amount;
      if (state[dishId] <= 0) {
        delete state[dishId];
      }
    },
  },
  selectors: {
    // state - состояние данного слайса
    selectDishAmountById: (state, dishId) => {
      return state[dishId] || 0;
    },
    selectTotalDishesAmount: (state) => {
      return Object.values(state).reduce((acc, amount) => acc + amount, 0);
    },
    selectCartDishesIds: (state) => Object.keys(state), // TODO ❌ WARNING: this _always_ returns a new reference, so it will _always_ re-render!
  },
});

/* getSelectors - в state прилетает все состояние, в .selectors - кусочек слайса
тут кусочек слайса имеет вид  { cart: Record<string, number> } */
export const { selectDishAmountById } = cartSlice.selectors;
export const { selectTotalDishesAmount } = cartSlice.selectors;
export const { selectCartDishesIds } = cartSlice.selectors;
export const { increment, decrement, setAmount } = cartSlice.actions;


// оставлю пока тут реализацию корзины с привязкой блюд к ресторану

// import { PayloadAction, createSlice } from "@reduxjs/toolkit";

// export interface ICartPayload {
//   restaurantId: string;
//   dishId: string;
// }
// // Record<restaurantId, Record<dishId, amount>>
// const initialState: Record<string, Record<string, number>> = {};

// export const cartSlice = createSlice({
//   name: "cart",
//   initialState,
//   reducers: {
//     increment: (state, action: PayloadAction<ICartPayload>) => {
//       const { restaurantId, dishId } = action.payload;
//       if (!state[restaurantId]) {
//         state[restaurantId] = {};
//       }
//       state[restaurantId][dishId] = (state[restaurantId][dishId] || 0) + 1;
//     },
//     decrement: (state, action: PayloadAction<ICartPayload>) => {
//       const { restaurantId, dishId } = action.payload;
//       if (!state[restaurantId][dishId]) {
//         return;
//       }
//       state[restaurantId][dishId] = state[restaurantId][dishId] - 1;
//       if (state[restaurantId][dishId] === 0) {
//         delete state[restaurantId][dishId];
//         if (!Object.keys(state[restaurantId])?.length) {
//           delete state[restaurantId];
//         }
//       }
//     },
//   },
//   selectors: {
//     // state - состояние данного слайса
//     selectDishesAmountById: (
//       state,
//       restaurantId: string,
//       productId: string
//     ) => {
//       return state[restaurantId] && state[restaurantId][productId]
//         ? state[restaurantId][productId]
//         : 0;
//     },
//     selectTotalProductsAmount: (state) => {
//       return Object.values(state).reduce(
//         (acc: number, dishesWithAmount: Record<string, number>) =>
//           acc +
//           Object.values(dishesWithAmount).reduce(
//             (acc, amount) => acc + amount,
//             0
//           ),
//         0
//       );
//     },
//     selectCartDishesByRestaurantds: (state) => Object.entries(state), // TODO ❌ WARNING: this _always_ returns a new reference, so it will _always_ re-render!
//   },
// });

// /* getSelectors - в state прилетает все состояние, в .selectors - кусочек слайса
// тут кусочек слайса имеет вид  { cart: Record<string, number> } */
// export const { selectDishesAmountById } = cartSlice.selectors;
// export const { selectTotalProductsAmount } = cartSlice.selectors;
// export const { selectCartDishesByRestaurantds } = cartSlice.selectors;
// export const { increment, decrement } = cartSlice.actions;