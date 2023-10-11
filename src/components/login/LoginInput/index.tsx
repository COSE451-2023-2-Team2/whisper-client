import { LoginInputProps } from "./index.d";
import s from "./index.module.scss";
import InputId from "@/components/atoms/input/InputId";
import InputPassword from "@/components/atoms/input/InputPassword";

export default function LoginInput(props: LoginInputProps) {
  return (
    <div className={s.login_input}>
      <div className={s.login_input_text}>{props.title}</div>
      {props.isId ? (
        <InputId value="Enter your user name"></InputId>
      ) : (
        <InputPassword value="Enter your password"></InputPassword>
      )}
    </div>
  );
}
