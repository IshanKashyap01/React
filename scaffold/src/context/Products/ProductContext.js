import { createContext, useContext } from "react";
import useProductsState from "./ProductState";

const ProductContext = createContext()

export function useProducts()
{
    return useContext(ProductContext)
}

export function ProductContextProvider({children})
{
    return (
        <ProductContext.Provider value={{...useProductsState()}}>
            {children}
        </ProductContext.Provider>
    )
}