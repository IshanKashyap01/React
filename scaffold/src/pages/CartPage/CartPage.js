import React, { useEffect, useContext, useState } from "react";
import Loader from "../../components/UI/Loader/Loader";
import styles from "./CartPage.module.css";

const CartPage = () => {

  // Write logic to Clear user cart

  // Write logic to Fetch user cart products

  // Write logic to Remove product from cart and cart products list

  // Write logic to Remove product from the database

  if (loading) return <Loader />;

  return (
    <div className={styles.cartPageContainer}>
      (
      {/* write code here to display the item in the cart if there are items present in the cart. */}
      ) : (
        <h1>Cart is Empty!</h1>
      )
    </div>
  );
};

export default CartPage;
