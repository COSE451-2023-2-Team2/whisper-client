import ButtonFixedS from "@/components/atoms/button/ButtonFixedS";
import { Header } from "@/components/layouts";
import ChatInputField from "@/components/molecules/chat/ChatInputField";
import ChatMessage from "@/components/molecules/chat/ChatMessage";
import ChatContainer from "@/components/organs/ChatContainer";
import ChatInputForm from "@/components/organs/ChatInputForm";
import Popup from "@/components/popup";
import ChatListTemplate from "@/components/templates/ChatListTemplate";
import ChatTemplate from "@/components/templates/ChatTemplate";
import s from "./index.module.scss";

export default function Chat() {
  return (
    <div className={s.chat}>
      <Header></Header>
      <Popup></Popup>
      <div className={s.chat_content}>
        <ChatListTemplate />
        <ChatTemplate />
      </div>
    </div>
  );

  // return <ChatListTemplate />;
}
