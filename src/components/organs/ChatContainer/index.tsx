import ChatMessage from "@/components/molecules/chat/ChatMessage";
import s from "./index.module.scss";
import { ChatContainerProps } from "./index.d";

export default function ChatContainer(props: ChatContainerProps) {
  // TODO: 서버 연결 후 로직 수정
  const isMyMessage = false;
  const messages = props.chats.map((chat, index) => (
    <div key={index} className={`${s.chat_message} ${isMyMessage ? s.mine : s.others}`}>
      <ChatMessage isMine={isMyMessage} userName={chat.userName} messages={chat.messages}></ChatMessage>
    </div>
  ));
  return <div className={s.chat_container}>{messages}</div>;
}
