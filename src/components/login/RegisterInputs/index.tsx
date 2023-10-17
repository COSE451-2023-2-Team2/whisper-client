import Input from "@/components/atoms/input/Input";
import ButtonSubmit from "@/components/atoms/button/ButtonSubmit";
import { AuthContext } from "@/store/GlobalContext";
import { ChangeEvent, Fragment, useContext, useEffect, useState } from "react";
import s from "./index.module.scss";

export default function RegisterInputs() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [isValidEmail, setIsValidEmail] = useState(false);
  const [isValidPassword, setIsValidPassword] = useState(false);
  const [isConfirmSame, setIsConfirmSame] = useState(false);

  const checkIsValidEmail = (email: string) => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (emailPattern.test(email)) {
      setIsValidEmail(true);
    } else {
      setIsValidEmail(false);
    }
  };

  const checkIsValidPassword = (password: string) => {
    if (password.length >= 8) {
      setIsValidPassword(true);
    } else {
      setIsValidPassword(false);
    }
  };

  const checkIsConfirmSame = (password: string, confirmPassword: string) => {
    if (password === confirmPassword) {
      setIsConfirmSame(true);
    } else {
      setIsConfirmSame(false);
    }
  };

  const emailChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const passwordChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const confirmPasswordChangeHandler = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    setConfirmPassword(event.target.value);
  };

  const confirmHandler = () => {
    // TODO: 유효성 인증 로직 추가
    console.log("validate id & pw");
  };

  useEffect(() => {
    const keyboardTimer = setTimeout(() => {
      console.log("유효성 검사!");
      checkIsValidEmail(email);
    }, 500);

    return () => {
      console.log("타이머 초기화!");
      clearTimeout(keyboardTimer);
    };
  }, [email]);

  useEffect(() => {
    const keyboardTimer = setTimeout(() => {
      checkIsValidPassword(password);
    }, 500);

    return () => {
      console.log("타이머 초기화!");
      clearTimeout(keyboardTimer);
    };
  }, [password]);

  useEffect(() => {
    const keyboardTimer = setTimeout(() => {
      checkIsConfirmSame(password, confirmPassword);
    }, 500);

    return () => {
      console.log("타이머 초기화!");
      clearTimeout(keyboardTimer);
    };
  }, [password, confirmPassword]);

  return (
    <Fragment>
      <div className={s.register_input}>
        <Input
          id="username"
          type="text"
          label="User name"
          value="Enter your user name"
          isCorrect={email === "" || isValidEmail}
          onChange={emailChangeHandler}
        ></Input>
        <Input
          id="password"
          type="password"
          label="Password"
          value="Enter your password"
          isCorrect={password === "" || isValidPassword}
          onChange={passwordChangeHandler}
        ></Input>
        <Input
          id="password"
          type="password"
          label="Confirm Password"
          value="Confirm your password"
          isCorrect={confirmPassword === "" || isConfirmSame}
          onChange={confirmPasswordChangeHandler}
        ></Input>
      </div>
      <div className={s.register_button}>
        <ButtonSubmit
          name="Confirm"
          disabled={!isValidEmail || !isValidPassword || !isConfirmSame}
          onClick={confirmHandler}
        ></ButtonSubmit>
      </div>
    </Fragment>
  );
}
