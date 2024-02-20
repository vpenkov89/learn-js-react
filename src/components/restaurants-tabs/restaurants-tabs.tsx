import styles from "./styles.module.scss";
import { RestaurantTab } from "../restaurant-tab/restaurant-tab";
import { IRestaurant } from "../../types";

type RestaurantTabsProps = {
  restaurants: IRestaurant[];
};

export const RestaurantsTabs: React.FC<RestaurantTabsProps> = ({
  restaurants,
}) => {
  return (
    <div className={styles.root}>
      {restaurants &&
        restaurants.map((restaurant: IRestaurant) => (
          <RestaurantTab key={restaurant.id} restaurant={restaurant} />
        ))}
    </div>
  );
};
