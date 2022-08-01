import ImageGalleryItem from "components/ImageGalleryItem/ImageGalleryItem"
import styles from "../styles.module.css"

const ImageGallery = ({images}) => {
    return (
        <ul className={styles.imageGallery}>
            {images.map(({id, tags, webformatURL, largeImageURL}) => 
                <ImageGalleryItem
                tags={tags}
                key={id}
                webformatURL={webformatURL}
                largeImageURL={largeImageURL}
            />
            )}
        </ul>
        
    )
}

export default ImageGallery
