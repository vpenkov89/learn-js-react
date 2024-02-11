import { RootState } from "../..";

export const selectDishModule = (state: RootState) => state.dish;

export const selectDishesIds = (state: RootState) => selectDishModule(state).ids;

export const selectDishById = (state: RootState, id: string) =>
  selectDishModule(state).entities[id];
