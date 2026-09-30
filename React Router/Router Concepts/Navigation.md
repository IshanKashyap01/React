# Navigating through Routes

```js
<Link to = "/about">About</Link>
```

- It is a wrapper around the `a` tag that prevents browser from requesting a
new page from the server

- If you wish to add styling to the `Link` of the component currently being
displayed:

```js
<NavLink to = "/">Home</NavLink>
```

- It automatically adds `active` class to the `a` tag's class present in the
DOM

- It can also accept a function in its `className` and `style` attributes

- You can also use `isActive` and `isPending` in said function

## Absolute vs Relative Path

- Absolute paths start with `/` and contains the entire path after the base URL

- Whereas relative paths start directly with the name of the next path segment

- It is recommended to use relative paths when using
[nested routes](Nested%20Routes.md)
