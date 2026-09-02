# Styled Components

- First you'll need to install the `styled-components` library through `npm` in
your project

```jsx
import styled from 'styled-components'

const CartCount = styled.span`
    visibility: ${props => props.$show ? "visible" : "hidden"};
    background: orange;
    border-radius: 50%;
    padding: 0.25rem 0.5rem;
    position: absolute;
    right: 0;
    top: -5;
    font-size: 0.75rem;
`

export default function Navbar(props)
{
    return (
        <nav className = "cart-container">
            <span className="cart-icon">🛒</span>
            <CartCount $show = {props.cart.length !== 0}>{props.cart.length}</CartCount>
        </nav>
    )
}
```

- Styled components are React components with their own component-level styling
that can be provided/altered dynamically

- They are preferred over *inline styles* as the syntax remains unchanged from
regular CSS

- They inject the provided styles into the documents `head` via a `style` tag
at runtime
