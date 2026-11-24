# Async Thunk

- Until now, we have been handling async operations within our components

- Alternatively, we can handle async operations within Redux

- We can do so by using `createAsyncThunk` function from Redux toolkit

```js
export const initialize = createAsyncThunk("todo/initialize", async (_, thunkAPI) => {
    const {data} = await axios.get(API)
    thunkAPI.dispatch(setInitialState(data))
})
```

- It accepts an *action string* and an async callback function

- the callback function can accept an argument and the *Thunk API*

  - This API allows you to dispatch an action inside the `createAsyncThunk`

- `axios` is an external alternative to `fetch` that returns the response
directly after the initial call
