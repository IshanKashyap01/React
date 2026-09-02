# Properties (Props) in React

- They are data passed from parent components to their children and are
**immutable** (read-only)

- In React, the flow of data is strictly uni-directional from top to bottom

- This is done in order to maintain a *single source of truth* for any given
state in the application

- Therefore, for any given state, *one and only one* component should be
responsible for its mutation

---

*NOTE*: However, properties within the prop *can* be changed by a component.
Though, that *must not* be done as React will not detect the change and it can
cause rendering bugs
