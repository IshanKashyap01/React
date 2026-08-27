# Javascript XML

- JSX is a syntax extension for JS that lets you write *HTML-like markup*
directly inside your JS files or dedicated `.jsx` files

- The browser cannot convert JSX into JS natively, so you'll need *Babel* to do
it for you

```html
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
```

- You can either install babel and compile your JSX code into JS or use the CDN
above

```jsx
const heading = <h1>Hello JSX</h1>
ReactDOM.createRoot(document.getElementById("root")).render(heading)
```

- You cannot have more than one element at the root level, which is why the
code below will throw an error

```jsx
const header = <h1>Hello World!!!</h1> <p>This is made with JSX</p>
```

- To fix this, you can use **React Fragments** as follows:

```jsx
const heading = <react.Fragment>
    <h1>Hello World!!!</h1>
    <p>This is made with JSX</p>
</react.Fragment>
```

- Alternatively, you can use empty tags `<> </>` as well here
