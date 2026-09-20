# Custom Provider

```jsx
const ItemContext = createContext()
// export the provider so components can wrap their children in it
export default function ItemContextProvider({children})
{
    const [total, setTotal] = useState(0)
    const [items, setItems] = useState([])
    return <>
        <ItemContext.Provider value = {{total, setTotal, items, setItems}} >
            {children}
        </ItemContext.Provider>
    </>
}
// export the context for the consumers
export {ItemContext}
```

- It is a component that encapsulates both the context and the provider

- Unlike custom hooks, using a custom provider returns the same state instance
