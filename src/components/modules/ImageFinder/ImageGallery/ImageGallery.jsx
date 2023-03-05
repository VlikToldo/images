import { memo } from 'react';
import PropTypes from 'prop-types';

import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

import style from './image-gallery.module.css';

const ImageGallery = ({ items, showImage }) => {
  const elements = items.map(item => {
  return  <ImageGalleryItem key={item.id} {...items} showImage={showImage} />;
  });

  return <ul className={style.ImageGallery}>{elements}</ul>;
};

export default memo(ImageGallery);

ImageGallery.propTypes = {
  items: PropTypes.array.isRequired,
  showImage: PropTypes.func.isRequired,
};
