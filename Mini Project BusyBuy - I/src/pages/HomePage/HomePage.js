import styles from "./HomePage.module.css"
import FilterSidebar from "../../components/FilterSidebar/FilterSidebar"
import { useProducts } from "../../context/Products/ProductContext"
import Loader from "../../components/UI/Loader/Loader"
import ProductList from "../../components/Product/ProductList/ProductList"
import { useEffect, useState } from "react"
import { useCart } from "../../context/Cart/CartContext"
import { useNavigate } from "react-router-dom"

function HomePage()
{
    // Fetch products and the current user's cart before mounting
    const {products, areProductsLoading} = useProducts()
    const {cart, isCartLoading, addToCart, decrementItem, removeFromCart} = useCart()
    // Re-render the products if the search or filter parameters change
    const [filteredProducts, setFilteredProducts] = useState(products)
    const [priceRange, setPriceRange] = useState(75000)
    const [categories, setCategories] = useState([])
    const [search, setSearch] = useState("")
    useEffect(() => {
        setFilteredProducts(products.filter(product => (
            (categories.length === 0 || categories.includes(product.category)) &&
            product.price <= priceRange &&
            (search === "" || product.title.toLowerCase().includes(search.toLowerCase()))
        )))
    }, [products, search, priceRange, categories])
    const navigate = useNavigate()
    async function add(productId)
    {
        console.log(cart)
        cart === undefined ? navigate("/signin") : await addToCart(productId)
    }
    // Display loader while products and cart are fetching
    return (areProductsLoading || isCartLoading) ? <Loader /> : (
        <div className={styles.homePageContainer}>
            <FilterSidebar
                priceRange={priceRange} setPriceRange={setPriceRange}
                setCategories={setCategories}
            />
            <form className={styles.form} onSubmit={e => e.preventDefault()}>
                <input 
                    type="search" placeholder="Search By Name" 
                    className={styles.searchInput} 
                    onChange={e => setSearch(e.target.value)}
                />
            </form>
            {/* Display the list of products */}
            <ProductList
                products={filteredProducts} onCart={false} addToCart={add}
                decrementItem={decrementItem} removeFromCart={removeFromCart}
            />
        </div>
    )
}
export default HomePage
