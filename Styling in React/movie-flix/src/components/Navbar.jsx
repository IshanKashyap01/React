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