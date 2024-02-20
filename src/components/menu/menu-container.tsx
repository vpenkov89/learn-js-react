import { Menu } from "./menu";
import { useGetDishesByRestaurantIdQuery } from "../../redux/services/api";

type MenuContainerProps = {
  restaurantId: string;
};

export const MenuContainer: React.FC<MenuContainerProps> = ({
  restaurantId,
}) => {
  const { data: dishes, isFetching } =
    useGetDishesByRestaurantIdQuery(restaurantId);

  if (isFetching) {
    return <div>Loading...</div>;
  }

  if (!dishes?.length) {
    return null;
  }

  return <Menu restaurantId={restaurantId} dishes={dishes} />;
};
