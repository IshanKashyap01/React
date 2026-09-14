import { useEffect, useRef } from "react"
import styles from "./imageForm.module.css"

export function ImageForm({image, albumName, loading, addImage, updateImage})
{
    const titleRef = useRef(null)
    const urlRef = useRef(null)
    useEffect(() => {
        if(image)
        {
            titleRef.current.value = image.title
            urlRef.current.value = image.url
        }
    }, [image])
    const handleClear = () => {
        titleRef.current.value = ""
        urlRef.current.value = ""
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        const img = {
            title: titleRef.current.value,
            url: urlRef.current.value
        }
        image ? updateImage({...image, ...img}) : addImage(img)
        handleClear()
    }
    return <>
        <div className = {styles.imageForm}>
            <span>{!image ? `Add image to ${albumName}` : `Update image ${image.title}`}</span>
            <form onSubmit={handleSubmit}>
                <input placeholder="Title" ref={titleRef} required />
                <input placeholder="Image URL" ref={urlRef} required />
                <div className = {styles.actions}>
                    <button type="button" disabled = {loading} onClick={handleClear}>
                        Clear
                    </button>
                    <button disabled = {loading}>{image ? "Update" : "Add"}</button>
                </div>
            </form>
        </div>
    </>
}