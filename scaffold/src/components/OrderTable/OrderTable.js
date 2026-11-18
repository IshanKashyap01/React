import styles from "./OrderTable.module.css";
import { convertDate } from "../../utils/utils";

// Component to display user order in table format
function OrderTable({ order })
{
    const {id, items, totalPrice, date} = order
    return (
        <div style={{ textAlign: "center", marginTop: "2rem" }}>
        {date && <h2>Ordered On:- {convertDate(date)}</h2>}
        <table className={styles.table}>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total Price</th>
                </tr>
            </thead>
            <tbody>
                {items.map(item => (
                    <tr key={id}>
                        <td>{item.title.slice(0, 25) + "..."}</td>
                        <td>{`₹ ${item.price} `}</td>
                        <td>{`${item.quantity} `}</td>
                        <td>{`₹ ${item.quantity * item.price}`}</td>
                    </tr>
                ))}
            <tr></tr>
            </tbody>
            <tr className={styles.totalPrice}>
            <td>
                {totalPrice}
            </td>
            </tr>
        </table>
        </div>
    );
};

export default OrderTable;
