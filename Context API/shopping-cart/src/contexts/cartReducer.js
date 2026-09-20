export const defaultState = { total: 0, cart: {}, size: 0 }
// to manipulate the state
export default function cartReducer(state, action) 
{
    switch (action.type)
    {
        case 'add': return addItem(state, action)
        case 'remove': return removeItem(state, action)
        case 'reset': return {...defaultState}
        default: return state
    }
}

function addItem(state, action)
{
    const { total, cart, size } = state
    const item = action.item
    const { id, price } = item
    return {
        total: total + price,
        cart: {
            ...cart,
            [id]: {
                item,
                quantity: (cart[id]?.quantity || 0) + 1
            },
        },
        size: size + 1
    }
}

function removeItem(state, action)
{
    const { total, cart, size } = state
    const id = action.id
    if (!cart[id]) {
        return state
    }
    const updatedCart = { ...cart }
    if (updatedCart[id].quantity === 1)
    {
        delete updatedCart[id]
    }
    else
    {
        updatedCart[id] = {
            ...updatedCart[id],
            quantity: (updatedCart[id]?.quantity || 0) - 1
        }
    }
    return {
        total: total - cart[id].item.price,
        cart: updatedCart,
        size: size - 1
    }
}
