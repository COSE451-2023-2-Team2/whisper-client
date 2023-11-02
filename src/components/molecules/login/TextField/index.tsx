import { Fragment } from "react";
import s from "./index.module.scss";

export interface TextFieldProps {
  registerState: boolean;
}

export default function TextField(props: TextFieldProps) {
  return (
    <Fragment>
      <div className={s.login_welcome}>Welcome !</div>
      <div className={s.login_title}>
        Sign {!props.registerState ? "in" : "up"} to Whisper
      </div>
      <div className={s.login_description}>
        Your first anonymous group chat for class.
      </div>
    </Fragment>
  );
}
