import { useGetRestaurantsQuery } from "../../redux/services/api";
import { RestaurantsTabs } from "./restaurants-tabs";

export const RestaurantsTabsContainer: React.FC<unknown> = () => {
  const { data: restaurants } = useGetRestaurantsQuery(undefined);
  if (!restaurants) {
    return null;
  }
  return <RestaurantsTabs restaurants={restaurants} />;
};
