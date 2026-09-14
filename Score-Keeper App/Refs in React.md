# Refs in React

- A ref lets you hold a direct reference to a DOM element instead of finding it
through a selector

```js
const message = React.createRef()
// prints the DOM element
console.log(message.current)
```

```jsx
<input ref={message}/>
```

- `createRef()` returns an object wrapping the referenced DOM element

- `current`'s value is null before the referenced element is added to the DOM
and after it is removed

- React automatically updates it once the element is added to the DOM
