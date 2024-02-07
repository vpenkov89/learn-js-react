import React from "react";
import { IUserShort } from "../constants/mock";

interface UserContext {
  user: IUser | null;
  setUser: (user: IUser | null) => void;
}

export interface IUser extends IUserShort {
  email: string;
  // authToken?: string;
}

export const UserContext = React.createContext<UserContext>({
  user: null,
  setUser: () => {},
});
