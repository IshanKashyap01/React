import { useEffect, useState } from "react"
import { db } from "../../config/firebase"
import { getDocs, collection } from "firebase/firestore"
import { toast } from "react-toastify"

export default function useProducts()
{
    const [products, setProducts] = useState([])
    const [areProductsLoading, setLoading] = useState(true)
    useEffect(() => {
        fetchProducts()
        .then(setProducts)
        .catch(error => toast(error.message))
        .finally(() => setLoading(false))
    }, [])

    return {products, areProductsLoading}
}

async function fetchProducts()
{
    const snapshot = await getDocs(collection(db, "products"))
    return snapshot.docs.map(doc => ({...doc.data()}))
}