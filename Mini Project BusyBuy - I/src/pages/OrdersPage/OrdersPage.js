import { useEffect, useState } from "react";
import styles from "./OrdersPage.module.css";
import { useAuth } from "../../context/Auth/AuthContext";
import { fetchOrders } from "../../data/Orders";
import Loader from "../../components/UI/Loader/Loader";
import OrderTable from "../../components/OrderTable/OrderTable";

function OrdersPage()
{
    // Fetch user orders from firestore
    const [orders, setOrders] = useState([])
    const [loading, setLoading] = useState(true)
    const { user } = useAuth()
    useEffect(() => {
        fetchOrders(user.id)
        .then(setOrders)
        .finally(() => setLoading(false))
    }, [user])
    if(loading)
    {
        return <Loader />
    }
    return orders.length === 0 ? 
    <h1 style={{ textAlign: "center" }}>No Orders Found!</h1> : 
    (
        <div className={styles.ordersContainer}>
        <h1>Your Orders</h1>
        {orders.map(order => <OrderTable order={order} />)}
        </div>
    );
};

export default OrdersPage;
