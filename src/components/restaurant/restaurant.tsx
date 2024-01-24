import { Menu, Restaurant, Review } from "../../constants/mock";
import { MenuCard } from "./menu";
import { ReviewCard } from "./review";
import styles from "./styles.module.scss";

type RestaurantProps = {
  restaurant: Restaurant;
};

export const RestaurantCard: React.FC<RestaurantProps> = ({
  restaurant,
}: RestaurantProps) => {
  return (
    <div className={styles.root}>
      <h2>{restaurant.name}</h2>
      <h3>Menu</h3>
      <ul>
        {restaurant.menu.map((menu: Menu) => (
          <MenuCard menu={menu} />
        ))}
      </ul>
      <h3>Reviews</h3>
      <ul>
        {restaurant.reviews.map((review: Review) => (
          <ReviewCard review={review} />
        ))}
      </ul>
      <hr />
    </div>
  );
};
