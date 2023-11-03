import ChatElement from "@/components/atoms/chat/ChatElement";
import ChatTime from "@/components/atoms/chat/ChatTime";
import InputChat from "@/components/atoms/input/InputChat";
import ChatMessage from "@/components/molecules/chat/ChatMessage";

export default function Chat() {
  const messages = [
    {
      message: "안녕하세요!",
      date: new Date()
    },
    {
      message: "https://iredays.tistory.com/125 이 페이지 봐주실 수 있나요?",
      date: new Date()
    },
    {
      message:
        "race condition이란 두 개 이상의 프로세스가 공통 자원을 병행적으로(concurrently) 읽거나 쓰는 동작을 할 때, 공용 데이터에 대한 접근이 어떤 순서에 따라 이루어졌는지에 따라 그 실행 결과가 같지 않고 달라지는 상황을 말한다. Race의 뜻 그대로, 간단히 말하면 경쟁하는 상태, 즉 두 개의 스레드가 하나의 자원을 놓고 서로 사용하려고 경쟁하는 상황을 말한다.",
      date: new Date()
    }
  ];
  return (
    <div>
      <ChatMessage isMine={false} userName="pengtoshi" messages={messages}></ChatMessage>
      <InputChat placeholder="test..."></InputChat>
    </div>
  );
}
