# Actions in React v19

- Actions are asynchronous functions that run inside a *transition* to
automatically manage data mutations, loading states, errors and form
submissions

## `useTransition()` Hook

```js
const [isPending, startTransition] = useTransition()
useEffect(() => {
    startTransition(async () => {
        // fetch data to initialize UI here
    })
}, [])
return isPending ? <Loader /> : <UserProfile />
```

- `useTransition()` hook creates a state that can transition from `true` to
`false` automatically

- `startTransition()` accepts an async operation and manages the state
automatically

## `useActionState()` Hook

- It wraps an action to track its state (errors or saved data) alongside its
completion status

```js
const INITIAL_STATE = {success: null, error: null}
async function submitPost(state, data)
{
    // form logic to submit the post to the server
    dispatch(submit(data))
    return {success: true, error: null}
}
```

```js
const [state, action, isPending] = useActionState(submitPost, INITIAL_STATE)
```

- It accepts a callback function that inputs the previous state and the action
payload

- `INITIAL_VALUE` any value the state should hold before the action is called

- It returns the current state, a wrapped version of the function you passed
and the completion status
