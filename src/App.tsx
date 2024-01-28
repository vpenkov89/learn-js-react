import { Layout } from "./components/layout";
import { RestaurantsView } from "./components/restaurants/restaurants";
import { restaurants } from "./constants/mock";
import styles from "./styles/main.module.scss";

export const App: React.FC<unknown> = () => {
  return (
    <Layout>
      <div className={styles.main}>
        <RestaurantsView restaurants={restaurants} />
      </div>
    </Layout>
  );
};
