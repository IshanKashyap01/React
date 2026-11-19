import Loader from "../../components/UI/Loader/Loader"
import styles from "./CartPage.module.css"
import { useCart } from "../../context/Cart/CartContext"
import { useProducts } from "../../context/Products/ProductContext"
import ProductList from "../../components/Product/ProductList/ProductList"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import { useEffect, useRef } from "react"

export default function CartPage()
{
    // Fetch products and the current user's cart before mounting
    const {products, areProductsLoading} = useProducts()
    const {cart, isCartLoading, addToCart, decrementItem, removeFromCart, checkout} = useCart()
    const navigate = useNavigate()
    const [items, totalPrice] = getOrder(products, cart)
    const initialLoadRef = useRef(false)
    useEffect(() => {
        if(!isCartLoading && !areProductsLoading && !initialLoadRef.current)
        {
            initialLoadRef.current = true
            if(items.length === 0)
            {
                toast.error("No products in Cart!")
            }
        }
    }, [isCartLoading, areProductsLoading, items.length])
    // Display loader while products and cart are fetching
    return (areProductsLoading || isCartLoading) ? <Loader /> :
    items.length === 0 ? <h1>Cart is Empty!</h1> :
    <>
        <div className={styles.totalPrice}>
            <p>Total: ₹ {totalPrice}</p>
            <button 
                className={styles.purchaseBtn}
                onClick={async () => {
                    await checkout(items, totalPrice)
                    .then(() => navigate("/myorders"))
                }}
            >
                Purchase
            </button>
        </div>
        <div className={styles.cartPageContainer}>
            <ProductList
                products={items} onCart={true} addToCart={addToCart}
                decrementItem={decrementItem} removeFromCart={removeFromCart}
            />
        </div>
    </>
}

function getOrder(products, cart)
{
    let totalPrice = 0
    const items = products.reduce((arr, product) => {
        const quantity = Number(cart[product.id])
        if(quantity)
        {
            arr.push({...product, quantity})
            totalPrice += Number(product.price) * quantity
        }
        return arr
    }, [])
    return [items, totalPrice]
}