# Changing State in React

```js
resetCart()
{
    this.setState({cart: null})
}
incrementQuantity()
{
    this.setState((prev) => {
        return {
            quantity: prev.item.quantity + 1
        }
    })
}
```

- React batches `setState` calls for performance and this asynchronous behavior
can lead to bugs

- Therefore, use the second approach when your new state depends upon the
previous state

## Asynchronous Nature of `setState()`

- If you need the newly set value right after, use it in a callback as follows:

```js
this.setState({name: "new name"}, () => console.log(this.state.name))
console.log(this.state.name)
```

- The callback function will run only after the state is state

- Whereas, the second `console.log()` will run immediately and print the old
value
