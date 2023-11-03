import { Dispatch, SetStateAction } from "react";

export type AuthContextType = [boolean, Dispatch<SetStateAction<boolean>>];

export type ModalContextType = [ModalContextChildren, Dispatch<SetStateAction<ModalContextChildren>>];
export type ModalContextChildren = React.ReactNode | null | React.ReactNode[] | null[];

export type Chat = {
  userName: string;
  message: string;
  date: Date;
};

export type ChatContextType = [Chat[], (chat: Chat) => void];
