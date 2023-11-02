import Input from "@/components/molecules/login/InputField";
import ButtonSubmit from "@/components/atoms/button/ButtonSubmit";
import { AuthContext, ModalContext } from "@/store/GlobalContext";
import { Fragment, useContext } from "react";
import s from "./index.module.scss";
import InputField from "@/components/molecules/login/InputField";
import ErrorModal from "@/components/popup/ErrorModal";

export default function LoginForm() {
  const [, setIsLoggedIn] = useContext(AuthContext);
  const [, setModal] = useContext(ModalContext);

  const submitHandler = () => {
    localStorage.setItem("isLoggedIn", "true");
    // TODO 이곳에 로그인 관련 로직 추가
    // setIsLoggedIn(true);
    setModal(<ErrorModal error="login" />);
  };

  return (
    <div className={s.login_form}>
      <div className={s.login_input}>
        <InputField
          id="email"
          type="text"
          label="Email"
          placeholder="Enter your email address"
        ></InputField>
        <InputField
          id="password"
          type="password"
          label="Password"
          placeholder="Enter your password"
        ></InputField>
      </div>
      <div className={s.login_button}>
        <ButtonSubmit name="Login" onClick={submitHandler}></ButtonSubmit>
      </div>
    </div>
  );
}
