import { Layout } from "./components/layout/layout";
import { RestaurantsPage } from "./components/restaurants-page/restaurants-page";
import { restaurants } from "./constants/mock";
import styles from "./styles/main.module.scss";

export const App: React.FC<unknown> = () => {
  return (
    <Layout>
      <div className={styles.main}>
        <RestaurantsPage restaurants={restaurants} />
      </div>
    </Layout>
  );
};
