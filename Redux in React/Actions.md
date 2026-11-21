# Providing Actions

```js
// actions
export const ADD_TODO = "add todo"
export const TOGGLE_TODO = "toggle todo"
export const REMOVE_TODO = "remove todo"
```

- Actions are constants that represent an action to be performed on a state

```js
// action creators
export const addTodo = text => ({type: ADD_TODO, payload: text})
export const toggleTodo = id => ({type: TOGGLE_TODO, payload: id})
export const removeTodo = id => ({type: REMOVE_TODO, payload: id})
```

- Action creators are pure functions that provide the necessary information for
a reducer to perform an action
