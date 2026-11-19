# Introduction to React Redux

## Complex State Management

- In complex applications, some states are needed by multiple components

- A crude way to solve this is through *prop-drilling*

- However, that creates a layered and bi-directional flow of data

### Limitations of Context API

- A better alternative is using the built-in *Context API* that provides state
sharing

- However, it was designed for static content so it re-renders even the
consumers that weren't affected by a change

- This negatively impacts flexibility, maintainability and scalability
