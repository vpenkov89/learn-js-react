import { Menu } from "./menu";
import { useGetDishesByRestaurantIdQuery } from "../../redux/services/api";
import { useParams } from "react-router-dom";

export const MenuContainer: React.FC<unknown> = () => {
  const { restaurantId } = useParams();
  const { data: dishes, isFetching } =
    useGetDishesByRestaurantIdQuery(restaurantId!);

  if (isFetching) {
    return <div>Loading...</div>;
  }

  if (!dishes?.length) {
    return null;
  }

  return <Menu restaurantId={restaurantId!} dishes={dishes} />;
};
