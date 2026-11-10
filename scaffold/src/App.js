import "./App.css"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import Navbar from "./components/Navbar/Navbar"
import { Navigate, Outlet, Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage/HomePage"
import RegisterPage from "./pages/RegisterPage/RegisterPage"
import LoginPage from "./pages/LoginPage/LoginPage"
import CartPage from "./pages/CartPage/CartPage"
import OrdersPage from "./pages/OrdersPage/OrdersPage"
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage"
import { useAuth } from "./context/Auth/AuthContext"
import { CartContextProvider } from "./context/Cart/CartContext"
import { ProductContextProvider } from "./context/Products/ProductContext"

function App()
{
    return (
        <div className="App">
        {/* Define your ContextProvider */}
            <ToastContainer 
                position="top-right" autoClose={2000} hideProgressBar={false} newestOnTop={false} 
                closeOnClick pauseOnFocusLoss draggable pauseOnHover
            />
            <header>
                <Navbar />
            </header>
            <Routes>
                <Route element={<ProductWrapper />}>
                    <Route element={<CartWrapper />}>
                        <Route path="/" element = {<HomePage />} />
                        <Route path="/cart" element = {<PrivateRoute><CartPage /></PrivateRoute>} />
                    </Route>
                </Route>
                <Route path="/signup" element = {<RegisterPage />} />
                <Route path="/signin" element = {<LoginPage />} />
                <Route path="/myorders" element = {<PrivateRoute><OrdersPage /></PrivateRoute>} />
                <Route path="/*" element = {<NotFoundPage />} />
            </Routes>
        </div>
  )
}

function PrivateRoute({children})
{
    const {user} = useAuth()
    return user ? children : <Navigate to="/signin" replace />
}

function CartWrapper()
{
    return (
        <CartContextProvider>
            <Outlet />
        </CartContextProvider>
    )
}

function ProductWrapper()
{
    return (
        <ProductContextProvider>
            <Outlet />
        </ProductContextProvider>
    )
}

export default App
