import { Dispatch, SetStateAction } from "react";

export type AuthContextType = [boolean, Dispatch<SetStateAction<boolean>>];

export type ModalContextType = [
  ModalContextChildren,
  Dispatch<SetStateAction<ModalContextChildren>>
];
export type ModalContextChildren =
  | React.ReactNode
  | null
  | React.ReactNode[]
  | null[];
