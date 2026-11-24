import React, { useState, useEffect } from "react";
import Loader from "../../components/UI/Loader/Loader";
import styles from "./OrdersPage.module.css";
import OrderTable from "../../components/OrderTable/OrderTable";


const OrdersPage = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetch user orders from firestore
 
  if (loading) {
    return <Loader />;
  }

  if (!loading && !orders.length)
    return <h1 style={{ textAlign: "center" }}>No Orders Found!</h1>;

  return (
    <div className={styles.ordersContainer}>
      <h1>Your Orders</h1>
      {orders.map((order, idx) => {
        return <OrderTable order={order} key={idx} />;
      })}
    </div>
  );
};

export default OrdersPage;
