# Dynamic Routes

```js
{
    path: "/",
    element: <Navbar />,
    children: [
        path: "items",
        children: [
            {index: true, element: <ItemList/>},
            {
                path: ":itemId",
                element: <ItemDetails />
            }
        ]
    ]
}
```

- Put a placeholder/variable in place of the path name by prefixing it with a
`:`

```js
function Dashboard()
{
    const {userId} = useParams()
    const user = useUser(userId)
    // return the dashboard JSX here...
}
```

- `useParams()` hook extracts the value of the placeholder

```jsx
{
    items.map(item => (
        <Link to = {`${item.id}`}>
            <ItemCard key = {item.id} item = {item}>
        </Link>
    ))
}
```

- Now there is a unique route for each item and it scales automatically as you
add more routes
