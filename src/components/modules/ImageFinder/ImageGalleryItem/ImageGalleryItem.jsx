import { memo } from 'react';

import PropTypes from 'prop-types';

import style from './image-gallery-item.module.css';

const ImageGalleryItem = ({ largeImageURL, webformatURL, showImage }) => {
  return (
    <li
      onClick={() => showImage({ largeImageURL })}
      key={id}
      className={style.ImageGalleryItem}
    >
      <img
        className={style.ImageGalleryItemImage}
        src={webformatURL}
        alt="photka"
      />
    </li>
  );
};

export default memo(ImageGalleryItem);

ImageGalleryItem.defaultProps = {
  items: [],
};

ImageGalleryItem.propTypes = {
  showImage: PropTypes.func.isRequired,
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
};
