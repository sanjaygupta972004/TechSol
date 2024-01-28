import { createContext,useContext, useEffect } from "react";
import axios from "axios";

import { useState } from "react";

const AuthContext = createContext()

export const AuthProvider = ({children}) => {

   const [accessToken, setAccessToken] = useState(localStorage.getItem("accessToken")) || null
   const [refreshToken, setRefreshToken] = useState(localStorage.getItem("refreshToken")) || null
   const [userProfileData, setUserProfileData] = useState("")
   
   const authorization = `Bearer ${accessToken}`

   const localStoreAccessToken =(tokenServer)=>{
      setAccessToken(tokenServer)

      return localStorage.setItem("accessToken", tokenServer)
   }

   const localStoreRefreshToken =(tokenServer)=>{
      return localStorage.setItem("refreshToken", tokenServer)
   }



   const findUserProfile = async(accessToken) => {
      try {

         const response = await axios.get('http://localhost:5050/api/v/users/user-profile',{
            headers:{
               Authorization:`${authorization}`
            }
         })

         setUserProfileData(response.data.data)
       
         
      } catch (error) {
         console.error("Error during findUserProfile data",error);
        throw error
         
      }
   }
      
   useEffect(() => {
       findUserProfile(accessToken)
   },[])



   const isLoggedIn = accessToken ? true : false

  console.log("accessToken",isLoggedIn);
 
   const logoutUser = () => {
      setAccessToken("")
      setRefreshToken("")

    const accessToken =    localStorage.removeItem("accessToken")
    const refreshToken =   localStorage.removeItem("refreshToken")

    return {accessToken,refreshToken}

   }

   return (
      <AuthContext.Provider value={{
       localStoreAccessToken,
       localStoreRefreshToken,
       logoutUser,
       isLoggedIn,
       userProfileData,
       authorization,
       }}>
         {children}
      </AuthContext.Provider>
   )

}

export const useAuth = () => useContext(AuthContext)
