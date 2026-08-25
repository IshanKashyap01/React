# Learning JSX

## Advantages of Using JSX

- React separates concerns instead of technologies by coupling rendering logic
and UI logic

- JSX allows React to show more useful errors and warning messages

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

- To use variables or functions in JSX, wrap them in curly braces
