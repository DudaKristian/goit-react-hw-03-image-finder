import styles from "../styles.module.css"

const ImageGalleryItem = ({tags, webformatURL, largeImageURL}) => {
    return (
        <li className={styles.imageGalleryItem}>
            <img src={webformatURL} alt={tags} className={styles.imageGalleryItemImage} />
        </li>
    )
}

export default ImageGalleryItem