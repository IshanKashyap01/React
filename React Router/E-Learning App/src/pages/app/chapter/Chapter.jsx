import React from "react"
import styles from "./Chapter.module.css"
import { useOutletContext, useParams } from "react-router-dom"

function Chapter()
{
    const {chapterId} = useParams()
    const {course} = useOutletContext()
    const chapter = course.chapters.find(c => String(c.chapter) === chapterId)
    return (
        <div>
            <h1>{chapter.title}</h1>
            <h2>{chapter.description}</h2>
            <p className={styles.para}>{chapter.details}</p>
            <br />
            <br />
            <div className={styles.videos}>
                {/*TASK:5 CHAPTER VIDEO SRC SHOULD BE GIVEN IN THE SOURCE */}
                <iframe
                width="800"
                height="560"
                src=""
                title="React Video"
                frameborder="1"
                allow="accelerometer autoplay clipboard-write encrypted-media gyroscope picture-in-picture web-share"
                allowfullscreen
                ></iframe>
            </div>
        </div>
    )
}

export default Chapter
