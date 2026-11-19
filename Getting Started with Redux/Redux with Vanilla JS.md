# Using Redux with Vanilla JS

- Before you use Redux with vanilla JS, you need is to install and import redux
in your app

- First you'll need to name the actions you need and what they curtail

```js
// actions
const ADD_TODO = "add todo"
const TOGGLE_TODO = "toggle todo"
// action creators
const addTodo = text => ({text, type: ADD_TODO})
const toggleTodo = id => ({id, type: TOGGLE_TODO})
```

- Above code defines the name of actions and what is expected when they're
triggered

- A reducer is a pure function just like the reducers we used with the
`useReducers()` React hook

```js
// reducers
function todoReducer(state, action)
{
    switch(action.type)
    {
        case ADD_TODO: return {
            ...state,
            todos: [
                ...state.todos,
                {
                    text: action.text,
                    isCompleted: false
                }
            ]
        }
        case TOGGLE_TODO: return {
            ...state,
            todos: state.todos.map(todo => (
                todo.id !== action.id ? todo :
                {
                    ...todo,
                    isCompleted: !todo.isCompleted
                }
            ))
        }
        default: state
    }
}
```

- Now you can create a redux store by giving it the reducer and it will handle
the rest

```js
const store = redux.createStore(todoReducer)
// mutate state in the store
store.dispatch(addTodo("Study at 8"))
store.dispatch(addTodo("Work at 9"))
store.dispatch(toggleTodo(0))
// read state from the store
console.log(store.getState())
```

- You can trigger mutations through `dispatch()` and read state via
`getState()`
