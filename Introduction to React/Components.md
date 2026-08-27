# Functional React Components

- Components are the core building block of a React app

- They are reusable pieces of code that defines how a UI should *look and*
*behave*

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

- The modern way of writing components is creating JS functions that return JSX

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
