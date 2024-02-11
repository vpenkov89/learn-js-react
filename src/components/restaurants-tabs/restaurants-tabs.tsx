import styles from "./styles.module.scss";

import { selectRestaurantsIds } from "../../redux/entities/restaurant/selectors";
import { useSelector } from "react-redux";
import { RestaurantTab } from "../restaurant-tab/restaurant-tab";

export const RestaurantsTabs: React.FC<unknown> = () => {
  const restaurantsIds: string[] = useSelector(selectRestaurantsIds);
  return (
    <div className={styles.root}>
      {restaurantsIds && restaurantsIds.map((restaurantId: string) => (
        <RestaurantTab key={restaurantId} restaurantId={restaurantId} />
      ))}
    </div>
  );
};
