import { Component } from "react";

export default class MovieCard extends Component
{
    constructor()
    {
        super()
        this.state = {
            title: "The Avengers",
            plot: "Science Fantasy",
            price: 199,
            rating: 9.3,
            stars: 0
        }
    }

    addStar()
    {
        if(this.state.stars === 5)
        {
            return
        }
        this.setState({stars: this.state.stars + 1})
    }

    removeStar()
    {
        if(this.state.stars === 0)
        {
            return
        }
        this.setState((prev) => {
            return {
                stars: prev.stars - 1
            }
        })
    }

    render()
    {
        const {title, plot, price, rating, stars} = this.state
        return <>
            <main className="main">
                <article className="movie-card">
                    <div className="left">
                        <img alt="Poster" src="https://i.pinimg.com/474x/3c/b4/28/3cb428f7b5e7246ee9c2727862e423e4.jpg"/>
                    </div>
                    <div className="right">
                        <p className="title">{title}</p>
                        <p className="plot">{plot}</p>
                        <p className="price">Rs. {price}</p>
                    <footer className="footer">
                        <p className="rating">{rating}</p>
                        <div className="star-dis">
                            <button className="str-btn" onClick={() => this.removeStar()}>-</button>
                            <span className="star">⭐</span>
                            <span className="starCount">{stars}</span>
                            <button className="str-btn" onClick={() => this.addStar()}>+</button>
                        </div>
                        <button className="favourite-btn">Favourite</button>
                        <button className="cart-btn">Add to Cart</button>
                    </footer>
                    </div>
                </article>
            </main>
        </>
    }
}