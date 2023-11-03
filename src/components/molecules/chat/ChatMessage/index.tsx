import ChatAvatar from "@/components/atoms/chat/ChatAvatar";
import { ChatMessageProps } from "./index.d";
import s from "./index.module.scss";
import ChatElement from "@/components/atoms/chat/ChatElement";
import ChatTime from "@/components/atoms/chat/ChatTime";

export default function ChatMessage(props: ChatMessageProps) {
  return (
    <div className={s.message_container}>
      {props.isMine ? "" : <ChatAvatar userName={props.userName}></ChatAvatar>}

      <div className={`${s.messages} ${props.isMine ? s.mine : s.others}`}>
        {props.messages.map((message, index) => (
          <ChatElement
            key={index}
            isLast={index === props.messages.length - 1}
            isMine={props.isMine}
            message={message.message}
          />
        ))}
        <div className={`${s.message_time} ${props.isMine ? s.mine : s.others}`}>
          <ChatTime time={props.messages.slice(-1)[0].date} />
        </div>
      </div>
    </div>
  );
}
