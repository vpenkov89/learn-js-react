import { selectRestaurantsIds } from "../../redux/entities/restaurant/selectors";
import { useSelector } from "react-redux";
import { RestaurantsTabs } from "./restaurants-tabs";

export const RestaurantsTabsContainer: React.FC<unknown> = () => {
  const restaurantsIds: string[] = useSelector(selectRestaurantsIds);
  return <RestaurantsTabs restaurantsIds={restaurantsIds} />;
};
