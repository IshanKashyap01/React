# Dispatching Async Thunk

- After creating the async thunk operation, dispatch it in your component

```js
useEffect(() => {
  dispatch(initialize())
}, [])
```

- If you add a custom middleware to your code, it will override the default one
and the above code won't work

- Therefore, you should add the default middlewares to your `middleware` array

```js
middleware: defaultMiddleware => defaultMiddleware().concat(logger)
```

## Using Extra Reducers

- You can delegate dispatching an action from within the thunk to extra
reducers

```js
export const initialize = createAsyncThunk("todo/initialize", () => axios.get(API)
    .then(response => response.data)
)
```

- To do so, simply return a promise from the thunk's callback function

```js
extraReducers: builder => {
    builder.addCase(initialize.fulfilled, (state, action) => {
        state.todos = action.payload
    })
}
```

- Now you can add extra reducers that listen for the resolution of your thunk

- `fulfilled` is triggered when the promise returned in the thunk is resolved

- `rejected` is triggered when it is rejected

- You can also add a listener for the waiting period with `pending`
