import { memo } from 'react';
import PropTypes from 'prop-types';

import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

import style from './image-gallery.module.css';

const ImageGallery = ({ items, showImage }) => {
  console.log(items);
  const elements = items.map(item => <ImageGalleryItem key={item.id} {...item} showImage={showImage} />)
  ;

  return <ul className={style.ImageGallery}>{elements}</ul>;
};

export default memo(ImageGallery);

ImageGallery.propTypes = {
  items: PropTypes.array.isRequired,
  showImage: PropTypes.func.isRequired,
};
