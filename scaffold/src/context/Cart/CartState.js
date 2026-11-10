import { useEffect, useState } from "react";
import { fetchCart, removeFromCart, updateCart } from "../../data/Cart";
import { toast } from "react-toastify"
/**
 * Returns an API for maintaining the cart functionality for the current user.
 * If user isn't logged in, it returns only the loading state of the cart data.
 * 
 * It updates the database before the local state
 * @param {String} userId current user's id
 * @returns cart state for the current user
 */
export default function CartState(userId)
{
    const [cart, setCart] = useState({})
    const [isCartLoading, setLoading] = useState(false)
    useEffect(() => {
        if(userId)
        {
            setLoading(true)
            loadCart(userId, setCart)
            .finally(() => setLoading(false))
        }
    }, [userId])

    async function add(productId)
    {
        const quantity = cart[productId] ? cart[productId] + 1 : 1
        await updateCart(userId, productId, quantity)
        .then(() => {
            setCart(prev => ({...prev, [productId]: quantity}))
            toast("Product Added Successfully!")
        })
        .catch(() => toast("Failed to add product!"))
    }
    async function remove(productId)
    {
        await removeFromCart(userId, productId)
        .then(() => {
            setCart(prev => {
                const updatedCart = {...prev}
                delete updatedCart[productId]
                return updatedCart
            })
            toast("Product Removed Successfully!")
        })
        .catch(() => toast("Failed to remove product!"))
    }
    async function decrement(productId)
    {
        await updateCart(userId, productId, cart[productId] - 1)
        .then(() => {
            setCart(prev => ({...prev, [productId]: cart[productId] - 1}))
            toast("Product Quantity Decreased!")
        })
        .catch(() => toast("Failed to decrease product quantity!"))
    }
    return !userId ? {isCartLoading} : {
        cart,
        isCartLoading,
        addToCart: async productId => await add(productId),
        /**
         * Decreases the quantity of the specified product by 1 or removes it
         * if it is already singular
         * @param {String} productId id of the specified product
         */
        decrementItem: async productId => await (cart[productId] === 1 ? remove : decrement)(productId),
        removeFromCart: async productId => await remove(productId)
    }
}

async function loadCart(userId, setCart)
{
    const cart = await fetchCart(userId)
    setCart({...cart})
}