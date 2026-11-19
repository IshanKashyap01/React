# Creating Router

- To create a router for a web app, we use `createBrowserRouter()` which
accepts a list of *routes*

```js
const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>
    },
    {
        path: "/about",
        element: <About/>
    }
])
```

- You can provide an array of *routes* containing the *path* and the *element*
that's displayed on said path

```js
const routes = createRoutesFromElements(
    <>
        <Route path = "/" element = {<Home/>} />
        <Route path = "/about" element = {<About/>} />
    </>
)
const router = createBrowserRouter(routes)
```

- Alternatively, you can create routes as above
