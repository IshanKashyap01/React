# Conditional Rendering

```js
const isLoggedIn = 1
function Table()
{
    return (
        <>
            <p>Hello {isLoggedIn ? "Alexa" : "User"}!</p>
            {isLoggedIn && <p>Welcome to the portal</p>}
        </>
    )
}
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<Table/>)
```

- If the condition is `false`, the `AND` operator returns the first *falsy*
value

- Otherwise, it returns the last *truthy* value

- Whereas, `OR` operator returns either the *first truthy* or the *last falsy*
value
