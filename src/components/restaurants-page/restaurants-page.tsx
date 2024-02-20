import { useState } from "react";
import { SelectedRestaurantContext } from "../../contexts/selected-restaurant";
import { RestaurantsTabsContainer } from "../restaurants-tabs/restaurants-tabs-container";
import { RestaurantContainer } from "../restaurant/restaurant-container";

export const RestaurantsPage: React.FC<unknown> = () => {
  const [selectedRestaurantId, setSelectedRestaurantId] = useState<
    string | null
  >(null);

  return (
    <SelectedRestaurantContext.Provider
      value={{ selectedRestaurantId, setSelectedRestaurantId }}
    >
      <div>
        <b>Select restaurant:</b>
        <RestaurantsTabsContainer />
        {selectedRestaurantId && <RestaurantContainer />}
      </div>
    </SelectedRestaurantContext.Provider>
  );
};
