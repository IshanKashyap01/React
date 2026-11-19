import styles from '../styles/Total.module.css'
import { useCart } from '../contexts/CartContext'

function Navbar({toggleCart})
{
    const {size, total, clearCart} = useCart()
    return <>
        <div className={styles.container}>
        <h1>Total: &#x20B9;{total}</h1>
        <h1>Items: {size}</h1>
        <button className={styles.button} onClick={toggleCart} >Cart</button>
        <button className={styles.button} onClick={clearCart} >Reset Cart</button>
        </div>
    </>
}

export default Navbar
