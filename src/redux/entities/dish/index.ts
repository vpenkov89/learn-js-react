import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { IDish } from "../../../types";
import { getDishes } from "./thunks/get-dishes";

const entityAdapter = createEntityAdapter<IDish>();

export const dishSlice = createSlice({
  name: "dish",
  initialState: entityAdapter.getInitialState(),
  reducers: {},
  extraReducers: (builder) => {
    // builder.addMatcher()) // можно проверить соответствует ли action по названию (типу) данному matcher-у
    builder.addCase(getDishes.fulfilled, (state, { payload }) => {
      entityAdapter.setAll(state, payload);
    });
    
  },
});
