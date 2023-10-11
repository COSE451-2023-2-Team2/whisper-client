"use client";

import Image from "next/image";
import { InputPasswordProps } from "./index.d";
import s from "./index.module.scss";
import Invisible from "@/public/assets/invisible.png";
import Visible from "@/public/assets/visible.png";
import { useState } from "react";

export default function InputPassword(props: InputPasswordProps) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className={s.input_password}>
      <input
        placeholder={props.value}
        type={isVisible ? "text" : "password"}
      ></input>
      <button onClick={() => setIsVisible(!isVisible)}>
        <Image
          src={isVisible ? Visible : Invisible}
          alt="Visible Icon"
          width={21}
        ></Image>
      </button>
    </div>
  );
}
