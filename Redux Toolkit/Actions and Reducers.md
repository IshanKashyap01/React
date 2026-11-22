# Creating Actions and Reducers

```js
const todoSlice = createSlice({
    name: "todo",
    initialState: [],
    reducers: {
        addTodo: (state, action) => {
            state.push({
                text: action.payload,
                isComplete: false,
                id: Date.now()
            })
        },
        toggleTodo: (state, action) => {
            const todo = state.find(todo => todo.id === action.payload)
            todo.isComplete = !todo.isComplete
        },
        removeTodo: (state, action) => {
            state.filter(todo => (
                todo.id !== action.payload
            ))
        }
    }
})
export const todoReducer = todoSlice.reducer
export const todoActions = todoSlice.actions
```

- `createSlice()` creates reducers and actions for your Redux Store

- Redux Toolkit automatically creates action creators and store input in
`payload`

- You can just make changes in the existing state instead of returning a new
one

- `reducer` is a combined reducer function for your slice

- `actions` is an object that contains your actions and action creators as
key-value pairs
