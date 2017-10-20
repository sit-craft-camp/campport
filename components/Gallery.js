import React from "react"
import PhotoGallery from 'react-photo-gallery'

const Photoset = [
    {
        src: "/static/SITCRAFTCamp.jpg",
        width: 4,
        height: 3,
    },
    {
        src: "/static/SITCRAFTCamp.jpg",
        width: 4,
        height: 3,
    },
    {
        src: "/static/SITCRAFTCamp.jpg",
        width: 4,
        height: 3,
    }
]

const Gallery = () => (
    <div> 
        <PhotoGallery photos={Photoset} />
    </div>
)
export default Gallery