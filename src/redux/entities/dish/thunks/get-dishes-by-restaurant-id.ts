import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../../..";
import { IDish } from "../../../../types";
import { selectRestaurantMenuById } from "../../restaurant/selectors";
import { selectDishesIds } from "../selectors";

export const getDishesByRestaurantId = createAsyncThunk<
  IDish[],
  string,
  { state: RootState }
>(
  "restaurant/getDishesByRestaurantId",
  async (restaurantId: string) => {
    const response = await fetch(
      `http://localhost:3001/api/dishes?restaurantId=${restaurantId}`,
      {}
    );
    const result = await response.json();
    return result;
  },
  {
    condition: (restaurantId, { getState }) => {
      const restaurantDishesIds: string[] = selectRestaurantMenuById(
        getState(),
        restaurantId
      );
      const dishIds = selectDishesIds(getState());
      return !restaurantDishesIds.every((id) => dishIds.includes(id));
    },
  }
);
