import Loader from "../../components/UI/Loader/Loader"
import styles from "./CartPage.module.css"
import { useCart } from "../../context/Cart/CartContext"
import { useProducts } from "../../context/Products/ProductContext"
import ProductList from "../../components/Product/ProductList/ProductList"

export default function CartPage()
{
    // Fetch products and the current user's cart before mounting
    const {products, areProductsLoading} = useProducts()
    const {cart, isCartLoading, addToCart, decrementItem, removeFromCart} = useCart()
    let total = 0
    const items = products.reduce((arr, product) => {
        const quantity = Number(cart[product.id])
        if(quantity)
        {
            arr.push({...product, quantity})
            total += Number(product.price) * quantity
        }
        return arr
    }, [])
    // Display loader while products and cart are fetching
    if(areProductsLoading || isCartLoading)
    {
        return <Loader />
    }
    if(items.length === 0)
    {
        return <h1>Cart is Empty!</h1>
    }
    return <>
        <div className={styles.totalPrice}>
            <p>Total: ₹ {total}</p>
            <button className={styles.purchaseBtn} onClick={() => {}}>
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