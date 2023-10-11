import ButtonBase from "@/components/atoms/button/ButtonBase";
import s from "./index.module.scss";
import InputId from "@/components/atoms/input/InputId";
import InputPassword from "@/components/atoms/input/InputPassword";
import LoginInput from "../LoginInput";
import ButtonLoginSwitch from "@/components/atoms/button/ButtonLoginSwitch";

export default function LoginBox() {
  return (
    <div className={s.login_box}>
      <div className={s.login_welcome}>Welcome !</div>
      <div className={s.login_title}>Sign in to Whisper</div>
      <div className={s.login_description}>
        Your first anonymous group chat for class :0
      </div>
      <div className={s.login_input}>
        <LoginInput title="User name" isId={true}></LoginInput>
        <LoginInput title="Password" isId={false}></LoginInput>
      </div>
      <div className={s.login_register}>
        <ButtonBase name="Register"></ButtonBase>
      </div>
      <ButtonLoginSwitch isLoginToRegister={true}></ButtonLoginSwitch>
    </div>
  );
}
