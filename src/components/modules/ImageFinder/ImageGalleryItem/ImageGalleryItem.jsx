import { memo } from 'react';

import PropTypes from 'prop-types';

import style from './image-gallery-item.module.css'

const ImageGalleryItem = ({items, showImage}) => {
const elements = items.map(({id, webformatURL, largeImageURL})=>
 <li onClick={()=> showImage({largeImageURL})} key={id} className={style.ImageGalleryItem} >
  <img className={style.ImageGalleryItemImage} src={webformatURL} alt="photka" />
</li>
)

    return (
        <>
        {elements}
        </>
    )
}

export default memo(ImageGalleryItem);

ImageGalleryItem.defaultProps = {
    items: [],
}

ImageGalleryItem.propTypes = {
    showImage: PropTypes.func.isRequired,
    items: PropTypes.arrayOf({
        id: PropTypes.string.isRequired,
        webformatURL: PropTypes.string.isRequired,
        largeImageURL: PropTypes.string.isRequired
    })
}