# Javascript XML

- The browser cannot convert JSX into JS natively, so you'll need *Babel* to do
it for you

```html
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
```

```jsx
const heading = <h1>Hello JSX</h1>
ReactDOM.createRoot(document.getElementById("root")).render(heading)
```

- Although, here you cannot have more than one element at the root level

```jsx
const header = <h1>Hello World!!!</h1> <p>This is made with JSX</p>
```

- The above code will throw an error; to solve this, you can use **React**
**Fragments**

```jsx
const heading = <react.Fragment>
    <h1>Hello World!!!</h1>
    <p>This is made with JSX</p>
</react.Fragment>
```

- Alternatively, you can use empty tags `<> </>` as well here
