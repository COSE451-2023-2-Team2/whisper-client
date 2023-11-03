import { ComponentProps } from "react";
import Button from "../Button";
import s from "./index.module.scss";

export default function ButtonFixedM(props: ComponentProps<typeof Button>) {
  return (
    <Button className={s.button_modal} disabled={props.disabled} onClick={props.onClick}>
      {props.name}
    </Button>
  );
}
