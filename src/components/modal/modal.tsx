import { createPortal } from "react-dom";
import styles from "./styles.module.scss";
import mainStyles from "../../styles/main.module.scss";
import { useRef, useEffect } from "react";

type ModalProps = {
  children: React.ReactNode;
  onClose: () => void;
  headerText?: string;
};

export const Modal: React.FC<ModalProps> = ({
  children,
  onClose,
  headerText,
}) => {
  const dialog = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    dialog?.current?.showModal();
  }, []);

  return createPortal(
    // нативный dialog всем хорош кроме того, что он не удаляется из DOM при закрытии окна
    <dialog ref={dialog} className={styles.root} onClose={() => onClose()}>
      <div className={mainStyles.dialog_header}>{headerText || ''}</div>
      {children}
    </dialog>,
    document.getElementById("modal-container")!
  );
};
