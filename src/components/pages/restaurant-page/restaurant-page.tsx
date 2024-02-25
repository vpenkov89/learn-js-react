import { Outlet } from "react-router-dom";
import { RestaurantsTabsContainer } from "../../restaurants-tabs/restaurants-tabs-container";

export const RestaurantPage: React.FC<unknown> = () => {
  return (
    <div>
      <b>Select restaurant:</b>
      <RestaurantsTabsContainer />
      <Outlet />
    </div>
  );
};
