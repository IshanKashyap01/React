# Creating Reducers

- Reducers are pure functions that define what the new state should be for a
given action based on the current state

- They return a new state instead of mutating the existing one

```js
const INITIAL_STATE = []
export function todoReducer(state = INITIAL_STATE, action)
{
    const {type, payload} = action
    switch(type)
    {
        case ADD_TODO: return [...state, {text: payload, isCompleted: false}]
        case TOGGLE_TODO: return state.map(todo => todo.id !== payload ? todo :
            {...todo, isCompleted: !todo.isCompleted})
        case REMOVE_TODO: return state.filter(todo => todo.id !== payload)
        default: state
    }
}
```

- Upon creation, a store calls its reducers to ask for an initial state

- It does so by sending `undefined` and a randomly generated type as `state`
and `action` respectively

---

*NOTE*: If `undefined` is sent as the value of a parameter with defaults, it is
replaced by the default value. This is why we give `state` the initial value as
a default value
