# Introduction to Context API

- It allows you to create states that are implicitly passed on to every child
of the owning component

- To use the context API, you need to do the following:

    1. Create a context

    2. Provide it to the component subtree

    3. Consume the context in the component's successors

```jsx
import {createContext} from 'react'
// create the context
const ColorContext = createContext()

function Parent()
{
    // provide it to the component subtree
    return <>
        <ColorContext.Provider value = "red">
            <Child/>
        </ColorContext.Provider>
        <OtherChild/>
    </>
}
```

- `createContext()` creates a context and can accept a default/fallback value

- Wrap the component subtree that must inherit the context with a *context*
*provider* as above

- You also need to provide the `value` that the children will get when using
the context

```jsx
import {ColorContext} from 'parent'

function GrandChild()
{
    // consume the context
    const color = useContext(ColorContext)
    // rest of the grandchild logic here...
}
```

- `useContext()` accepts the name of the context to use and returns its `value`
