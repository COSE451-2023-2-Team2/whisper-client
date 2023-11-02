import Input from "@/components/molecules/login/InputField";
import ButtonSubmit from "@/components/atoms/button/ButtonSubmit";
import { ModalContext } from "@/store/GlobalContext";
import { Fragment, useCallback, useContext } from "react";
import s from "./index.module.scss";
import { RegisterFirstFormProps } from "./index.d";
import InputField from "@/components/molecules/login/InputField";
import useInputValidation from "@/hooks/useInputValidation";
import ErrorModal from "@/components/popup/ErrorModal";

export default function RegisterFirstForm(props: RegisterFirstFormProps) {
  const [, setModal] = useContext(ModalContext);

  const emailChecker = useCallback((email: string) => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
  }, []);

  const passwordChecker = useCallback((password: string) => {
    return password.length >= 8 ? true : false;
  }, []);

  const {
    input: email,
    isValidInput: isValidEmail,
    isInputStarted: isEmailInputStarted,
    inputChangeHandler: emailChangeHandler,
  } = useInputValidation(emailChecker);

  const {
    input: password,
    isValidInput: isValidPassword,
    isInputStarted: isPasswordInputStarted,
    inputChangeHandler: passwordChangeHandler,
  } = useInputValidation(passwordChecker);

  const confirmPasswordChecker = useCallback(
    (confirmPassword: string) => {
      return confirmPassword === password ? true : false;
    },
    [password]
  );

  const {
    input: confirmPassword,
    isValidInput: isConfirmSame,
    isInputStarted: isComfirmPasswordInputStarted,
    inputChangeHandler: confirmPasswordChangeHandler,
  } = useInputValidation(confirmPasswordChecker);

  const confirmHandler = () => {
    if (
      isValidEmail === "true" &&
      isValidPassword === "true" &&
      isConfirmSame === "true"
    ) {
      console.log("서버에 회원가입 요청 전송!");
      const result = false;
      result ? props.movePage() : setModal(<ErrorModal error="register" />);
    }
  };

  return (
    <Fragment>
      <div className={s.register_input}>
        <InputField
          id="username"
          type="text"
          label="User name"
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
        <InputField
          id="password"
          type="password"
          label="Confirm Password"
          placeholder="Confirm your password"
          value={confirmPassword}
          isCorrect={isConfirmSame === "default" || isConfirmSame === "true"}
          onChange={confirmPasswordChangeHandler}
        ></InputField>
      </div>
      <div className={s.register_button}>
        <ButtonSubmit
          name="Register"
          disabled={
            !(
              isValidEmail === "true" &&
              isValidPassword === "true" &&
              isConfirmSame === "true"
            )
          }
          onClick={confirmHandler}
        ></ButtonSubmit>
      </div>
    </Fragment>
  );
}
