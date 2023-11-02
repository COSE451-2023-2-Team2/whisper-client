import { ModalContext } from "@/store/GlobalContext";
import { useContext } from "react";
import Modal from "./Modal";
import ButtonModal from "../atoms/button/ButtonModal";
import s from "./LoginModal.module.scss";

export default function LoginModal() {
  const [, setModal] = useContext(ModalContext);

  const onClickHandler = () => {
    setModal(null);
  };

  return (
    <Modal
      closeable={false}
      onClose={() => {
        setModal(null);
      }}
    >
      <div className={s.wrapper}>
        <div className={s.title}>Login Failed</div>
        <div className={s.content}>
          Your login attempt was unsuccessful. Please check your username and
          password and try again.
        </div>
        <ButtonModal name="Close" onClick={onClickHandler}></ButtonModal>
      </div>
    </Modal>
  );
}
