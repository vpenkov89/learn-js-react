import { Restaurant } from "../../constants/mock";
import { RestaurantView } from "../restaurant/restaurant";

type RestaurantsProps = {
  restaurants: Restaurant[];
};

export const RestaurantsView: React.FC<RestaurantsProps> = ({
  restaurants,
}) => {
  return (
    <div>
      {restaurants.map((restaurant: Restaurant) => (
        <RestaurantView restaurant={restaurant} />
      ))}
    </div>
  );
};
