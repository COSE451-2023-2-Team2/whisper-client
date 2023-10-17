import { useState } from "react";
import { InputProps } from "./index.d";
import s from "./index.module.scss";
import Image from "next/image";
import Invisible from "@/public/assets/invisible.png";
import Visible from "@/public/assets/visible.png";

export default function Input(props: InputProps) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  return (
    <div className={s.input_id}>
      <label htmlFor={props.id}>{props.label}</label>
      {props.type === "text" ? (
        <div className={s.input_box}>
          <input
            id={props.id}
            type={props.type}
            placeholder={props.value}
          ></input>
        </div>
      ) : (
        <div className={s.input_box}>
          <input
            placeholder={props.value}
            type={isPasswordVisible ? "text" : "password"}
          ></input>
          <button onClick={() => setIsPasswordVisible(!isPasswordVisible)}>
            <Image
              src={isPasswordVisible ? Visible : Invisible}
              alt="Visible Icon"
              width={17}
            ></Image>
          </button>
        </div>
      )}
    </div>
  );
}
