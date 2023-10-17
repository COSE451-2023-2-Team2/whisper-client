import { createContext, useState } from "react";
import { GlobalContextType } from "./GlobalContext.d";

export const GlobalContext = createContext<GlobalContextType>({});

export default function GlobalContextProvider(props: {
  children: React.ReactNode | null;
}) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const value = { isLoggedIn, setIsLoggedIn };

  return (
    <GlobalContext.Provider value={value}>
      {props.children}
    </GlobalContext.Provider>
  );
}
