import styles from "./styles.module.scss";
import { RestaurantTab } from "../restaurant-tab/restaurant-tab";
import { IRestaurant } from "../../types";
import { NavLink } from "react-router-dom";

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
          <NavLink  key={restaurant.id} to={`/restaurants/${restaurant.id}`}>
            {({ isActive }) => (
              <RestaurantTab
                key={restaurant.id}
                restaurant={restaurant}
                isActive={isActive}
              />
            )}
          </NavLink>
        ))}
    </div>
  );
};
