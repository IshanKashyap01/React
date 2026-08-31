# Props and State

- Only one component owns a state and shares it as *props* to all child
components that need it

- Any and all mutations to the state are handled by the parent component as
props are immutable

- The changes to the state are then automatically reflected in the children as
well

## Example Usage

```jsx
public class Parent extends Component
{
    render()
    {
        return (
            <>
                {this.state.data.map(record => <Child key = {record.id} record = {record}/>)}
            </>
        )
    }
}
```

- In the above code, the `Parent` passes its state as props (`record`) to the
`Child`

```jsx
function Child(props)
{
    return <p>name: {props.data.name}</p>
}
```

- The child can use the prop but should not make any changes to it

- The parent can pass callback functions as props that the child can use for
event handling

- Thus keeping mutation logic exclusively to the parent
