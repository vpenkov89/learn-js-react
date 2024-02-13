import { createSlice } from "@reduxjs/toolkit";
import { REQUEST_STATUS } from "./constants";
import { Action } from "@reduxjs/toolkit";

// typescript fix - Property 'meta' does not exist on type 'Action'
interface ActionWithMeta extends Action {
  meta: {
    requestId: string;
  };
}

const initialState: Record<string, string> = {};

export const requestSlice = createSlice({
  name: "request",
  initialState,
  selectors: {
    selectIsLoading: (state, id: string) => state[id] === REQUEST_STATUS.pending,
    selectIsFulfilled: (state, id: string) => state[id] === REQUEST_STATUS.success,
  },
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addMatcher(
        ({ type }) => type.endsWith("/pending"),
        (state, action) => {
          state[(action as ActionWithMeta).meta.requestId] =
            REQUEST_STATUS.pending;
        }
      )
      .addMatcher(
        ({ type }) => type.endsWith("/fulfilled"),
        (state, action) => {
          state[(action as ActionWithMeta).meta.requestId] =
            REQUEST_STATUS.success;
        }
      )
      .addMatcher(
        ({ type }) => type.endsWith("/rejected"),
        (state, action) => {
          state[(action as ActionWithMeta).meta.requestId] =
            REQUEST_STATUS.fail;
        }
      ),
});

export const { selectIsLoading, selectIsFulfilled } = requestSlice.selectors;
