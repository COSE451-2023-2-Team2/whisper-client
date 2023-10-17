import { ButtonLoginSwitchProps } from "./index.d";
import s from "./index.module.scss";

export default function ButtonLoginSwitch(props: ButtonLoginSwitchProps) {
  return (
    <button className={s.button_login_switch}>
      <span className={s.first_string}>
        {props.isLoginToRegister
          ? "Don't have an account ?"
          : "Already have an account ?"}
      </span>
      {"  "}
      <span className={s.second_string}>
        {props.isLoginToRegister ? "Register" : "Login"}
      </span>
    </button>
  );
}
