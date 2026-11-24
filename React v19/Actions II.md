# More Action Hooks

## `useFormStatus()` Hook

- It is one of the core action hooks added to `react-dom` with the v19 update

- It creates and manages an action inside child components of a `form`

```js
function ToggleButton()
{
    const {isPending} = useFormStatus()
    return (
        <button type="button" disabled={isPending}>
            {isPending ? "Toggling" : "Toggle"}
        </button>
    )
}
```

- Aside from the completion status, it also returns the following:

    1. The HTTP method used,

    2. The form data being submitted, and

    3. A reference to the function passed to the parent form's `action`
    attribute

## `useOptimistic()` Hook

- It lets you immediately show the expected result of an action while the async
action runs in the background

```js
export default function LikeButton({likes, setLikes})
{
    const [optimisticLikes, setOptimisticLikes] = useOptimistic(likes)
    async function submit(event)
    {
        setOptimisticLikes(likes + 1)
        // successful submission logic here...
        setLikes(likes + 1)
        // failure logic here...
    }
    return (
        <form action={submit}>
            <button type="submit">{optimisticLikes}</button>
        </form>
    )
}
```

- If the action fails, it automatically reverts the state
