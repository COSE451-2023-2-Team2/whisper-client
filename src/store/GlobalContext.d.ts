export interface AuthContextType {
  isLoggedIn?: boolean;
  setIsLoggedIn?: Dispatch<SetStateAction<boolean>>;
}
