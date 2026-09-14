import { useEffect, useState } from "react"
import {db} from "../firebase"
import {getDocs, collection} from "firebase/firestore"

export default function useAlbums()
{
    const [albums, setAlbums] = useState([])
    const [fetching, setFetching] = useState(true)
    // fetch albums upon mounting
    useEffect(() => {
        fetchAlbums()
        .then(setAlbums)
        .finally(() => setFetching(false))
    }, [])
    return [albums, setAlbums, fetching]
}

async function fetchAlbums()
{
    const snapshot = await getDocs(collection(db, "albums"))
    return snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
    }))
}