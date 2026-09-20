import { createContext, useContext, useReducer } from 'react'
import cartReducer, { defaultState } from './cartReducer'
// create the context
const CartContext = createContext()
// to provide the context
export default function CartContextProvider({children})
{
    const [state, dispatch] = useReducer(cartReducer, defaultState)
    return <>
        <CartContext.Provider 
            value = {
            {
                ...state,
                addItem: (item) => dispatch({type: 'add', item}), 
                removeItem: (id) => dispatch({type: 'remove', id}),
                clearCart: () => dispatch({type: 'reset'})
            }}
        >
            {children}
        </CartContext.Provider>
    </>
}
// to use the context
export function useCart()
{
    return useContext(CartContext)
}