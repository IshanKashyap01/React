import { useState } from "react"
import styles from "./carousel.module.css"

export function Carousel({ imageIndex, images, onExit })
{
    const [index, setIndex] = useState(imageIndex)
    const onPrev = () => setIndex(prev => getIndex(prev - 1, images.length))
    const onNext = () => setIndex(prev => getIndex(prev + 1, images.length))
    return (
        <div className={styles.carousel}>
            <button onClick={onExit}>x</button>
            <button onClick={onPrev}>{"<"}</button>
            <img src={images[index].url} alt={images[index].title} />
            <button onClick={onNext}>{">"}</button>
        </div>
    )
}

function getIndex(index, length)
{
    return (index % length + length) % length
}
