# More Hooks

## `useRef()`

- It is a React hook that lets you create *refs*

- It accepts a single argument: an initial value for the ref until the DOM
element is mounted

- It returns a React ref containing a single property `current`

## `useReducer()`

- It is an advanced React hook that lets encapsulate state management logic

- It accepts three arguments in the following order:

    1. `reducer` *pure* callback function specifies how the state gets updated

    2. `initialArg` value from which initial state is calculated

    3. `init` (optional) callback function that is called with `initialArg` to
    get the initial state

- It returns an array with the current state and `dispatch` function

### `reducer` and `dispatch`

- `reducer` accepts two arguments: current `state` and the `action` to be
performed on it

- `dispatch` accepts an `action` object

- When called, React forwards the `action` and the current `state` to the
`reducer`

- `action` conventionally contains `type` of user action and optionally a
`payload` with additional information
