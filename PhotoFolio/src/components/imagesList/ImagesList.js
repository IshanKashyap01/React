import { ImageCard } from "./ImageCard"
import styles from "./imageList.module.css"
import useImages from "../../hooks/useImages"
import { useState } from "react"
import { ImagesListTop } from "./ImagesListTop"
import {ImageForm} from "../imageForm/ImageForm"
import { db } from "../../firebase"
import {collection, addDoc, doc, updateDoc, deleteDoc} from "firebase/firestore"
import {toast} from "react-toastify"
import Spinner from "react-spinner-material"
import { Carousel } from "../carousel/Carousel"

export function ImagesList({album, onBack})
{
    const [images, setImages, fetching] = useImages(album.id)
    const [showForm, setShowForm] = useState(false)
    const [loading, setLoading] = useState(false)
    const [userIntent, setUserIntent] = useState(null)
    
    async function onAdd(image)
    {
        await addImage(setImages, setLoading, album.id, image)
    }
    async function onUpdate(image)
    {
        await updateImage(setImages, setLoading, album.id, image)
        .then(() => {
            setUserIntent(null)
            setShowForm(null)
        })
    }
    async function onDelete(image)
    {
        await deleteImage(setImages, setLoading, album.id, image)
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
        {/* conditionally render image form */}
        {showForm && 
            <ImageForm 
                image={userIntent?.type === "update" ? userIntent.image : null}
                albumName={album.name} loading = {loading} 
                addImage={onAdd} updateImage={onUpdate}
            />
        }
        {/* conditionally render carousel */}
        {userIntent?.type === "carousel" && 
            <Carousel
                imageIndex = {images.indexOf(userIntent.image)} images = {images}
                onExit = {() => setUserIntent(null)}
            />
        }
        <ImagesListTop 
            albumName={album.name} hasImages={images.length !== 0} onBack={onBack}
            showForm = {showForm} setShowForm = {() => {
                setShowForm(prev => !prev)
                setUserIntent(null)
            }}
        />
        <ImageList
            images={images} setUserIntent = {setUserIntent} setShowForm = {setShowForm} 
            deleteImage = {onDelete}
        />
    </>
}

function ImageList({images, setUserIntent, setShowForm, deleteImage})
{
    if(!images)
    {
        return <></>
    }
    return <>
        <div className = {styles.imageList}>
            {images.map(image => (
                <ImageCard 
                    setUserIntent = {setUserIntent} key={image.id} image={image}
                    setShowForm = {setShowForm} deleteImage = {deleteImage}
                />
            ))}
        </div>
    </>
}

async function addImage(setImages, setLoading, albumId, image)
{
    setLoading(true)
    await addDoc(collection(db, "albums", albumId, "images"), image)
    .then(ref => {
        image.id = ref.id
        setImages(prev => [...prev, image])
        toast.success("Image added successfully.")
    })
    .catch(() => toast.error("Could not add image."))
    .finally(() => setLoading(false))
}

async function updateImage(setImages, setLoading, albumId, image)
{
    setLoading(true)
    await updateDoc(doc(db, "albums", albumId, "images", image.id), {
        title: image.title,
        url: image.url
    })
    .then(() => {
        setImages(prev => prev.map(img => img.id === image.id ? image : img))
        toast.success("Image updated successfully.")
    })
    .catch(() => toast.error("Could not update image."))
    .finally(() => setLoading(false))
}

async function deleteImage(setImages, setLoading, albumId, image)
{
    setLoading(true)
    await deleteDoc(doc(db, "albums", albumId, "images", image.id))
    .then(() => {
        setImages(prev => prev.filter(img => img.id !== image.id))
        toast.success("Image deleted successfully.")
    })
    .catch(() => toast.error("Could not delete image."))
    .finally(() => setLoading(false))
}
