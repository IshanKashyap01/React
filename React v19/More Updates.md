# More Updates in React v19

## Ref as a Prop

```js
function Parent()
{
    const someRef = useRef(null)
    return <Child ref={someRef} />
}
function Child({ ref })
{
    return <input ref={ref} />
}
```

In v18, you had to use `forwardRef` but now you can pass refs as a prop

## Context as a Provider

```js
const ThemeContext = createContext()

// inside app.js
return (
    <ThemeContext value = {{...useThemeState()}}>
        <App />
    </ThemeContext>
)
```
