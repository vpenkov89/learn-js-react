import React from "react";

interface UserContext {
  user: User | null;
  setUser: (user: User | null) => void;
}

export interface User {
  id?: string;
  name: string;
  email: string;
  // authToken?: string;
}

export const UserContext = React.createContext<UserContext>({
  user: null,
  setUser: () => {},
});
