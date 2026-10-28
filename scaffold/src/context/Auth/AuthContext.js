import { createContext, useContext } from "react";
import AuthState from "./AuthState";

const AuthContext = createContext()

export function useAuth()
{
    return useContext(AuthContext)
}

export function AuthContextProvider({children})
{
    const values = AuthState()
    console.log(values)
    return (
        <AuthContext.Provider value={{...values}} >
            {children}
        </AuthContext.Provider>
    )
}