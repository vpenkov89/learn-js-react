import { RootState } from "../..";

export const selectReviewModule = (state: RootState) => state.review;

export const selectReviewsIds = (state: RootState) =>
  selectReviewModule(state).ids;

export const selectReviewById = (state: RootState, id: string) =>
  selectReviewModule(state).entities.get(id);
