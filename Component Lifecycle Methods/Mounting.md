# Mounting Phase Methods

## `constructor(props)`

- First method that gets called upon a component's creation

- Unless you have to initialize the state or bind event handlers, you can avoid
writing it

- It is the only place you can directly modify `state`

- Any side-effects or use of `setState` should be *avoided* in constructors

- Calling `setState` here can trigger warnings and/or errors as the component
isn't mounted yet

## `getDerivedStateFromProps(nextState, prevProps)`

- It is a `static` method used to update the state of a component based on
the props received from the parent component

- If present, it is called right after the `constructor`

- It either returns a plain JS object to update the state or `null` if no
changes should be made

- It should be a *pure function* and side-effects should be *avoided*

- State changes are impossible as the method is `static`

- It is rarely used as it's risky and violates React's *single source of truth*
policy

## `render()`

- It is the only required function for a class component and the second (or
third if the above method is used) method called

- It should be a *pure function* and as such side-effects should be *avoided*

- State changes should also be avoided here as it would throw the app in an
infinite loop

## `componentDidMount()`

- It is invoked last when a component and all its children are successfully
mounted to the DOM

- *Side-effects* should be performed in this method

- State changes can be made here, though keep in mind it'll lead to an
immediate re-render

- Example usage: initialise the state in the constructor, then call the API to
fill it with values in this function
