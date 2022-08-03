import styles from "../styles.module.css"



const ImageGalleryItem = ({modalData, onCloseModal, id, tags, webformatURL, largeImageURL}) => {
    
    return (
        <li className={styles.imageGalleryItem}
            key={id}
            onClick={e => {
                onCloseModal(e)
                modalData({largeImageURL, tags})
                
            }
        
            }>
            <img src={webformatURL}
                alt={tags}
                id={id}
                className={styles.imageGalleryItemImage}
                onClick={onCloseModal}
            />
            {/* {modalData({ largeImageURL, tags })} */}
        </li>
    )
}

export default ImageGalleryItem