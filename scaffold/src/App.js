import "./App.css"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import Navbar from "./components/Navbar/Navbar"
import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage/HomePage"
import RegisterPage from "./pages/RegisterPage/RegisterPage"
import LoginPage from "./pages/LoginPage/LoginPage"
import CartPage from "./pages/CartPage/CartPage"
import OrdersPage from "./pages/OrdersPage/OrdersPage"
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage"

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
                <Route path="/" element = {<HomePage />} />
                <Route path="/signup" element = {<RegisterPage />} />
                <Route path="/signin" element = {<LoginPage />} />
                <Route path="/cart" element = {<CartPage />} />
                <Route path="/myorders" element = {<OrdersPage />} />
                <Route path="/*" element = {<NotFoundPage />} />
            </Routes>
        </div>
  )
}

export default App
