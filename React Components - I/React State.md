# React State

- It is a built-in object that stores dynamic data and triggers automatic UI
re-renders when updated

- It is private and supposed to be the *single source of truth* for its
component

- Following is how to use it in a class component:

```jsx
export default class Card extends Component
{
    constructor()
    {
        super()
        this.state = {
            name: "Ishan",
            phone: "1234",
            address: "abc, xyz, street"
        }
    }

    render()
    {
        // destructure the values stored in state
        const {name, phone, address} = this.state
        // use them in the component
        return <div>
            <p>name: {name}</p>
            <p>phone: {phone}</p>
            <p>address: {address}</p>
        </div>
    }
}
```
