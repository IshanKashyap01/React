# Functional React Components

```js
function Header()
{
    return (
        <>
            <h1>Hello World!!!</h1>
            <p>This is made with JSX</p>
        </>
    )
}
```

- Component names start with a capital letter; this convention differentiates
them from functions

```js
const root = ReactDOM.createRoot(document.getById("root"))
root.render(<Header/>)
```

- You can either call your component as a function or as above

- Alternatively, you can use arrow functions as well:

```js
const Header = () => (
    <>
        <h1>Hello World!!!</h1>
        <p>This is made with JSX</p>
    </>   
)
```
