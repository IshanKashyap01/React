import styles from '../styles/CartModal.module.css'
import { useCart } from '../contexts/CartContext'
import CartItem from './CartItem'

export default function CartModal({close})
{
    const {total, cart, clearCart} = useCart()
    return <>
        <div className={styles.cartModal}>
            <div className={styles.closeButton} onClick={close}>
                Close
            </div>
            <div className={styles.clearButton} onClick={clearCart}>
                Clear
            </div>
            <div className={styles.itemContainer}>
                {Object.values(cart).map(cartItem => (
                    <CartItem 
                        key={cartItem.item.id} name={cartItem.item.name}
                        quantity={cartItem.quantity} price={cartItem.item.price}
                    />
                ))}
            </div>
            <div className={styles.total}>
                <div className={styles.totalText}>Total</div>
                <div className={styles.totalPrice}>&#x20B9;{total}</div>
            </div>
        </div>
    </>
}