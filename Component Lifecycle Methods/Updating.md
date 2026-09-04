# Updating Phase Methods

## `getDerivedStateFromProps(nextProps, prevState)`

If present, it is the first method called in the updating phase

## `shouldComponentUpdate(nextProp, nextState)`

- Returns a boolean value that indicates whether the component should re-render
or not

- By default, it returns `true` so the component is re-rendered every time its
state/props changes

- It is a *pure function* meant for fast boolean checks to optimise performance
and shouldn't have state changes or side effects

- Though *rarely* used, you can override this method to specify custom updation
policy based on state/props changes

## `render()`

Generates the component based on the new states and props provided

## `getSnapShotBeforeUpdate(prevProp, prevState)`

- It gets invoked after `render()` but before the component is updated in the
DOM

- It allows you to capture physical information from the DOM

- It is used to keep the view locked in place instead of when new elements
appear at the top

- Moreover, it can also be used to calculate precise element sizes, offsets,
etc.

- It should not change states or have any side-effects other than reading DOM
measurements

- It is *rarely* used as its uses are a niche, it can pass stale data and is
too low level compared to alternatives

- Furthermore, it can pass stale data when rendering asynchronously

## `componentDidUpdate(prevProp, prevState, snapShot)`

- Last method to be called in this phase, gets the return value of the previous
method implicitly as its third parameter

- It is the same as `componentDidMount()` except it is called every time the
component successfully updates
