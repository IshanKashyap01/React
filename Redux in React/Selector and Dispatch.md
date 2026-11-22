# Using Selector and Dispatch in React Redux

```jsx
const todos = useSelector(state => state.todos)
return <>
    todos.map(todo => <Todo text = {todo.text} isCompleted = {todo.isCompleted} />)
</>
```

- `useSelector` hook lets you read a state from the Redux store

```jsx
const dispatch = useDispatch()
function handleSubmit(event)
{
    event.preventDefault()
    dispatch(addTodo(textRef.current.value))
}
```

- `useDispatch()` hook lets you dispatch actions on the Redux store
