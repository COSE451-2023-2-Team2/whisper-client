import ChatInputField from "@/components/molecules/chat/ChatInputField";
import s from "./index.module.scss";
import ButtonFixedS from "@/components/atoms/button/ButtonFixedS";
import { ChangeEvent, FormEvent, useContext, useState } from "react";
import { ChatContext } from "@/store/GlobalContext";
import { Chat } from "@/store/GlobalContext.d";

export default function ChatInputForm() {
  const [, storeChat] = useContext(ChatContext);
  const [message, setMessage] = useState("");

  const inputChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value);
  };

  const submitHandler = () => {
    setMessage("");

    // TODO: userName 로직 작성 후 수정
    const newChat: Chat = {
      userName: "pengtoshi",
      message,
      date: new Date()
    };

    // TODO: 서버 전송 방식으로 수정
    storeChat(newChat);
    console.log(newChat);
  };

  const clickHandler = (event: FormEvent) => {
    // TODO: form으로 수정
    // event.preventDefault();
    submitHandler();
  };

  return (
    <div className={s.chat_input_form}>
      <div className={s.chat_input_field}>
        <ChatInputField value={message} onChange={inputChangeHandler}></ChatInputField>
      </div>
      <ButtonFixedS name="Send" onClick={clickHandler} disabled={message === ""}></ButtonFixedS>
    </div>
  );
}
