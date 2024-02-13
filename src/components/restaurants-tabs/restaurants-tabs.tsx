import styles from "./styles.module.scss";
import { RestaurantTab } from "../restaurant-tab/restaurant-tab";

type RestaurantTabsProps = {
  restaurantsIds: string[];
};

export const RestaurantsTabs: React.FC<RestaurantTabsProps> = ({
  restaurantsIds,
}) => {
  return (
    <div className={styles.root}>
      {restaurantsIds &&
        restaurantsIds.map((restaurantId: string) => (
          <RestaurantTab key={restaurantId} restaurantId={restaurantId} />
        ))}
    </div>
  );
};
