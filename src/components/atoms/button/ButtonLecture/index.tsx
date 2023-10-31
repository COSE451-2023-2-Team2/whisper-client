import { ComponentProps } from "react";
import Button from "../Button";
import s from "./index.module.scss";

export default function ButtonLecture(
  props: ComponentProps<typeof Button> & {
    id: string;
    label: string;
  }
) {
  return (
    <div className={s.button_lecture}>
      <label htmlFor={props.id}>{props.label}</label>
      <Button>COSE441</Button>
    </div>
  );
}
