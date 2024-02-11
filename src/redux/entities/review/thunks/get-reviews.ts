import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../../..";
import { IReview } from "../../../../types";

export const getReviews = createAsyncThunk<
  IReview[],
  string,
  { state: RootState }
>(
  "restaurant/getReviews",
  async (restaurantId: string) => {
    const response = await fetch(
      `http://localhost:3001/api/reviews?restaurantId=${restaurantId}`
    );
    const result = await response.json();
    return result;
  }
  // {
  //   condition: (restaurantId, { getState }) => !selectReviewsByRestaurantId(getState(restaurantId))?.length,
  // }
);
