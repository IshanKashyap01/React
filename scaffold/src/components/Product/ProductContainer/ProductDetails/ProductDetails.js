import React, { useState } from "react"
import styles from "./ProductDetails.module.css"
import MinusIcon from "../../../UI/Icons/MinusIcon"
import PlusIcon from "../../../UI/Icons/PlusIcon"


function ProductDetails(
    {
        title, price, productId, quantity, onCart, addToCart,
        decrementItem, removeFromCart
    }
    )
{
    const [productAddingToCart, isAdding] = useState(false)
    const [productRemovingFromCart, isRemoving] = useState(false)
    // Function to add product to cart
    async function add()
    {
        isAdding(true)
        await addToCart(productId)
        .finally(() => isAdding(false))
    }
    // Function to remove an item from the cart
    async function remove(action)
    {
        isRemoving(true)
        await action(productId)
        .finally(() => isRemoving(false))
    }
    return (
        <div className={styles.productDetails}>
        <div className={styles.productName}>
            <p>{`${title.slice(0, 35)}...`}</p>
        </div>
        <div className={styles.productOptions}>
            <p>₹ {price}</p>
            {onCart && (
            <div className={styles.quantityContainer}>
                <MinusIcon handleRemove={() => {remove(decrementItem)}} />
                {}
                <PlusIcon handleAdd={add} />
            </div>
            )}
        </div>
        {/* Conditionally Rendering buttons based on the screen */}
        {!onCart ? (
            <button
            className={styles.addBtn}
            title="Add to Cart"
            onClick={add}
            >   
            {productAddingToCart ? "Adding" : "Add To Cart"}
            </button>
        ) : (
            <button
            className={styles.removeBtn}
            title="Remove from Cart"
            onClick={() => remove(removeFromCart)}
            >
            {productRemovingFromCart ? "Removing" : "Remove From Cart"}
            </button>
        )}
        </div>
    )
}

export default ProductDetails
