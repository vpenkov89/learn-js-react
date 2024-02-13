import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { IReview } from "../../../types";
import { getReviewsByRestaurantId } from "./thunks/get-reviews-by-restaurant-id";

const entityAdapter = createEntityAdapter<IReview>();

export const reviewSlice = createSlice({
  name: "review",
  initialState: entityAdapter.getInitialState(),
  reducers: {},
  extraReducers: (builder) => {
    // builder.addMatcher()) // можно проверить соответствует ли action по названию (типу) данному matcher-у
    builder.addCase(getReviewsByRestaurantId.fulfilled, (state, { payload }) => {
      entityAdapter.upsertMany(state, payload);
    });
  },
});
