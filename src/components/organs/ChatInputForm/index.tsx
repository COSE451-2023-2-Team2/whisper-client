import ChatInputField from "@/components/molecules/chat/ChatInputField";
import s from "./index.module.scss";
import ButtonFixedS from "@/components/atoms/button/ButtonFixedS";
import { ChangeEvent, useState } from "react";

export default function ChatInputForm() {
  const [message, setMessage] = useState("");

  const inputChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value);
  };

  const clickHandler = () => {};

  return (
    <div className={s.chat_input_form}>
      <div className={s.chat_input_field}>
        <ChatInputField value={message} onChange={inputChangeHandler}></ChatInputField>
      </div>
      <ButtonFixedS name="Send" onClick={clickHandler} disabled={message === ""}></ButtonFixedS>
    </div>
  );
}
