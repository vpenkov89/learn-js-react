import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { getUsers } from "./thunks/get-users";
import { IUser } from "../../../types";

const entityAdapter = createEntityAdapter<IUser>();

export const userSlice = createSlice({
  name: "user",
  initialState: entityAdapter.getInitialState(),
  reducers: {},
  extraReducers: (builder) => {
    // builder.addMatcher()) // можно проверить соответствует ли action по названию (типу) данному matcher-у
    builder.addCase(getUsers.fulfilled, (state, { payload }) => {
      entityAdapter.setAll(state, payload);
    });
  },
});
