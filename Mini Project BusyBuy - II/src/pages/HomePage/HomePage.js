import React, { useEffect, useState } from "react";
import styles from "./HomePage.module.css";
import ProductList from "../../components/Product/ProductList/ProductList";
import FilterSidebar from "../../components/FilterSidebar/FilterSidebar";


function HomePage() {
  const [query, setQuery] = useState("");
  const [priceRange, setPriceRange] = useState(75000);
  const [categories, setCategories] = useState({
    mensFashion: false,
    electronics: false,
    jewelery: false,
    womensClothing: false,
  });

  // Fetch products on app mount

  // Rerender the products if the search or filter parameters change

  // Display loader while products are fetching using the Loader Component

  return (
    <div className={styles.homePageContainer}>
      <FilterSidebar
        setPriceRange={setPriceRange}
        setCategories={setCategories}
        priceRange={priceRange}
      />
      <form className={styles.form}>
        <input
          type="search"
          placeholder="Search By Name"
          className={styles.searchInput}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </form>
      
      {products.length ? (
        <ProductList />
      ) : null}
    </div>
  );
}

export default HomePage;
