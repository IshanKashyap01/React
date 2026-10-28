import { useEffect, useState } from "react"
import { db } from "../../config/firebase"
import { getDocs, collection } from "firebase/firestore"
import { toast } from "react-toastify"

export default function useProducts()
{
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        fetchProducts()
        .then(setProducts)
        .catch(() => toast("Something went wrong"))
        .finally(() => setLoading(false))
    }, [])

    return {products, loading}
}

async function fetchProducts()
{
    const snapshot = await getDocs(collection(db, "products"))
    return snapshot.docs.map(doc => ({...doc.data()}))
}