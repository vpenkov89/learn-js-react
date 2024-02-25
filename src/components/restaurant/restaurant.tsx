import { NavLink, Outlet } from "react-router-dom";
import { IRestaurant } from "../../types";
import mainStyles from "../../styles/main.module.scss";
import styles from "./styles.module.scss";
import classNames from "classnames";

type RestaurantProps = {
  restaurant: IRestaurant;
};

export const Restaurant: React.FC<RestaurantProps> = ({ restaurant }) => {
  return (
    <div className={styles.root}>
      <h2>{restaurant.name}</h2>
      <div className={styles.buttons}>
        <NavLink to={"menu"}>
          {({ isActive }) => (
            <button
              disabled={isActive}
              className={classNames({
                [mainStyles.selected]: isActive,
              })}
            >
              Menu
            </button>
          )}
        </NavLink>
        <NavLink to={"reviews"}>
          {({ isActive }) => (
            <button
              disabled={isActive}
              className={classNames({
                [mainStyles.selected]: isActive,
              })}
            >
              Reviews
            </button>
          )}
        </NavLink>
      </div>
      <Outlet />
    </div>
  );
};
