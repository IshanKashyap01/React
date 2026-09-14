// import { useState, useEffect } from "react";


// export const AlbumsList = () => {
//   //These state are created just for your convenience you can create modify or delete the state as per your requirement.

//   const [albums, setAlbums] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [albumAddLoading, setAlbumAddLoading] = useState(false);
//   // create function to get all the album from the firebase.
//   // create function to handle adding of the album

//   return(
//     <></>
//   )
// };
import { useState } from "react"
import useAlbums from "../../hooks/useAlbums"
import styles from "./albumsList.module.css"
import {AlbumForm} from "../albumForm/AlbumForm"
import { db } from "../../firebase"
import {collection, addDoc} from "firebase/firestore"
import {toast} from "react-toastify"
import Spinner from "react-spinner-material"

export function AlbumsList({setSelectedAlbum})
{
    const [albums, setAlbums, fetching] = useAlbums()
    const [showForm, setShowForm] = useState(false)
    const [loading, setLoading] = useState(false)
    async function onAdd(album)
    {
        await createAlbum(setAlbums, setLoading, album)
    }
    if(fetching)
    {
        return <>
            <div className = {styles.loader} >
                <Spinner color="#0077ff" />
            </div>
        </>
    }
    return <>
        {showForm && <AlbumForm onAdd={onAdd} loading={loading} />}
        <div>
            <div className= {styles.top}>
                <h3>Your albums</h3>
                <button className= {showForm ? styles.active : ""} onClick={() => setShowForm(prev => !prev)}>
                    {showForm ? "Cancel" : "Add album"}
                </button>
            </div>
            <div className={styles.albumsList}>
                {albums.map(album => (
                    <div key={album.id} className= {styles.album} onClick={() => setSelectedAlbum(album)}>
                        <img src= {album.thumbnail} alt= {album.name} />
                        <span>{album.name}</span>
                    </div>
                ))}
            </div>
        </div>
    </>
}

async function createAlbum(setAlbums, setLoading, album)
{
    setLoading(true)
    await addDoc(collection(db, "albums"), album)
    // add the auto-assigned Id to the new album and add the album to the state
    .then(ref => {
        album.id = ref.id
        setAlbums(prev => [...prev, album])
        toast.success("Album added successfully.")
    })
    .catch(() => toast.error("Could not add album."))
    .finally(() => setLoading(false))
}
