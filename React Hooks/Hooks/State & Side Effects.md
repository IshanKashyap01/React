# React Hooks for State and Side Effects

## `useState()`

- It is a fundamental React hook that provides *state* to functional components

- It accepts a single argument representing the *initial state value* for a
React state

- It returns an array containing exactly two elements in the following order:

    1. The current value of the state and,

    2. A callback function to update it

## `useEffect()`

- It is another fundamental React hook that executes *side-effects* in a
functional components

- It accepts the following two arguments:

    1. **Effect Callback** function containing the side-effect logic

        - It can return a callback function for cleanup, if applicable

    2. **Dependencies** array (optional) containing triggers for the effect

        - If not provided, the effect is run every render cycle

        - If an empty array is given, it only runs after mounting

        - If populated, runs after mounting and every time any value within
        changes
