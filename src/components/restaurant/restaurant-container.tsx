import { Restaurant } from "./restaurant";
import { useGetRestaurantsQuery } from "../../redux/services/api";
import { useParams } from "react-router-dom";

export const RestaurantContainer: React.FC<unknown> = () => {
  const { restaurantId } = useParams();
  const { data: restaurant, isLoading } = useGetRestaurantsQuery(undefined, {
    selectFromResult: (result) => ({
      ...result,
      data: result.data?.find(
        (restaurantItem) => restaurantId === restaurantItem.id
      ),
    }),
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (!restaurant) {
    return null;
  }

  return <Restaurant restaurant={restaurant} />;
};
