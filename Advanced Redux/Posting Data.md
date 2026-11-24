# Posting Data from Redux

```js
export const addTodo = createAsyncThunk("todo/addTodo", async payload => {
    const response = await fetch(API, {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(payload)
    })
    return response.json()
})
```

- As you can see, only the `fetch()` method's parameters have changed but the
rest of the code is still the same

- You can do the same for `DELETE` and `PUT` as well
