import ButtonSubmit from "@/components/atoms/button/ButtonSubmit";
import InputField from "@/components/molecules/login/InputField";
import LectureSelectField from "@/components/molecules/login/LectureSelectField";
import { ChangeEvent, Fragment, useEffect, useRef, useState } from "react";
import s from "./index.module.scss";

export default function RegisterSecondForm() {
  const [userName, setUserName] = useState("");
  const [isValidUserName, setIsValidUserName] = useState("default");
  const isUserNameInputStarted = useRef(false);

  // NOTE: currently hard-coded
  const lectures: string[] = ["COSE441"];

  const userNameChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setUserName(event.target.value);
  };

  const checkIsValidUserName = (userName: string) => {
    if (userName.length > 0) {
      setIsValidUserName("true");
    } else {
      setIsValidUserName("false");
    }
  };

  useEffect(() => {
    const keyboardTimer = setTimeout(() => {
      if (!isUserNameInputStarted.current) {
        isUserNameInputStarted.current = true;
      } else {
        checkIsValidUserName(userName);
      }
    }, 500);

    return () => {
      console.log("타이머 초기화!");
      clearTimeout(keyboardTimer);
    };
  }, []);

  const confirmHandler = () => {
    // TODO: 로직 작성
    console.log("회원가입!");
  };

  return (
    <Fragment>
      <div className={s.register_input}>
        <InputField
          id="username"
          type="text"
          label="User name"
          placeholder="Enter your user name"
          value={userName}
          isCorrect={
            isValidUserName === "default" || isValidUserName === "true"
          }
          onChange={userNameChangeHandler}
        ></InputField>
        <LectureSelectField
          label="Choose class"
          lectureNames={lectures}
        ></LectureSelectField>
      </div>
      <div className={s.register_button}>
        <ButtonSubmit
          name="Sign up"
          disabled={!isValidUserName}
          onClick={confirmHandler}
        ></ButtonSubmit>
      </div>
    </Fragment>
  );
}
