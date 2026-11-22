# Extra Reducers

- Extra reducers allow you to decouple action and state ownership

- They can listen to actions dispatched to other state slices and can update
their own state accordingly

```js
const notificationSlice = createSlice({
    name: 'notification',
    initialState: "",
    reducers: {
        reset: state => ""
    },
    extraReducers: builder => {
        builder
        .addCase(addTodo, (state, action) => `new todo created: ${action.payload}`)
        .addCase(addNote, (state, action) => `new note added: ${action.payload}`)
    }
})
```

- `extraReducers` expects a callback function to create reducers

- The callback function accepts an instance of the `ActionReducerMapBuilder`
class

- `addCase` is a method of said class that accepts an action creator and a
callback function to handle the action

```js
extraReducers: {
    [addTodo]: (state, action) => `new todo created: ${action.payload}`,
    [addNote]: (state, action) => `new note added: ${action.payload}`
}
```

- Alternatively, you can provide it a map containing the key-value pair of
action type and the callback function for the action

- However, this method was deprecated in Redux Toolkit 2.0 (released in 2023)
