import styles from "./HomePage.module.css"
import FilterSidebar from "../../components/FilterSidebar/FilterSidebar"
import useProducts from "../../context/Products/Products"
import Loader from "../../components/UI/Loader/Loader"
import ProductList from "../../components/Product/ProductList/ProductList"
import { useEffect, useState } from "react"

function HomePage()
{
    // Write logic to Fetch products on app mount
    const {products, loading} = useProducts()
    // Write logic to Rerender the products if the search or filter parameters change
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
    // Display loader while products are fetching
    return loading ? <Loader /> : (
        <div className={styles.homePageContainer}>
            <FilterSidebar priceRange={priceRange} setPriceRange={setPriceRange} setCategories={setCategories} />
            <form className={styles.form} onSubmit={e => e.preventDefault()}>
                <input 
                    type="search" placeholder="Search By Name" className={styles.searchInput}
                    onChange={e => setSearch(e.target.value)}
                />
            </form>
            {/* Write logic to display the product using the ProductList */}
            <ProductList products={filteredProducts}  />
        </div>
    )
}

export default HomePage
