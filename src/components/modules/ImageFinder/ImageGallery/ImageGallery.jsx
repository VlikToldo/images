// import style from './image-gallery.module.css';

import PropTypes from 'prop-types';

import style from './image-gallery.module.css'

const ImageGallery = ({children}) => {
  return (<ul className={style.ImageGallery}>
    {children}
  </ul>)
};

export default ImageGallery;


ImageGallery.propTypes ={
  children: PropTypes.element.isRequired
}
