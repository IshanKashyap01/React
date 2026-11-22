# Dispatch Actions and Use Selectors

```js
// dispatching actions
const {addTodo} = todoActions
dispatch(addTodo("testing todo"))
// using selectors
const todos = useSelector(todoSelector)
console.log(todos)
```

- Import actions from slice and selectors from store, then use `dispatch()`
and `useSelector()` as usual
