# Creating Redux Store

- Import all your reducers before creating the store

```js
export const store = configureStore({
    reducer: {
        todos: todoReducer,
        notes: noteReducer
    }
})
export const todoSelector = state => state.todos
export const noteSelector = state => state.notes
```

- `configureStore()` wraps the `createStore()` function to provides additional
features

- You can also encapsulate and export your selector logic for `useSelector()`
hook as above
