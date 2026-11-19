# Using Context

- The best practice to use contexts, is to *encapsulate* all context-related
logic in one place

- That is, abstract away the internal logic and expose only the necessary
functionality

```js
// create the context
const CartContext = createContext()
// provide the context through a custom provider
function CartContextProvider()
{
    // create the state to be shared
    const [state, dispatch] = useReducer(cartReducer, {total: 0, cart: {}, size: 0})
    return (
        <CartContext.Provider value = {/*expose abstractions here*/} >
            {children}
        </CartContext.Provider>
    )
}
// consume context through a custom hook
function useCart()
```

- In the context above, do not send the `state` and `dispatch` through the
provider

- Instead expose values such as `cart`, `total`, `size` and functions such as
`addItem`, `removeItem` etc.
