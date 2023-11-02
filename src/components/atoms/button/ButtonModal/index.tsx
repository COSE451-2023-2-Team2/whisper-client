import { ComponentProps } from "react";
import Button from "../Button";
import s from "./index.module.scss";

export default function ButtonModal(props: ComponentProps<typeof Button>) {
  return (
    <Button className={s.button_modal} onClick={props.onClick}>
      {props.name}
    </Button>
  );
}
