# React Redux Store Provider

- To use Redux with React, use the React Redux library by installing it as
follows

```bash
npm install react-redux
```

- With React Redux you can scope your Redux store to specific components

```jsx
<Provider store = {store}>
    {/*Components that must have access to the redux store*/}
</Provider>
```

- `store` attribute specifies the store that the children will have access to
