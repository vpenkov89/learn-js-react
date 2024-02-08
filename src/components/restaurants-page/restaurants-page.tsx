import { useState } from "react";
import { Restaurant } from "../restaurant/restaurant";
import { RestaurantsTabs } from "../restaurants-tabs/restaurants-tabs";
import { useSelector } from "react-redux";
import { selectRestaurantsIds } from "../../redux/entities/restaurant/selectors";
import { SelectedRestaurantContext } from "../../contexts/selected-restaurant";

export const RestaurantsPage: React.FC<unknown> = () => {
  const restaurantsIds: string[] = useSelector(selectRestaurantsIds);
  const [selectedRestaurantId, setSelectedRestaurantId] = useState<
    string | null
  >(restaurantsIds[0]);

  return (
    <SelectedRestaurantContext.Provider
      value={{ selectedRestaurantId, setSelectedRestaurantId }}
    >
      <div>
        <b>Select restaurant:</b>
        <RestaurantsTabs />
        {selectedRestaurantId && (
          <Restaurant restaurantId={selectedRestaurantId} />
        )}
      </div>
    </SelectedRestaurantContext.Provider>
  );
};
