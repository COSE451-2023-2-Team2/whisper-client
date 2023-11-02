import Input from "@/components/molecules/login/InputField";
import ButtonSubmit from "@/components/atoms/button/ButtonSubmit";
import { AuthContext } from "@/store/GlobalContext";
import {
  ChangeEvent,
  Fragment,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import s from "./index.module.scss";
import { RegisterFirstFormProps } from "./index.d";
import InputField from "@/components/molecules/login/InputField";
import useInputValidation from "@/hooks/useInputValidation";

export default function RegisterFirstForm(props: RegisterFirstFormProps) {
  const [isFormValid, setIsFormValid] = useState(false);

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
      console.log("validate id & pw");
      setIsFormValid(true);
      props.movePage();
    } else {
      console.log("wrong id & pw");
      setIsFormValid(false);
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
          disabled={!isValidEmail || !isValidPassword || !isConfirmSame}
          onClick={confirmHandler}
        ></ButtonSubmit>
      </div>
    </Fragment>
  );
}
