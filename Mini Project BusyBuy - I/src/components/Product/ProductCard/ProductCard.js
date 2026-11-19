import React from "react";
import ProductContainer from "../ProductContainer/ProductContainer";
import ProductDetails from "../ProductContainer/ProductDetails/ProductDetails";
import ProductImage from "../ProductContainer/ProductImage/ProductImage";

// Product Card component
function ProductCard({ product, onCart, addToCart, decrementItem, removeFromCart})
{
    const { title, price, image, id, quantity } = product
    return (
        <ProductContainer>
        <ProductImage image={image} />
        <ProductDetails
            title={title} price={price} productId={id} quantity={quantity}
            onCart={onCart} addToCart={addToCart}
            decrementItem={decrementItem} removeFromCart={removeFromCart}
        />
        </ProductContainer>
    );
};

export default ProductCard;
