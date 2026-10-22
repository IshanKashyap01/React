import React, { useEffect, useContext } from "react";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/Navbar/Navbar";

function App() {


  return (
    <div className="App">
      {/* Define your ContextProvider */}
        <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />

        <header>
          <Navbar />
        </header>
        {/* Define your routes here for 
        "/"     ->   HomePage
        "/signup"   ->   RegisterPage
        "/signin"   ->   LoginPage
        "/cart"     ->   CartPage
        "/myorders" ->   OrdersPage
        "/*"        ->   NotFoundPage
        */}
        
    </div>
  );
}

export default App;
