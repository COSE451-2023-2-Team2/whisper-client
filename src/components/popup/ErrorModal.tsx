import { ModalContext } from "@/store/GlobalContext";
import { useContext } from "react";
import Modal from "./Modal";
import ButtonModal from "../atoms/button/ButtonModal";
import s from "./ErrorModal.module.scss";

export interface ErrorModalProps {
  error: ErrorType;
}

export type ErrorType = "login" | "register";

export type ErrorMessages = {
  [key in ErrorType]: {
    title: string;
    content: string;
  };
};

export default function ErrorModal(props: ErrorModalProps) {
  const [, setModal] = useContext(ModalContext);

  const errorMessages: ErrorMessages = {
    login: {
      title: "Login Failed",
      content:
        "Your login attempt was unsuccessful. Please check your username and password and try again.",
    },
    register: {
      title: "Registration Failed",
      content:
        "Please make sure you have entered the correct email address. If you are already a registered member, please log in.",
    },
  };

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
        <div className={s.title}>{errorMessages[props.error].title}</div>
        <div className={s.content}>{errorMessages[props.error].content}</div>
        <ButtonModal name="Close" onClick={onClickHandler}></ButtonModal>
      </div>
    </Modal>
  );
}
