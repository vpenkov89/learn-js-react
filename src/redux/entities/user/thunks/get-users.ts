import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectUsersIds } from "../selectors";
import { RootState } from "../../..";
import { IUser } from "../../../../types";

export const getUsers = createAsyncThunk<
  IUser[],
  void,
  { state: RootState }
>(
  "user/getUsers",
  async () => {
    const response = await fetch("http://localhost:3001/api/users");
    const result = await response.json();
    return result;
  },
  {
    condition: (_, { getState }) => !selectUsersIds(getState())?.length,
  }
);
