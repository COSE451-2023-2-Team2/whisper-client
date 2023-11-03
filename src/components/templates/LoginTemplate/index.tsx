import s from "./index.module.scss";
import ButtonLoginSwitch from "@/components/atoms/button/ButtonLoginSwitch";
import { useState } from "react";
import LoginInputs from "@/components/organs/LoginForm";
import LoginTextField from "@/components/molecules/login/LoginTextField";
import RegisterFirstForm from "@/components/organs/RegisterFirstForm";
import RegisterSecondForm from "@/components/organs/RegisterSecondForm";

export default function LoginTemplate() {
  const [registerState, setRegisterState] = useState(false);
  const [isRegisterFirstPage, setIsRegisterFirstPage] = useState(true);

  const changeLoginState = () => {
    if (registerState === false) {
      setRegisterState(true);
    } else {
      setRegisterState(false);
    }
  };

  const moveToNextPage = () => {
    setIsRegisterFirstPage(false);
  };

  const currentPage = () => {
    if (!registerState) {
      return <LoginInputs></LoginInputs>;
    } else if (isRegisterFirstPage === true) {
      return <RegisterFirstForm movePage={moveToNextPage} />;
    } else {
      return <RegisterSecondForm></RegisterSecondForm>;
    }
  };

  return (
    <div className={s.login_box}>
      <LoginTextField registerState={registerState}></LoginTextField>
      <div className={s.login_form}>{currentPage()}</div>
      <ButtonLoginSwitch isLoginToRegister={!registerState} onClick={changeLoginState}></ButtonLoginSwitch>
    </div>
  );
}
