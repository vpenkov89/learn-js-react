import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { IDish } from "../../../types";
import { getDishesByRestaurantId } from "./thunks/get-dishes-by-restaurant-id";

const entityAdapter = createEntityAdapter<IDish>();

export const dishSlice = createSlice({
  name: "dish",
  initialState: entityAdapter.getInitialState(),
  reducers: {},
  extraReducers: (builder) => {
    // builder.addMatcher()) // можно проверить соответствует ли action по названию (типу) данному matcher-у
    builder.addCase(getDishesByRestaurantId.fulfilled, (state, { payload }) => {
      entityAdapter.upsertMany(state, payload);
    });
    
  },
});
