import Input from "@/components/molecules/login/InputField";
import ButtonSubmit from "@/components/atoms/button/ButtonSubmit";
import { AuthContext, ModalContext } from "@/store/GlobalContext";
import { Fragment, useContext } from "react";
import s from "./index.module.scss";
import InputField from "@/components/molecules/login/InputField";
import ErrorModal from "@/components/popup/ErrorModal";
import useInputValidation from "@/hooks/useInputValidation";

export default function LoginForm() {
  const [, setIsLoggedIn] = useContext(AuthContext);
  const [, setModal] = useContext(ModalContext);

  const {
    input: email,
    isValidInput: isValidEmail,
    inputChangeHandler: emailChangeHandler,
  } = useInputValidation();

  const {
    input: password,
    isValidInput: isValidPassword,
    inputChangeHandler: passwordChangeHandler,
  } = useInputValidation();

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
          value={email}
          isCorrect={isValidEmail === "default" || isValidEmail === "true"}
          onChange={emailChangeHandler}
        ></InputField>
        <InputField
          id="password"
          type="password"
          label="Password"
          placeholder="Enter your password"
          value={password}
          isCorrect={
            isValidPassword === "default" || isValidPassword === "true"
          }
          onChange={passwordChangeHandler}
        ></InputField>
      </div>
      <div className={s.login_button}>
        <ButtonSubmit
          name="Login"
          disabled={!(isValidEmail === "true" && isValidPassword === "true")}
          onClick={submitHandler}
        ></ButtonSubmit>
      </div>
    </div>
  );
}
