import { ComponentProps } from "react";
import Button from "../Button";
import s from "./index.module.scss";

export default function ButtonLecture(props: ComponentProps<typeof Button>) {
  return (
    <div className={s.button_lecture}>
      <Button>{props.name}</Button>
    </div>
  );
}
