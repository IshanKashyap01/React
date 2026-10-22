import React, { useState, useContext } from "react";
import styles from "./ProductDetails.module.css";
import MinusIcon from "../../../UI/Icons/MinusIcon";
import PlusIcon from "../../../UI/Icons/PlusIcon";


const ProductDetails = ({
  title,
  onCart,
}) => {
  const [productAddingToCart, setProductAddingToCart] = useState(false);
  const [productRemovingFromCart, setProductRemovingCart] = useState(false);

// Create a Function to add product to cart

// Create a new cart if it does not exist

// Create a function to remove the cart

  //Create a Function for Handling the product quantity increase
  
  //Create a function for  Handling the product quantity decrease

  return (
    <div className={styles.productDetails}>
      <div className={styles.productName}>
        <p>{`${title.slice(0, 35)}...`}</p>
      </div>
      <div className={styles.productOptions}>
        {/* <p>₹ {price}</p> */}
        {onCart && (
          <div className={styles.quantityContainer}>
            <MinusIcon handleRemove={} />
            {}
            <PlusIcon handleAdd={} />
          </div>
        )}
      </div>
      {/* Conditionally Rendering buttons based on the screen */}
      {!onCart ? (
        <button
          className={styles.addBtn}
          title="Add to Cart"
        >
          {productAddingToCart ? "Adding" : "Add To Cart"}
        </button>
      ) : (
        <button
          className={styles.removeBtn}
          title="Remove from Cart"
        >
          {productRemovingFromCart ? "Removing" : "Remove From Cart"}
        </button>
      )}
    </div>
  );
};

export default ProductDetails;
