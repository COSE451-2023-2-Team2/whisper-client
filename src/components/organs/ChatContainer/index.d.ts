export interface ChatContainerProps {
  chats: Chat[];
}

export type Chat = {
  userName: string;
  messages: Message[];
};

export type Message = {
  message: string;
  date: Date;
};
