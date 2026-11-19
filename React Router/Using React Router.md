# Using React Router

- To use it, you first need to
[create a router](Router%20Concepts/Creating%20Router.md), then provide it to
your app as follows:

```js
<RouterProvider router = {router} />
```

- However, just creating the routes isn't enough, you also need to be able to
[navigate](Router%20Concepts/Navigation.md) through them

- If you want to add routes automatically as your application scales, use
[dynamic routing](Router%20Concepts/Dynamic%20Routes.md)

- You can create a generic error/404 pages for handling invalid routes by using
the [`errorElement`](Router%20Concepts/Unhandled%20Routes.md) property

- Use the `context` attribute of the `Outlet` component to pass data to the
children as context

- Then use the `useOutletContext()` hook to consume said context
