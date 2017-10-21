import React from "react"
import PhotoGallery from 'react-photo-gallery'


const Gallery = (props) => (
    <div> 
        <PhotoGallery photos={ props.Photoset } />
    </div>
)
export default Gallery