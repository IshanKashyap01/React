import styles from "./FilterSidebar.module.css"

export default function FilterSidebar({ setCategories, setPriceRange, priceRange })
{
    function handleCategories(event)
    {
        const {value, checked} = event.target
        setCategories(prev => checked ? [...prev, value] : prev.filter(c => c !== value))
    }
    return (
        <aside className={styles.filterContainer}>
            <h2>Filter</h2>
            <form>
                <label htmlFor="price">Price: {priceRange}</label>
                <input
                    type="range" id="price" name="price" min="1" max="100000"
                    className={styles.priceRange} step="10" value={priceRange}
                    onChange={e => setPriceRange(e.target.value)}
                />
                <h2>Category</h2>
                <div className={styles.categoryContainer}>
                    <div className={styles.inputContainer}>
                        <input 
                            type="checkbox" id="mensFashion" name="mensFashion"
                            value="men's clothing" onChange={handleCategories}
                        />
                        <label htmlFor="mensFashion">Men's Clothing</label>
                    </div>
                    <div className={styles.inputContainer}>
                        <input 
                            type="checkbox" id="womensFashion" name="womensFashion"
                            value="women's clothing" onChange={handleCategories}
                        />
                        <label htmlFor="womensFashion">Women's Clothing</label>
                    </div>
                    <div className={styles.inputContainer}>
                        <input 
                            type="checkbox" id="jewelery" name="jewelery"
                            value="jewelery" onChange={handleCategories}
                        />
                        <label htmlFor="jewelery">Jewelery</label>
                    </div>
                    <div className={styles.inputContainer}>
                        <input 
                            type="checkbox" id="electronics" name="electronics"
                            value="electronics" onChange={handleCategories}
                        />
                        <label htmlFor="electronics">Electronics</label>
                    </div>
                </div>
            </form>
        </aside>
    )
}