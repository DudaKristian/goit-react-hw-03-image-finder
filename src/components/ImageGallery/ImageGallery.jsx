import ImageGalleryItem from "components/ImageGalleryItem/ImageGalleryItem"
import LoadMore from "components/LoadMore/LoadMore"
import styles from "../styles.module.css"

const ImageGallery = ({modalData, images,loadMore, showModal, onCloseModal}) => {
    return (
        <div className={styles.imageGalleryWrapper}>
            <ul className={styles.imageGallery}>
            {images.map(({id, tags, webformatURL, largeImageURL}) => 
                <ImageGalleryItem
                tags={tags}
                key={id}
                webformatURL={webformatURL}
                largeImageURL={largeImageURL}               
                showModal={showModal}
                    onCloseModal={onCloseModal}
                    modalData={modalData}
                />
            )}
            </ul>
            {images && <LoadMore loadMore={loadMore} />}
        </div>
        
    )
}

export default ImageGallery
