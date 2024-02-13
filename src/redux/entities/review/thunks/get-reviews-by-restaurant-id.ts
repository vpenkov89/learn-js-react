import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../../..";
import { IReview } from "../../../../types";
import { selectReviewsIds } from "../selectors";
import { selectRestaurantReviewsById } from "../../restaurant/selectors";

export const getReviewsByRestaurantId = createAsyncThunk<
  IReview[],
  string,
  { state: RootState }
>(
  "restaurant/getReviewsByRestaurantId",
  async (restaurantId: string) => {
    const response = await fetch(
      `http://localhost:3001/api/reviews?restaurantId=${restaurantId}`
    );
    const result = await response.json();
    return result;
  },
  {
    condition: (restaurantId, { getState }) => {
      const restaurantReviewsIds: string[] = selectRestaurantReviewsById(
        getState(),
        restaurantId
      );
      const reviewsIds = selectReviewsIds(getState());
      return !restaurantReviewsIds.every((id) => reviewsIds.includes(id));
    },
  }
);
