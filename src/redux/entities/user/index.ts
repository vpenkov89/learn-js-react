import { createSlice } from "@reduxjs/toolkit";
import { IUserShort, normalizedUsers } from "../../../constants/mock";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    entities: normalizedUsers.reduce((acc, user) => {
      acc.set(user.id, user);
      return acc;
    }, new Map<string, IUserShort>()),
    ids: normalizedUsers.map(({ id }) => id),
  },
  reducers: {},
});
