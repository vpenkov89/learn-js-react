import { createSlice } from "@reduxjs/toolkit";
import { IRestaurant, normalizedRestaurants } from "../../../constants/mock";

export const restaurantSlice = createSlice({
  name: "restaurant",
  initialState: {
    entities: normalizedRestaurants.reduce((acc, restaurant) => {
      acc.set(restaurant.id, restaurant);
      return acc;
    }, new Map<string, IRestaurant>()),
    ids: normalizedRestaurants.map(({ id }) => id),
  },
  reducers: {},
});
