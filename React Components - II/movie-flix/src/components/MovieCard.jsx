export default function MovieCard(props)
{
    const {title, plot, poster, price, rating, stars, isFav, inCart} = props.movie
    return (
        <article className="movie-card">
            <div className="left">
                <img alt="Poster" src={poster}/>
            </div>
            <div className="right">
                <p className="title">{title}</p>
                <p className="plot">{plot}</p>
                <p className="price">Rs. {price}</p>
                <footer className="footer">
                    <p className="rating">{rating}</p>
                    <div className="star-dis">
                        <button className="str-btn" onClick={() => props.removeStar()}>-</button>
                        <span className="star">⭐</span>
                        <span className="starCount">{stars}</span>
                        <button className="str-btn" onClick={props.addStar}>+</button>
                    </div>
                    <button className={isFav ? "unfavourite-btn" : "favourite-btn"} onClick={() => props.toggleFavourite()}>
                        {isFav ? "Unfavourite" : "Favourite"}
                    </button>
                    <button className={inCart ? "unfavourite-btn" : "cart-btn"} onClick={() => props.toggleCart()}>
                        {inCart ? "Remove From" : "Add to"} Cart
                    </button>
                </footer>
            </div>
        </article>
    )
}