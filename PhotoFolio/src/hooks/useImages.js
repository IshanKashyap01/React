import { useEffect, useState } from "react"
import {db} from "../firebase"
import {getDocs, collection} from "firebase/firestore"

export default function useImages(albumId)
{
    const [images, setImages] = useState([])
    const [fetching, setFetching] = useState(true)
    // fetch images upon mounting
    useEffect(() => {
        // do not fetch anything if albumId is null, which it will be until an album is
        // selected
        if(albumId)
        {
            fetchImages(albumId)
            .then(setImages)
            .finally(() => setFetching(false))
        }
    }, [albumId])
    return [images, setImages, fetching]
}

async function fetchImages(albumId)
{
    const snapshot = await getDocs(collection(db, "albums", albumId, "images"))
    return snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
    }))
}