import Input from "@/components/atoms/input/Input";
import ButtonSubmit from "@/components/atoms/button/ButtonSubmit";
import { AuthContext } from "@/store/GlobalContext";
import {
  ChangeEvent,
  Fragment,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import s from "./index.module.scss";
import { RegisterFirstInputsProps } from "./index.d";

export default function RegisterFirstInputs(props: RegisterFirstInputsProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [isValidEmail, setIsValidEmail] = useState("default");
  const [isValidPassword, setIsValidPassword] = useState("default");
  const [isConfirmSame, setIsConfirmSame] = useState("default");

  const [isFormValid, setIsFormValid] = useState(false);

  const isEmailInputStarted = useRef(false);
  const isPasswordInputStarted = useRef(false);
  const isConfirmPasswordInputStarted = useRef(false);

  const checkIsValidEmail = (email: string) => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (emailPattern.test(email)) {
      setIsValidEmail("true");
    } else {
      setIsValidEmail("false");
    }
  };

  const checkIsValidPassword = (password: string) => {
    if (password.length >= 8) {
      setIsValidPassword("true");
    } else {
      setIsValidPassword("false");
    }
  };

  const checkIsConfirmSame = (password: string, confirmPassword: string) => {
    if (password === confirmPassword) {
      setIsConfirmSame("true");
    } else {
      setIsConfirmSame("false");
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

  useEffect(() => {
    const keyboardTimer = setTimeout(() => {
      if (!isEmailInputStarted.current) {
        isEmailInputStarted.current = true;
      } else {
        checkIsValidEmail(email);
      }
    }, 500);

    return () => {
      clearTimeout(keyboardTimer);
    };
  }, [email]);

  useEffect(() => {
    const keyboardTimer = setTimeout(() => {
      if (!isPasswordInputStarted.current) {
        isPasswordInputStarted.current = true;
      } else {
        checkIsValidPassword(password);
      }
    }, 500);

    return () => {
      console.log("타이머 초기화!");
      clearTimeout(keyboardTimer);
    };
  }, [password]);

  useEffect(() => {
    const keyboardTimer = setTimeout(() => {
      if (!isConfirmPasswordInputStarted.current) {
        isConfirmPasswordInputStarted.current = true;
      } else {
        checkIsConfirmSame(password, confirmPassword);
      }
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
          placeholder="Enter your user name"
          value={email}
          isCorrect={isValidEmail === "default" || isValidEmail === "true"}
          onChange={emailChangeHandler}
        ></Input>
        <Input
          id="password"
          type="password"
          label="Password"
          placeholder="Enter your password"
          value={password}
          isCorrect={
            isValidPassword === "default" || isValidPassword === "true"
          }
          onChange={passwordChangeHandler}
        ></Input>
        <Input
          id="password"
          type="password"
          label="Confirm Password"
          placeholder="Confirm your password"
          value={confirmPassword}
          isCorrect={isConfirmSame === "default" || isConfirmSame === "true"}
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
