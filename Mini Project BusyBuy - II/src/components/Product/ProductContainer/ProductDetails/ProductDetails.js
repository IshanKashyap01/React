import React, { useState } from "react";
import styles from "./ProductDetails.module.css";
import { useNavigate } from "react-router-dom";
import MinusIcon from "../../../UI/Icons/MinusIcon";
import PlusIcon from "../../../UI/Icons/PlusIcon";

const ProductDetails = ({ title, price, productId, onCart, quantity }) => {
  const [productAddingToCart, setProductAddingToCart] = useState(false);
  const [productRemovingFromCart, setProductRemovingCart] = useState(false);

  const navigate = useNavigate();


  const addProductToCart = async () => {
      // Function to add product to cart
  };
  const removeProduct = async () => {
    // Function to remaove the cart
  };


  const handleAdd = async () => {
  // Function for Handling the product quantity increase
  };

  const handleRemove = async () => {
  // Handling the product quantity decrease
  };

  return (
    <div className={styles.productDetails}>
      <div className={styles.productName}>
        <p>{`${title.slice(0, 35)}...`}</p>
      </div>
      <div className={styles.productOptions}>
        <p>₹ {price}</p>
        {onCart && (
          <div className={styles.quantityContainer}>
            <MinusIcon handleRemove={handleRemove} />
            {quantity}
            <PlusIcon handleAdd={handleAdd} />
          </div>
        )}
      </div>
      {/* Conditionally Rendering buttons based on the screen */}
      {!onCart ? (
        <button
          className={styles.addBtn}
          title="Add to Cart"
          disabled={productAddingToCart}
          onClick={addProductToCart}
        >
          {productAddingToCart ? "Adding" : "Add To Cart"}
        </button>
      ) : (
        <button
          className={styles.removeBtn}
          title="Remove from Cart"
          onClick={removeProduct}
        >
          {productRemovingFromCart ? "Removing" : "Remove From Cart"}
        </button>
      )}
    </div>
  );
};

export default ProductDetails;
