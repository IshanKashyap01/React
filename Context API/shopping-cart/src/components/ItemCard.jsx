import styles from '../styles/ItemCard.module.css'
import { useCart } from '../contexts/CartContext'

function ItemCard({ item })
{
    const {id, name, price} = item
    const {addItem, removeItem} = useCart()
    return (
        <div className={styles.itemCard}>
        <div className={styles.itemName}>{name}</div>
        <div className={styles.itemPrice}> &#x20B9;{price}</div>
        <div className={styles.itemButtonsWrapper}>
            <button className={styles.itemButton} onClick={() => addItem(item)}>
            Add
            </button>
            <button className={styles.itemButton} onClick={() => removeItem(id)}>
            Remove
            </button>
        </div>
        </div>
    )
}

export default ItemCard
