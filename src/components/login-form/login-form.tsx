import mainStyles from "../../styles/main.module.scss";
import { useContext, useRef, useState } from "react";
import { UserContext } from "../../contexts/user";
import classNames from "classnames";

type LoginFormProps = {
  onClose: () => void;
};

export const LoginForm: React.FC<LoginFormProps> = ({ onClose }) => {
  const { setUser } = useContext(UserContext);
  const form = useRef<HTMLFormElement>(null);
  const [isFormSubmitted, setFormSubmitted] = useState(false);
  const [name, setName] = useState<string>("Antony");
  const [email, setEmail] = useState<string>("test@test.test");

  return (
    <>
      <form
        name="loginForm"
        method="dialog"
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
              if (isFormSubmitted) {
                setFormSubmitted(false);
              }
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
              if (isFormSubmitted) {
                setFormSubmitted(false);
              }
              setEmail(event.target.value);
            }}
          ></input>
        </div>
      </form>

      <div className={mainStyles.dialog_footer}>
        <button
          type="reset"
          className={mainStyles.secondary_outlined}
          onClick={onClose}
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
              setUser({
                id: "a304959a-76c0-4b34-954a-b38dbf310360",
                name: String(name),
                email: String(name),
              });
              onClose();
            }
          }}
        >
          Login
        </button>
      </div>
    </>
  );
};
