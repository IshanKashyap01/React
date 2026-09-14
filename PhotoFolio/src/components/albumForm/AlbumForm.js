import styles from "./albumForm.module.css"
import { useRef } from "react"

const thumbnail = "https://photo-folio-cn.netlify.app/assets/photos.png"

export const AlbumForm = ({loading, onAdd }) => {
    const nameRef = useRef()
    // function  to handle the clearing of the form
    const handleClear = () =>{
        nameRef.current.value = ""
    }
    // function to handle the form submit
    const handleSubmit = (event) => {
        event.preventDefault()
        onAdd({
            name: nameRef.current.value,
            thumbnail: thumbnail
        })
        handleClear()
        nameRef.current.focus()
    }

    return (
        <div className={styles.albumForm}>
        <span>Create an album</span>
        <form onSubmit={handleSubmit}>
            <input required placeholder="Album Name" ref={nameRef} />
            <button type="button" onClick={handleClear} disabled={loading}>
                Clear
            </button>
            <button disabled={loading}>Create an album</button>
        </form>
        </div>
    )
}
