import { createAsyncThunk } from "@reduxjs/toolkit";
import { IRestaurant } from "../../../../types";
import { selectRestaurantsIds } from "../selectors";
import { RootState } from "../../..";

export const getRestaurants = createAsyncThunk<
  IRestaurant[],
  void,
  { state: RootState }
>(
  "restaurant/getRestaurants",
  async () => {
    const response = await fetch("http://localhost:3001/api/restaurants");
    const result = await response.json();
    return result;
  },
  {
    condition: (_, { getState }) => !selectRestaurantsIds(getState())?.length,
  }
);
