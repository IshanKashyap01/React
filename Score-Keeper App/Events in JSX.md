# Events in JSX

- Suppose you have a web app that displays information and updates it when some
events occur

- Recall that React allows us to couple the UI and the rendering (the updated
info) logic

- To handle an event in HTML, typically, you add an event listener through JS

- In React, you add the event to be listened, and the callback function in JSX

```jsx
<button onClick={addWicket}>Wicket</button>
```

- However, to reflect the changes in the app's state in the UI, you'll need to
re-render your root component

- React will automatically figure out the nodes that have changed and only
update those
