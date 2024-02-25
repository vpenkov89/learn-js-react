import { useParams } from "react-router-dom";

import { Dish } from "../../dish/dish";
import { useGetDishByIdQuery } from "../../../redux/services/api";

export const DishPage: React.FC<unknown> = () => {
  const { dishId } = useParams();
  const { data: dish } = useGetDishByIdQuery(dishId!);

  return <Dish dish={dish!} />;
};
