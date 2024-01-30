import { useState } from "react";
import { IRestaurant } from "../../constants/mock";
import { Restaurant } from "../restaurant/restaurant";
import { RestaurantsTabs } from "../restaurants-tabs/restaurants-tabs";

type RestaurantsProps = {
  restaurants: IRestaurant[];
};

export const RestaurantsPage: React.FC<RestaurantsProps> = ({
  restaurants,
}) => {
  const [selectedRestaurant, setSelectedRestaurant] = useState(restaurants[0]);

  const selectRestaurant = (id: string) => {
    const foundRestaurantById: IRestaurant = restaurants.find(
      (_restaurant: IRestaurant) => _restaurant.id === id
    )!;
    setSelectedRestaurant(foundRestaurantById);
  };

  return (
    <div>
      <b>Select restaurant:</b>
      <RestaurantsTabs
        restaurants={restaurants}
        selectedRestaurantId={selectedRestaurant.id}
        onSelectedRestaurantIdChange={selectRestaurant}
      />
      <Restaurant restaurant={selectedRestaurant} />
    </div>
  );
};
