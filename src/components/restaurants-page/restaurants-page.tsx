import { useState } from "react";
import { SelectedRestaurantContext } from "../../contexts/selected-restaurant";
import { RestaurantsTabsContainer } from "../restaurants-tabs/restaurants-tabs-container";
import { RestaurantContainer } from "../restaurant/restaurant-container";
import {
  useGetRestaurantsQuery,
  useGetUsersQuery,
} from "../../redux/services/api";

export const RestaurantsPage: React.FC<unknown> = () => {
  const [selectedRestaurantId, setSelectedRestaurantId] = useState<
    string | null
  >(null);

  const { isLoading: isRestaurantsLoading } = useGetRestaurantsQuery(undefined);
  const { isLoading: isUsersLoading } = useGetUsersQuery({});

  return (
    <SelectedRestaurantContext.Provider
      value={{ selectedRestaurantId, setSelectedRestaurantId }}
    >
      {isRestaurantsLoading || isUsersLoading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <b>Select restaurant:</b>
          <RestaurantsTabsContainer />
          {selectedRestaurantId && <RestaurantContainer />}
        </div>
      )}
    </SelectedRestaurantContext.Provider>
  );
};
