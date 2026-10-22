import React, { useState, useEffect, useContext } from "react";
import styles from "./OrdersPage.module.css";

const OrdersPage = () => {

  // Fetch user orders from firestore

  // if(write condition when there are no order present and the loader has been set to false)
    return <h1 style={{ textAlign: "center" }}>No Orders Found!</h1>;

  return (
    <div className={styles.ordersContainer}>
      <h1>Your Orders</h1>
      display the order content using the OrderTable component.
    </div>
  );
};

export default OrdersPage;
