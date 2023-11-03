import { ChangeEventHandler } from "react";

export interface InputChatProps {
  value?: string;
  placeholder?: string;
  onChange?: ChangeEventHandler;
}
