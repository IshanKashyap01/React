import React, { useEffect } from "react";
import Loader from "../../components/UI/Loader/Loader";
import ProductList from "../../components/Product/ProductList/ProductList";
import styles from "./CartPage.module.css";

const CartPage = () => {

  // Fetch all cart products for the user

  const purchaseProductsHandler = async () => {
    // Write code to purchase the item present in the cart
    // Redirect the user to orders page after successful purchase
    // Clear the item present in the cart after successful purchase
  };


  if (loading) return <Loader />;

  return (
    <div className={styles.cartPageContainer}>
      {/*cartProduct here is the array of item present in the cart for the user yu can change this as per your need */}
      {!!cartProducts?.length && (
        <aside className={styles.totalPrice}>
          <p>TotalPrice:- ₹{}/-</p>
          <button
            className={styles.purchaseBtn}
            onClick={}
          >
            {purchasing ? "Purchasing" : "Purchase"}
          </button>
        </aside>
      )}
      {!!cartProducts?.length ? (
        <ProductList />
      ) : (
        <h1>Cart is Empty!</h1>
      )}
    </div>
  );
};

export default CartPage;
