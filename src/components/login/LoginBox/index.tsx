import ButtonBase from "@/components/atoms/button/ButtonBase";
import s from "./index.module.scss";
import ButtonLoginSwitch from "@/components/atoms/button/ButtonLoginSwitch";
import Input from "@/components/atoms/input/Input";
import { FormEvent } from "react";

export default function LoginBox() {
  const submitHandler = (event: FormEvent) => {
    event.preventDefault();
  };

  return (
    <form className={s.login_box} onSubmit={submitHandler}>
      <div className={s.login_welcome}>Welcome !</div>
      <div className={s.login_title}>Sign in to Whisper</div>
      <div className={s.login_description}>
        Your first anonymous group chat for class :0
      </div>
      <div className={s.login_input}>
        <Input
          id="username"
          type="text"
          label="User name"
          value="Enter your user name"
        ></Input>
        <Input
          id="password"
          type="password"
          label="Password"
          value="Enter your password"
        ></Input>
      </div>
      <div className={s.login_register}>
        <ButtonBase name="Login"></ButtonBase>
      </div>
      <ButtonLoginSwitch isLoginToRegister={true}></ButtonLoginSwitch>
    </form>
  );
}
