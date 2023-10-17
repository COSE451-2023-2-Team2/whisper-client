import { createContext, useState } from "react";
import { AuthContextType } from "./GlobalContext.d";

export const AuthContext = createContext<AuthContextType>({});

export default function GlobalStateContext(props: {
  children: React.ReactNode | null;
}) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const value = { isLoggedIn, setIsLoggedIn };

  return (
    <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
  );
}
