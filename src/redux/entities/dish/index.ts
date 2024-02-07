import { createSlice } from "@reduxjs/toolkit";
import { IDish, normalizedDishes } from "../../../constants/mock";

export const dishSlice = createSlice({
  name: "dish",
  initialState: {
    entities: normalizedDishes.reduce((acc, dish) => {
      acc.set(dish.id, dish);
      return acc;
    }, new Map<string, IDish>()),
    ids: normalizedDishes.map(({ id }) => id),
  },
  reducers: {},
});
