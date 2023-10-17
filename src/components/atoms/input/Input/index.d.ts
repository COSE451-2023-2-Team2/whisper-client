import { ChangeEventHandler } from "react";

export interface InputProps {
  id: string;
  type: string;
  label: string;
  value: string;
  isCorrect?: boolean;
  onChange?: ChangeEventHandler;
}
