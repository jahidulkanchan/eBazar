import { useContext } from "react";
import { AuthContext } from "../provider/ContextProvider";

export const useAuth = () => {
  const authInfo =  useContext(AuthContext)
  return authInfo;
};
