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

  if (!dishes?.length) {
    return null;
  }

  return (
    <>
      {isFetching ? (
        <div>Loading...</div>
      ) : (
        <Menu restaurantId={restaurantId} dishes={dishes} />
      )}
    </>
  );
};
