import { useState, useRef, useEffect } from "react"
import styles from "./imageList.module.css"

export function ImagesListTop({ albumName, hasImages, onBack, showForm, setShowForm }) 
{
    return <>
        <div className={styles.top}>
            <span onClick={onBack}>
                <img src="https://photo-folio-cn.netlify.app/assets/back.png" alt="back" />
            </span>
            <h3>{hasImages ? `Images in ${albumName}` : "No images found in the album."}</h3>
            {hasImages && <Search />}
            <button className={showForm ? styles.active : ""} onClick={setShowForm}>
                {showForm ? "Cancel" : "Add image"}
            </button>
        </div>
    </>
}

function Search() 
{
    const [search, toggleSearch] = useState(false)
    const inputRef = useRef(null)
    // focus on input if search is active
    useEffect(() => { search && inputRef.current.focus() }, [search])
    if (search) {
        return <>
            <div className={styles.search}>
                <input id="imageTitle" placeholder="Search..." ref={inputRef} />
                <img src="https://photo-folio-cn.netlify.app/assets/clear.png" alt="search"
                    onClick={() => toggleSearch(prev => !prev)} />
            </div>
        </>
    }
    return <>
        <div className={styles.search}>
            <img src="https://photo-folio-cn.netlify.app/assets/search.png" alt="search"
                onClick={() => toggleSearch(prev => !prev)} />
        </div>
    </>
}