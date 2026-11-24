# Logger Middleware in Redux

```js
// store, next, action
const logger = store => next => action => {
    // log the action
    console.log(`${action.type} ${new Date().toString()}`)
    // call the next in line
    next(action)
    // log the modified state
    console.log(store.getState())
}
```

- A middleware is a function that accepts the following three parameters:

    1. `store` an object providing limited access to the Redux store

    2. `next` a function that passes the dispatched action forward

    3. `action` action object that was dispatched

```js
export const store = configureStore({
    reducer: {
        todos: todoReducer,
        notes: noteReducer,
        notifications: notificationReducer
    },
    middleware: [logger]
})
```

- `middleware` accepts an array containing middlewares
