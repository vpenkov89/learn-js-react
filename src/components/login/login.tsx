import styles from "./styles.module.scss";
import { useContext, useState } from "react";
import { UserContext } from "../../contexts/user";
import classNames from "classnames";
import { LoginModal, LoginModalResult } from "../login-modal/login-modal";
import mainStyles from "../../styles/main.module.scss";

export const Login: React.FC<unknown> = () => {
  const { user, setUser } = useContext(UserContext);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  return (
    <>
      <div className={styles.root}>
        <span className={styles.username}>{user?.name || ""}</span>
        {!user ? (
          <button
            className={classNames(mainStyles.outlined, styles.login_btn)}
            onClick={() => setIsLoginModalOpen(true)}
          >
            Login
          </button>
        ) : (
          <button
            className={classNames(mainStyles.outlined, styles.login_btn)}
            onClick={() => setUser(null)}
          >
            Logout
          </button>
        )}
      </div>
      <LoginModal
        open={isLoginModalOpen}
        callback={(result: LoginModalResult) => {
          console.log(result);
          setUser(result);
          setIsLoginModalOpen(false);
        }}
      ></LoginModal>
    </>
  );
};
