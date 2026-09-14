import styles from "./App.module.css"
// components imports
import { Navbar } from "./components/navbar/Navbar"
import { AlbumsList } from "./components/albumsList/AlbumsList"
import {ImagesList} from "./components/imagesList/ImagesList"
// react toasts
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { useState } from "react"
// import { toast } from "react-toastify"

function App()
{
    const [selectedAlbum, setSelectedAlbum] = useState(null)
    return <>
        <div className={styles.App}>
            <ToastContainer />
            <Navbar />
            <div className={styles.content}>
                {
                    !selectedAlbum 
                    ? <AlbumsList setSelectedAlbum={setSelectedAlbum} />
                    : <ImagesList album = {selectedAlbum} onBack = {() => setSelectedAlbum(null)} />
                }
            </div>
        </div>
    </>
}

export default App
