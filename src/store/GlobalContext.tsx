import { createContext, useState } from "react";
import { AuthContextType, Chat, ChatContextType, ModalContextChildren, ModalContextType } from "./GlobalContext.d";

export const AuthContext = createContext<AuthContextType>([false, () => null]);
export const ModalContext = createContext<ModalContextType>([null, () => null]);
export const ChatContext = createContext<ChatContextType>([[], () => null]);

export default function GlobalStateContext(props: { children: React.ReactNode | null }) {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [modalContext, setModalContext] = useState<ModalContextChildren>(null);
  const [chatContext, setChatContext] = useState<Chat[]>([]);

  const storeChat = (chat: Chat) => {
    setChatContext((prevChats) => [...prevChats, chat]);
  };

  return (
    <AuthContext.Provider value={[isLoggedIn, setIsLoggedIn]}>
      <ModalContext.Provider value={[modalContext, setModalContext]}>
        <ChatContext.Provider value={[chatContext, storeChat]}>{props.children}</ChatContext.Provider>
      </ModalContext.Provider>
    </AuthContext.Provider>
  );
}
