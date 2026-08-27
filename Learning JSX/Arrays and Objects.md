# Rendering Arrays and Objects

```js
const arr = ["Audi", "Ferrari", "BMW", "Mercedes"]
const App = () => (
    <>
        <h1>Hello World!!!</h1>
        <p>List of random car brands for no reason in particular:</p>
        <ol>
            {arr.map((element, index) => <li key={index}>{element}</li>)}
        </ol>
    </>   
)
```

- Objects cannot be rendered as is, but you can access their properties

- By default arrays will be rendered with all the elements at once, without
spaces

- For arrays/lists, a unique key value should be given which React will use to
identify elements during re-renders
