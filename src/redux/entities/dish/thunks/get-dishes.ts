import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../../..";
import { IDish } from "../../../../types";

export const getDishes = createAsyncThunk<
  IDish[],
  string,
  { state: RootState }
>(
  "restaurant/getDishes",
  async (restaurantId: string) => {
    const response = await fetch(
      `http://localhost:3001/api/dishes?restaurantId=${restaurantId}`,
      {}
    );
    const result = await response.json();
    return result;
  }
  // {condition: (restaurantId, { getState }) => !selectDishesByRestaurantId(getState(), restaurantId)}
);
