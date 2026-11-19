import { collection, doc, getDocs, writeBatch } from "firebase/firestore";
import { db } from "../config/firebase";
/**
 * Stores the order in the database and clears the user's cart
 * @param {String} userId current user's Id
 * @param {Array} items all items to be purchased
 * @param {Number} totalPrice total cost of the order
 */
export async function placeOrder(userId, items, totalPrice)
{
    const batch = writeBatch(db)
    const ordersRef = collection(db, "users", userId, "orders")
    // creates a new order in the database
    batch.set(doc(ordersRef), {
        items,
        totalPrice,
        date: Date.now()
    })
    batch.set(doc(db, "carts", userId), {})
    await batch.commit()
}
/**
 * Fetches the list of orders made by the current user
 * @param {String} userId current user's Id
 * @returns all orders
 */
export async function fetchOrders(userId)
{
    const snapshot = await getDocs(collection(db, "users", userId, "orders"))
    return snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
    }))
}