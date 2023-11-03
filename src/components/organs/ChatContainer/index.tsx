import ChatMessage from "@/components/molecules/chat/ChatMessage";
import s from "./index.module.scss";
import { ChatContainerProps } from "./index.d";
import { useEffect, useRef } from "react";

// FIXME: 스크롤바 발생 안하는 문제 해결 필요
export default function ChatContainer(props: ChatContainerProps) {
  // TODO: 서버 연결 후 로직 수정
  const isMyMessage = false;

  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, []);

  const messages = props.chats.map((chat, index) => (
    <ChatMessage key={index} isMine={isMyMessage} userName={chat.userName} messages={chat.messages}></ChatMessage>
  ));

  return (
    <div className={s.chat_container} ref={containerRef}>
      {messages}
    </div>
  );
}
