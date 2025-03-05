/* eslint-disable react-refresh/only-export-components */
import { createContext, useEffect, useState } from "react";
import {createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../firebase/firebase.init";
export const AuthContext = createContext(null);

const AuthProvider = ({children})=>{
  const [user,setUser] = useState(null)
  const [loading,setIsloading] = useState(true);

  // OnAuth State Checker  =============================
  useEffect(()=>{
    const unsubsribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user?.displayName);
        setUser(user);
      } else {
        console.log('there is no user');
        setUser(null);
      }
      setIsloading(false)
    });
    return ()=> unsubsribe()
  },[])
  console.log(user?.email);
  // SignUp User By Email =============================
  const signUpUser = (email,password) => {
  return createUserWithEmailAndPassword(auth, email, password)
  }
  // SingIn User By Email =============================
  const singInUser = (email,password) => {
    return signInWithEmailAndPassword(auth, email, password)
  }
  // Sign Out User ============================= 
  const signOutUser = () => {
    return signOut(auth)
  }
  

  const name = 'jk'
  const location = 'dhaka'
  const userInfo = {
    signUpUser,
    singInUser,
    signOutUser,
    user,
    loading,
    name, location
  };
  return (
    <>
      <AuthContext.Provider value={userInfo}>
        {children}
      </AuthContext.Provider>
    </>
  )
}
export default AuthProvider;
