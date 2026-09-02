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
                {this.state.movies.map(movie => <MovieCard
                    key={movie.id} movie = {movie}
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
        if(clickedMovie.stars < 5)
        {
            this.updateMovie(clickedMovie, movie => (
                {...movie, stars: movie.stars + 1}
            ))
        }
    }

    removeStar(clickedMovie)
    {
        if(clickedMovie.stars > 0)
        {
            this.updateMovie(clickedMovie, movie => (
                {...movie, stars: movie.stars - 1}
            ))
        }
    }

    toggleFavourite(clickedMovie)
    {
        this.updateMovie(clickedMovie, movie => (
            {...movie, isFav: !movie.isFav}
        ))
    }

    toggleCart(clickedMovie)
    {
        this.updateMovie(clickedMovie, movie => (
            {...movie, inCart: !movie.inCart}
        ))
        if(clickedMovie.inCart)
        {
            this.props.removeFromCart(clickedMovie)
        }
        else
        {
            this.props.addToCart(clickedMovie)
        }
    }

    updateMovie(targetMovie, createUpdatedMovie)
    {
        this.setState(prev => ({
            movies: prev.movies.map(movie => movie === targetMovie ? createUpdatedMovie(movie) : movie)
        }))
    }
}