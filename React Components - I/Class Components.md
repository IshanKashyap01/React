# Class Component

```jsx
import { Component } from "react"

export class App extends Component
{
    render()
    {
        return <>
            <h1>Class Component</h1>
        </>
    }
}
```

- Class components must extend `Component` and have a `render()` method that
returns a component

- However, class components are now classified as *legacy*

- The React team explicitly recommends using *function components* with Hooks
