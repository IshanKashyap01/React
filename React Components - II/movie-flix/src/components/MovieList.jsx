import { Component } from "react";
import MovieCard from "./MovieCard";
import { movies } from "../movies";

export default class MovieList extends Component
{
    constructor()
    {
        super()
        this.state = {movies: movies}
    }

    render()
    {
        return (
            <main className="main">
                {this.state.movies.map((movie, index) => <MovieCard
                    key={index} movie = {movie}
                    addStar = {() => this.addStar(movie)}
                    removeStar = {() => this.removeStar(movie)}
                    toggleFavourite = {() => this.toggleFavourite(movie)}
                    toggleCart = {() => this.toggleCart(movie)}
                />
                )}
            </main>
        )
    }

    addStar(clickedMovie)
    {
        if(clickedMovie.stars >= 5)
        {
            return
        }
        const updatedMovies = this.state.movies.map(movie => {
            if(clickedMovie === movie)
            {
                return {...clickedMovie, stars: clickedMovie.stars + 1}
            }
            return movie
        })
        this.setState({movies: updatedMovies})
    }

    removeStar(clickedMovie)
    {
        if(clickedMovie.stars <= 0)
        {
            return
        }
        const updatedMovies = this.state.movies.map(movie => {
            if(clickedMovie === movie)
            {
                return {...clickedMovie, stars: clickedMovie.stars - 1}
            }
            return movie
        })
        this.setState({movies: updatedMovies})
    }

    toggleFavourite(clickedMovie)
    {
        const updatedMovies = this.state.movies.map(movie => {
            if(clickedMovie === movie)
            {
                return {...clickedMovie, isFav: !clickedMovie.isFav}
            }
            return movie
        })
        this.setState({movies: updatedMovies})
    }

    toggleCart(clickedMovie)
    {
        const updatedMovies = this.state.movies.map(movie => {
            if(clickedMovie === movie)
            {
                return {...clickedMovie, inCart: !clickedMovie.inCart}
            }
            return movie
        })
        this.setState({movies: updatedMovies})
    }
}