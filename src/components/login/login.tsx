import styles from "./styles.module.scss";
import { useContext } from "react";
import { UserContext } from "../../contexts/user";
import classNames from "classnames";

type LoginProps = {
  className?: string;
};

export const Login: React.FC<LoginProps> = ({ className }) => {
  const { user, setUser } = useContext(UserContext);

  return (
    <div className={styles.root}>
      <span className={styles.username}>{user?.name || ""}</span>
      {!user ? (
        <button
          className={classNames(className, styles.login_btn)}
          onClick={() =>
            setUser({
              id: "123",
              name: "testUser",
              email: "qwerty@mail.com",
            })
          }
        >
          Login
        </button>
      ) : (
        <button className={styles.login_btn} onClick={() => setUser(null)}>
          Logout
        </button>
      )}
    </div>
  );
};
