import { createPortal } from "react-dom";
import styles from "./styles.module.scss";
import mainStyles from "../../styles/main.module.scss";
import { useRef, useState, useLayoutEffect } from "react";
import { User } from "../../contexts/user";
import classNames from "classnames";

export type LoginModalResult = User | null;

type LoginModalProps = {
  open: boolean;
  callback: (result: LoginModalResult) => void;
};

export const LoginModal: React.FC<LoginModalProps> = ({ open, callback }) => {
  const dialog = useRef<HTMLDialogElement>(null);
  const form = useRef<HTMLFormElement>(null);
  const [isFormSubmitted, setFormSubmitted] = useState(false);
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  useLayoutEffect(() => {
    if (open) {
      setFormSubmitted(false);
      setName("");
      setEmail("");
      dialog?.current?.showModal();
    } else {
      dialog?.current?.close();
    }
  }, [open]);

  return createPortal(
    <dialog ref={dialog} className={styles.root}>
      <div className={mainStyles.dialog_header}>Login</div>
      <form
        name="loginModalForm"
        ref={form}
        className={classNames({ [mainStyles.submitted]: isFormSubmitted })}
      >
        <div className={mainStyles.form_group}>
          <label htmlFor="name">Username</label>
          <input
            name="name"
            type="text"
            value={name}
            required={true}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setName(event.target.value);
            }}
          ></input>
        </div>
        <div className={mainStyles.form_group}>
          <label htmlFor="email">Email</label>
          <input
            name="email"
            type="email"
            value={email}
            required={true}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setEmail(event.target.value);
            }}
          ></input>
        </div>
      </form>
      <div className={mainStyles.dialog_footer}>
        <button
          className={mainStyles.secondary_outlined}
          onClick={() => {
            callback(null);
          }}
        >
          Cancel
        </button>
        <button
          className={mainStyles.outlined}
          type="submit"
          form="loginModalForm"
          onClick={() => {
            setFormSubmitted(true);
            if (form.current?.checkValidity()) {
              //TODO не работает
              callback({ name: String(name), email: String(name) });
            }
          }}
        >
          Login
        </button>
      </div>
    </dialog>,
    document.getElementById("modal")!
  );
};
