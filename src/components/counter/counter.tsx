import styles from "./styles.module.scss";
import classNames from "classnames";

type CounterProps = {
  className?: string;
  count: number;
  onChange: (count: number) => void;
};

export const Counter: React.FC<CounterProps> = ({
  className,
  count,
  onChange,
}) => {
  return (
    <div className={classNames(className, styles.root)}>
      <button
        className={classNames(styles.counter_button, {
          [styles.disabled]: count < 1,
        })}
        onClick={() => {
          if (count >= 1) {
            onChange(count - 1);
          }
        }}
      >
        -
      </button>
      <span className={styles.count}>{count}</span>
      <button
        className={classNames(styles.counter_button, {
          [styles.disabled]: count > 4,
        })}
        onClick={() => {
          if (count < 5) {
            onChange(count + 1);
          }
        }}
      >
        +
      </button>
    </div>
  );
};
