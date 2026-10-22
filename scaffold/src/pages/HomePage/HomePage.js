import React, { useEffect, useState, useContext } from "react";
import styles from "./HomePage.module.css";
import FilterSidebar from "../../components/FilterSidebar/FilterSidebar";

function HomePage() {


  // Write logic to Fetch products on app mount

  // Write logic to Rerender the products if the search or filter parameters change

  // Display loader while products are fetching

  return (
    <div className={styles.homePageContainer}>
      <FilterSidebar/>
      <form className={styles.form}>
        <input
          type="search"
          placeholder="Search By Name"
          className={styles.searchInput}
        />
      </form>
      {/* Write logic to display the product using the ProductList */}
    </div>
  );
}

export default HomePage;
