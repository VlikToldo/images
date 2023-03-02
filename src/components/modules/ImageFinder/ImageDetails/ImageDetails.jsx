import PropTypes from 'prop-types';

import style from './image-details.module.css'

const ImageDetails = ({imageDetails}) => {
   return <div>
        <img className={style.Image} src={imageDetails} alt='photka' />
    </div>
}

export default ImageDetails;

ImageDetails.propTypes = {
    imageDetails: PropTypes.string.isRequired
}