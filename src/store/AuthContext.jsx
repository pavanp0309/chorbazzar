import {useState,useEffect,createContext} from 'react'
import { auth } from '../services/firebaseconfig'
import { createUserWithEmailAndPassword,signOut as firebaseSignOut,
  signInWithEmailAndPassword,setPersistence,
  browserLocalPersistence,onAuthStateChanged  } from "firebase/auth";
import { toast } from 'react-toastify';

// 1.creating the store
export const AuthContexts=createContext()

// 2.AuthContext is provider which provides the values of the store to different child components
const AuthContext = ({children}) => {
const [isLoggedIn,setIsLoggedIn]=useState(false)
const [isUserlogged,setIsUserLogged]=useState(null)
const [isloading,setIsloading]=useState(true)


useEffect(()=>{

  const setAuthPersistence=async()=>{
     try {
      await setPersistence(auth, browserLocalPersistence)
     } catch (error) {
       console.log("error in setting the Persistence")
     }
  }

  setAuthPersistence()

  let unSubScribe=onAuthStateChanged(auth, (user) => {
    if (user) {
      setIsLoggedIn(true)
      setIsUserLogged(user)

    } else {
      setIsLoggedIn(false)
      setIsUserLogged(null)
    }
    setIsloading(false)
  });

  // clean up function
  return ()=>unSubScribe()

},[])


  //1. Creating the User
  const createUser=async(data)=>{
    try {
       await createUserWithEmailAndPassword(auth,data.email,data.password);
       toast.success("Registered sucessfully");
       return true;
    } catch (error) {
      toast.error("Registered failed")
      return false;
    }
  }

  //2. Login The User
  const userLogin=async(data)=>{
    try {
       await signInWithEmailAndPassword(auth,data.email,data.password);
       toast.success("signin sucessfully");
       return true;
    } catch (error) {
      toast.error("signin failed")
      return false;
    }
  }


  // 3.Logout the User
  const signOut=async()=>{
    try {
      await firebaseSignOut(auth)
      toast.success("successfully signed out")
      return true;
    } catch (error) {
      toast.error("unable to signout")
      return false;
    }
  }




  return (
   <AuthContexts.Provider  value={{createUser,userLogin,isLoggedIn,isUserlogged,isloading,signOut}}>
     {children}
   </AuthContexts.Provider>
  )
}

export default AuthContext
