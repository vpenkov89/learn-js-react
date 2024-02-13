import React from "react";
import { IUser } from "../types";

interface UserContext {
  user: IUser | null;
  setUser: (user: IUser | null) => void;
}

export const UserContext = React.createContext<UserContext>({
  user: null,
  setUser: () => {},
});
