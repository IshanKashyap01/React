import styles from '../styles/CartModal.module.css'

export default function CartItem({name, quantity, price})
{
    return <>
        <div className={styles.cartCard}>
            <h1>{name}</h1>
            <h3>{quantity}</h3>
            <h3>&#x20B9;{quantity * price}</h3>
        </div>
    </>
}