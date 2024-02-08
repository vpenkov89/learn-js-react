import React from "react";

interface SelectedRestaurantContext {
  selectedRestaurantId: string | null;
  setSelectedRestaurantId: (user: string | null) => void;
}

export const SelectedRestaurantContext =
  React.createContext<SelectedRestaurantContext>({
    selectedRestaurantId: null,
    setSelectedRestaurantId: () => {},
  });
