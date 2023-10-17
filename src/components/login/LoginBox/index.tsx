import ButtonSubmit from "@/components/atoms/button/ButtonSubmit";
import s from "./index.module.scss";
import ButtonLoginSwitch from "@/components/atoms/button/ButtonLoginSwitch";
import Input from "@/components/atoms/input/Input";
import { FormEvent, useContext, useState } from "react";
import { AuthContext } from "@/store/GlobalContext";
import LoginInputs from "@/components/login/LoginInputs";
import RegisterInputs from "@/components/login/RegisterInputs";

export default function LoginBox() {
  const [registerState, setRegisterState] = useState(false);

  const changeLoginState = () => {
    if (registerState === false) {
      setRegisterState(true);
    } else {
      setRegisterState(false);
    }
  };

  return (
    <div className={s.login_box}>
      <div className={s.login_welcome}>Welcome !</div>
      <div className={s.login_title}>
        Sign {!registerState ? "in" : "up"} to Whisper
      </div>
      <div className={s.login_description}>
        Your first anonymous group chat for class :0
      </div>
      {!registerState ? <LoginInputs /> : <RegisterInputs />}
      <ButtonLoginSwitch
        isLoginToRegister={!registerState}
        onClick={changeLoginState}
      ></ButtonLoginSwitch>
    </div>
  );
}
