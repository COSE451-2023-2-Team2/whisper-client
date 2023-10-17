import s from "./index.module.scss";
import { ComponentProps } from "react";
import Button from "../Button";

export default function ButtonSubmit(props: ComponentProps<typeof Button>) {
  return (
    <Button
      className={s.button_base}
      disabled={props.disabled}
      onClick={props.onClick}
    >
      {props.name}
    </Button>
  );
}
