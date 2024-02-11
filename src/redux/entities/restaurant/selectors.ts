import { RootState } from "../..";

export const selectRestaurantModule = (state: RootState) => state.restaurant;

export const selectRestaurantsIds = (state: RootState) =>
  selectRestaurantModule(state).ids;

export const selectRestaurantById = (state: RootState, id: string) =>
  selectRestaurantModule(state).entities[id];
