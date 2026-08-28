# Learning JSX

- React separates concerns instead of technologies by coupling rendering logic
and UI logic

- Although, React can be used without it, modern React apps use JSX to define
UI and embed JS for dynamic behaviour

- Unlike HTML, JSX requires closing all tags, empty or otherwise

- It uses *camel casing* for HTML attributes

- JSX also allows React to show more useful errors and warning messages

## Embedding JS in JSX

```jsx
const App = () => (
    <>
        <h1>Hello World!!!</h1>
        <p>This is made with JSX</p>
        {image}
        {sum()}
    </>   
)
```

- To use JS inside JSX syntax, wrap it inside curly brackets

- However, the embedded JS must return something that can be printed/rendered
