import { useState } from "react";
import { createContext } from "react";

export const AuthContext = createContext();
export const AuthContextProvider=({children})=>{
    const [state, setIsAuth] = useState({
        isAuth:JSON.parse(localStorage.getItem("finalToken"))?true:false,
        token:JSON.parse(localStorage.getItem("finalToken"))||null
    });
    



const handleLogin = ( token ) => {
    console.log(token)
 const loggedUser =  localStorage.setItem("finalToken", JSON.stringify(token))

    setIsAuth({ ...state, isAuth: true, token: token });
  };
  const handleLogout = () => {
    setIsAuth({ ...state, isAuth: false, token: null });
  };
 
    return(
        <AuthContext.Provider value={{state, handleLogin,handleLogout }}>
            {children}
        </AuthContext.Provider>
    )
}