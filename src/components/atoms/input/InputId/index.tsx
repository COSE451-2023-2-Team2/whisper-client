import { InputIdProps } from "./index.d";
import s from "./index.module.scss";

export default function InputId(props: InputIdProps) {
  return (
    <div className={s.input_id}>
      <input placeholder={props.value}></input>
    </div>
  );
}
