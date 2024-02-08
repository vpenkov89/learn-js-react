import { combineSlices, configureStore } from "@reduxjs/toolkit";
import { dishSlice } from "./entities/dish";
import { restaurantSlice } from "./entities/restaurant";
import { reviewSlice } from "./entities/review";
import { userSlice } from "./entities/user";

export const store = configureStore({
  reducer: combineSlices(dishSlice, restaurantSlice, reviewSlice, userSlice),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
