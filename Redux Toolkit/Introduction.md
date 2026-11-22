# Introduction to Redux Toolkit

```bash
npm install @reduxjs/toolkit
```

- Redux toolkit reduces the amount of boilerplate code we had to write with
Redux

- It allows you to create actions and reducers declaratively

## How to Use Redux Toolkit

![alt text](<Redux Toolkit Architecture.jpeg>)

1. Create a [slice](Actions%20and%20Reducers.md) for all your shared states

    - Export its action creators and reducer

2. [Configure your store](Redux%20Store.md) with the reducers from all slices

    - Export selector functions for each of your store

3. Now read/write to your shared state as usual by importing action creators
and selector functions
