import s from "./index.module.scss";
import { ButtonBaseProps } from "./index.d";

export default function ButtonBase(props: ButtonBaseProps) {
  return <button className={s.button_base}>{props.name}</button>;
}
