import { createContext, useState } from "react";
import {
  AuthContextType,
  ModalContextChildren,
  ModalContextType,
} from "./GlobalContext.d";

export const AuthContext = createContext<AuthContextType>([false, () => null]);
export const ModalContext = createContext<ModalContextType>([null, () => null]);

export default function GlobalStateContext(props: {
  children: React.ReactNode | null;
}) {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [modalContext, setModalContext] = useState<ModalContextChildren>(null);

  return (
    <AuthContext.Provider value={[isLoggedIn, setIsLoggedIn]}>
      <ModalContext.Provider value={[modalContext, setModalContext]}>
        {props.children}
      </ModalContext.Provider>
    </AuthContext.Provider>
  );
}
