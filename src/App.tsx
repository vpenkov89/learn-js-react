import { Layout } from "./components/layout";
import { RestaurantCard } from "./components/restaurant/restaurant";
import { Restaurant, restaurants } from "./constants/mock";

export const App: React.FC<unknown> = () => {
  return (
    <Layout>
      <div className="main">
        {restaurants.map((restaurant: Restaurant) => (
          <RestaurantCard restaurant={restaurant} />
        ))}
      </div>
    </Layout>
  );
};
