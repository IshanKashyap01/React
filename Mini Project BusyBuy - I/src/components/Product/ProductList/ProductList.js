import ProductCard from "../ProductCard/ProductCard";
import ProductGrid from "../ProductGrid/ProductGrid";

function ProductList ({ products, onCart, addToCart, decrementItem, removeFromCart })
{
    // Component to display the product list
    return (
        <ProductGrid>
            {products.map(product => (
                <ProductCard
                    product={product} key={product.id} onCart={onCart}
                    addToCart={addToCart} decrementItem={decrementItem}
                    removeFromCart={removeFromCart}
                />
            ))}
        </ProductGrid>
    );
};

export default ProductList;
