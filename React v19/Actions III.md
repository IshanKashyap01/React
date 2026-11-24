# Even More Actions Hooks

## `useAPI()` Hook

- It doesn't follow the rules of React hooks and can be used inside loops and
conditionals

- However, it still has to be used inside a React component or a custom hook

```js
function UserProfile({userId})
{
    const users = use(userPromise)
    // JSX for user profile
}
```

- `use()` will suspend the rendering of the component until the promise passed
to it resolves

## `useDeferredValue()` Hook

- It lets you defer updating a part of your UI

```js
const value = useDeferredValue(deferredValue, initial_value)
```

- Use it for low-priority and/or computation heavy updates such as values that
update too frequently to render in real-time
