import { Component } from "react";
import MovieList from "./components/MovieList";
import Navbar from "./components/Navbar";

export default class App extends Component
{
    constructor()
    {
        super()
        this.state = {
            cart: []
        }
    }

    render()
    {
        return (
            <>
                <header className="header">
                    <h1>Movie Flix</h1>
                    <Navbar cart = {this.state.cart}/>
                </header>
                <MovieList 
                    addToCart = {(movie) => this.addToCart(movie)}
                    removeFromCart = {(movie) => this.removeFromCart(movie)}
                />
            </>
        );
    }

    addToCart(movie)
    {
        this.setState(prev => ({cart: [...prev.cart, movie]}))
    }

    removeFromCart(movie)
    {
        this.setState(prev => ({cart: prev.cart.filter(m => m.id !== movie.id)}))
    }
}