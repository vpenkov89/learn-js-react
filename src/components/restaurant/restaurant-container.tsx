import { useContext } from "react";
import { SelectedRestaurantContext } from "../../contexts/selected-restaurant";
import { Restaurant } from "./restaurant";
import { useGetRestaurantsQuery } from "../../redux/services/api";

export const RestaurantContainer: React.FC<unknown> = () => {
  const { selectedRestaurantId } = useContext(SelectedRestaurantContext);
  const { data: restaurant } = useGetRestaurantsQuery(undefined, {
    selectFromResult: (result) => ({
      ...result,
      data: result.data?.find(
        (restaurantItem) => selectedRestaurantId === restaurantItem.id
      ),
    }),
  });

  if (!restaurant) {
    return null;
  }

  return <Restaurant restaurant={restaurant} />;
};
