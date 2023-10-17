import Input from "@/components/atoms/input/Input";
import ButtonSubmit from "@/components/atoms/button/ButtonSubmit";
import { AuthContext } from "@/store/GlobalContext";
import { Fragment, useContext } from "react";
import s from "./index.module.scss";

export default function LoginInputs() {
  const authContext = useContext(AuthContext);

  const submitHandler = () => {
    localStorage.setItem("isLoggedIn", "true");
    // TODO 이곳에 로그인 관련 로직 추가
    authContext.setIsLoggedIn(true);
  };

  return (
    <Fragment>
      <div className={s.login_input}>
        <Input
          id="username"
          type="text"
          label="User name"
          placeholder="Enter your user name"
        ></Input>
        <Input
          id="password"
          type="password"
          label="Password"
          placeholder="Enter your password"
        ></Input>
      </div>
      <div className={s.login_button}>
        <ButtonSubmit name="Login" onClick={submitHandler}></ButtonSubmit>
      </div>
    </Fragment>
  );
}
