# Unhandled Routes

```js
{
    path: "/",
    errorElement: <NotFoundPage />
}
```

- It is advised to provide the `errorElement` at the top level to ensure errors
at every level are covered by it

```js
function ErrorPage()
{
    const navigate = useNavigate()
    // return to the previous page after three seconds
    useEffect(() => {
        setTimeout(() => navigate(-1), 3000)
    }, [])
    // return error page JSX here... 
}
```

- `useNavigate()` returns a function that lets you programmatically navigate in
the browser

- You can either pass a negative value to indicate the number of hops to go
back

- Or you can pass it the route to navigate to

- It is best used for automatic redirects
