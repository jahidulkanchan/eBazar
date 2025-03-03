/* eslint-disable react-refresh/only-export-components */
import { Children, createContext } from "react";
export const AuthContext = createContext(null);

const AuthProvider = ({children})=>{
  const name = 'jk'
  const location = 'dhaka'
  const userInfo = {name, location};
  return (
    <>
      <AuthContext.Provider value={userInfo}>
        {children}
      </AuthContext.Provider>
    </>
  )
}
export default AuthProvider;
