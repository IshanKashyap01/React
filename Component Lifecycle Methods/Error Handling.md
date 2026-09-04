# Error Handling

- **Error handling** is an *interceptor mechanism* gets triggered when an error
is thrown in a *component's lifecycle methods*

- When triggered, React immediately stops rendering the component (and its
children) and propagates the error upwards

- If unhandled, the error can bubble all the way to the top and potentially
crash the whole application

- To handle the error, set the appropriate ancestor as the *error boundary*

- The error boundary should change its state such that a *fallback component*
is rendered in place of the crashed component

- Typically, a reusable, dedicated error boundary component is used instead of
letting a parent component handle business logic and error handling

## `getDerivedStateFromError(error)`

- It is a `static` *pure function* that catches the error and returns an object
to calculate the new state

- *React* takes the returned object and changes the error boundary's state
accordingly

- Any side-effects or state changes should be *avoided* in this method

## `componentDidCatch(error, {componentStack})`

- This method gets triggered after the above method successfully returns

- *Side-effects should be performed* in this method but no state changes

- It receives the error thrown and the stack tree of the component that crashed
