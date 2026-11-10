import { createContext, useContext } from "react";
import CartState from "./CartState";
import { useAuth } from "../Auth/AuthContext"

const CartContext = createContext()

export function useCart()
{
    return useContext(CartContext)
}

export function CartContextProvider({children})
{
    const {user} = useAuth()
    return (
        <CartContext.Provider value={{...CartState(user?.id)}}>
            {children}
        </CartContext.Provider>
    )
}