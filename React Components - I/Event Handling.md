# Event Handling with React State

```jsx
handleEvent()
{
    console.log(this.state)
}
render()
{
    return <button onClick={() => this.handleEvent()}>Press Me!</button>
}
```

- If instead you pass a reference to a handler function that uses `this`, you
must bind the current object to it first

```jsx
<button onClick={this.handleEvent.bind(this)}>Press Me!</button>
```
