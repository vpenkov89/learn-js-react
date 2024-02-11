import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { IReview } from "../../../types";
import { getReviews } from "./thunks/get-reviews";

const entityAdapter = createEntityAdapter<IReview>();


export const reviewSlice = createSlice({
  name: "review",
  initialState: entityAdapter.getInitialState(),
  reducers: {},
  extraReducers: (builder) => {
    // builder.addMatcher()) // можно проверить соответствует ли action по названию (типу) данному matcher-у
    builder.addCase(getReviews.fulfilled, (state, { payload }) => {
      entityAdapter.setAll(state, payload);
    });
  },
});
