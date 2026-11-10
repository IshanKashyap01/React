import { createContext, useContext } from "react";
import CartState from "./CartState";

const CartContext = createContext()

export function useCart()
{
    return useContext(CartContext)
}

export function CartContextProvider(userId, {children})
{
    return (
        <CartContext.Provider value={{...CartState(userId)}}>
            {children}
        </CartContext.Provider>
    )
}