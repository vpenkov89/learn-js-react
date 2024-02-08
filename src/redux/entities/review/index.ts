import { createSlice } from "@reduxjs/toolkit";
import { IReview, normalizedReviews } from "../../../constants/mock";

export const reviewSlice = createSlice({
  name: "review",
  initialState: {
    entities: normalizedReviews.reduce((acc, review) => {
      acc.set(review.id, review);
      return acc;
    }, new Map<string, IReview>()),
    ids: normalizedReviews.map(({ id }) => id),
  },
  reducers: {},
});
