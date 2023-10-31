import ButtonLecture from "@/components/atoms/button/ButtonLecture";
import ButtonSubmit from "@/components/atoms/button/ButtonSubmit";
import Input from "@/components/atoms/input/Input";
import { ChangeEvent, Fragment, useState } from "react";

export default function RegisterSecondInputs() {
  const [userName, setUserName] = useState("");

  const userNameChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setUserName(event.target.value);
  };

  return (
    <Fragment>
      <div>
        <Input
          id="username"
          type="text"
          label="User name"
          placeholder="Enter your user name"
          value={userName}
          // isCorrect={isValidEmail === "default" || isValidEmail === "true"}
          onChange={userNameChangeHandler}
        ></Input>
        <ButtonLecture id="class" label="Choose class"></ButtonLecture>
      </div>
      {/* <div className={s.register_button}>
        <ButtonSubmit
          name="Confirm"
          disabled={!isValidEmail || !isValidPassword || !isConfirmSame}
          onClick={confirmHandler}
        ></ButtonSubmit>
      </div> */}
    </Fragment>
  );
}
