# Nested Routes

```js
const router = createBrowserRouter([
    {
        path: "/",
        element: <Navbar/>,
        children: [
            {index: true, element: <Home/>},
            {path: "/about", element: <About/>}
        ]
    }
])
```

```js
function Navbar()
{
    return <> 
        <nav>
            <Link to = "/">Home</Link>
            <Link to = "/about">About</Link>
        </nav>
        <Outlet />
    </>
}
```
