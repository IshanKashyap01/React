import { deleteField, doc, getDoc, setDoc, updateDoc } from "firebase/firestore"
import { db } from "../config/firebase"
/**
 * Fetches a user's shopping cart; if it doesn't exists, it creates an empty one
 * @param {String} userId current user's unique Id
 * @returns user's shopping cart
 */
export async function fetchCart(userId)
{
    const snapshot = await getDoc(doc(db, "carts", userId))
    if(!snapshot.exists())
    {
        await createCart(userId)
        return {}
    }
    return {...snapshot.data()}
}
/**
 * Removes a product entirely from the user's cart
 * @param {String} userId current user's id
 * @param {String} productId id of the specified product
 */
export async function removeFromCart(userId, productId)
{
    await updateDoc(doc(db, "carts", userId), {
        [productId]: deleteField()
    })
}
/**
 * Updates the cart by adding new products or updating existing product's
 * quantity
 * @param {String} userId current user's id
 * @param {String} productId id of the specified product
 * @param {Number} quantity number of said products to be placed in the cart
 */
export async function updateCart(userId, productId, quantity)
{
    await updateDoc(doc(db, "carts", userId), {
        [productId]: quantity
    })
}
/**
 * Initialises a cart document for the current user
 * @param {String} userId current user's id
 */
async function createCart(userId)
{
    await setDoc(doc(db, "carts", userId), {})
}