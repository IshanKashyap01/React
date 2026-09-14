import { useState } from "react"
import styles from "./imageList.module.css"

export function ImageCard({image, setUserIntent, setShowForm, deleteImage})
{
    
    const carouselIntent = {type: "carousel", image}
    const updateIntent = {type: "update", image}
    const [isHovered, setHovered] = useState(false)
    return <>
        <div 
            className = {styles.image} onClick={() => setUserIntent(carouselIntent)}
            onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
        >
            <div className = {`${styles.update} ${isHovered ? styles.active : ""}`}>
                <img
                    src="https://photo-folio-cn.netlify.app/assets/edit.png" alt="update"
                    onClick={(event) => {
                        event.stopPropagation()
                        setUserIntent(updateIntent)
                        setShowForm(true)
                    }}
                />
            </div>
            <div className = {`${styles.delete} ${isHovered ? styles.active : ""}`}>
                <img
                    src="https://photo-folio-cn.netlify.app/assets/trash-bin.png" alt="delete"
                    onClick={event => {
                        event.stopPropagation()
                        deleteImage(image)
                    }}
                />
            </div>
            <img src = {image.url} alt = {image.title} />
            <span>{image.title}</span>
        </div>
    </>
}