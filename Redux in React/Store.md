# Redux Store

- Suppose you have more than one state shared across the component tree such
as products, cart, orders, etc.

- Redux store is a *one-stop destination* for all such states to live in

- All components can then get only what they need from the same place

```js
export const store = createStore(combineReducers({
    products: productReducer,
    cart: cartReducer,
    orders: orderReducer
}))
```

- `combineReducers()` combines multiple reducers into a single, root-level
reducer
