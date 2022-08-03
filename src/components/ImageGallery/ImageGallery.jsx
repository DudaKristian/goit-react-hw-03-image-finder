import ImageGalleryItem from "components/ImageGalleryItem/ImageGalleryItem"
import LoadMore from "components/LoadMore/LoadMore"
import styles from "../styles.module.css"
import PropTypes from 'prop-types';

const ImageGallery = ({modalData, images,loadMore, onCloseModal, status}) => {
    return (
        <div className={styles.imageGalleryWrapper}>
            <ul className={styles.imageGallery}>
            {images.map(({id, tags, webformatURL, largeImageURL}) => 
                <ImageGalleryItem
                tags={tags}
                    id={id}
                    key={id}
                webformatURL={webformatURL}
                largeImageURL={largeImageURL}               
                onCloseModal={onCloseModal}
                modalData={modalData}
                />
            )}
            </ul>
            {status === "resolved" && <LoadMore loadMore={loadMore} />}
        </div>
        
    )
}

export default ImageGallery

ImageGallery.propTypes = {
    modalData: PropTypes.func.isRequired,
    images: PropTypes.arrayOf(
    PropTypes.shape({
        id: PropTypes.number.isRequired,
        tags: PropTypes.string.isRequired,
        webformatURL: PropTypes.string.isRequired,
        largeImageURL: PropTypes.string.isRequired,   
    })),
    loadMore: PropTypes.func.isRequired,
    onCloseModal: PropTypes.func.isRequired,
    status:PropTypes.string.isRequired,
}