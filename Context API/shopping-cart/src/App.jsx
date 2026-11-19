import { useState } from 'react'
import './App.css'
import Items from './components/Items'
import Navbar from './components/Navbar'
import CartContextProvider from './contexts/CartContext'
import CartModal from './components/CartModal'

function App()
{
    const [cart, toggleCart] = useState(false)
    return <>
        <div className='App'>
            <h2>Shopping Cart</h2>
            <CartContextProvider>
                {cart && <CartModal close = {() => toggleCart(false)} />}
                <Navbar toggleCart = {() => toggleCart(prev => !prev)} />
                <Items />
            </CartContextProvider>
        </div>
    </>
}
export default App
