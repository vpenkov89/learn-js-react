import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { getRestaurants } from "./thunks/get-restaurants";
import { IRestaurant } from "../../../types";

const entityAdapter = createEntityAdapter<IRestaurant>();

export const restaurantSlice = createSlice({
  name: "restaurant",
  initialState: entityAdapter.getInitialState(),
  reducers: {},
  extraReducers: (builder) => {
    // builder.addMatcher()) // можно проверить соответствует ли action по названию (типу) данному matcher-у
    builder.addCase(getRestaurants.fulfilled, (state, { payload }) => {
      entityAdapter.setAll(state, payload);
    });
  },
});
