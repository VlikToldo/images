import { useState, useEffect, useCallback } from 'react';
import { ColorRing } from 'react-loader-spinner';

import Searchbar from './Searchbar/Searchbar';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from 'components/shared/Button/Button';
import Modal from 'components/shared/Modal/Modal';
import ImageDetails from './ImageDetails/ImageDetails';

import { searchImage } from 'components/shared/services/image-api';

const ImageFinder = () => {
  const [search, setSearch] = useState('');
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [imageDetails, setImageDetails] = useState(null);

  useEffect(() => {
    if (!search) {
      return
    }

    const fetchImage = async () => {
      try {
        setLoading(true);
        const data = await searchImage(search, page);
        setItems(prevItems => ([...prevItems, ...data]))
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }
    fetchImage()
  }, [search, page, setError, setLoading, setItems] );

  const loadMore = useCallback(() => {
    setPage(prevPage => prevPage + 1)
  }, []);

  const onSearchImage = useCallback(({ search }) => {
    setSearch(search);
    setItems([]);
    setPage(1);
  }, []);

  const showImage = useCallback(({ largeImageURL }) => {
    setImageDetails(largeImageURL);
    setShowModal(true);
  }, []);

  const closeModal = useCallback(() => {
    setShowModal(false);
    setImageDetails(null);
  }, []);

  return (
    <>
      <Searchbar onSubmit={onSearchImage} />
      {Boolean(search) && <ImageGallery>
        <ImageGalleryItem items={items} showImage={showImage} />
      </ImageGallery>}
      {loading && <ColorRing />}
      {error && <p>{error}</p>}
      {Boolean(items.length) && (!loading &&
        <Button onClick={loadMore}>Load more</Button>
      )}
      {showModal && (
        <Modal close={closeModal}>
          <ImageDetails imageDetails={imageDetails} />
        </Modal>
      )}
    </>
  );
}

// class ImageFinder extends Component {
//   state = {
//     search: '',
//     items: [],
//     loading: false,
//     error: null,
//     page: 1,
//     per_page: 12,
//     showModal: false,
//     imageDetails: null,
//   };

//   componentDidUpdate(prevProps, prevState) {
//     const { search, page } = this.state;
//     if (prevState.search !== search || prevState.page !== page) {
//       this.fetchImage();
//     }
//   }

//   async fetchImage() {
//     try {
//       this.setState({ loading: true });
//       const { search, page } = this.state;
//       const data = await searchImage(search, page);
//       this.setState(({ items }) => ({
//         items: [...items, ...data],
//       }));
//     } catch (error) {
//       this.setState({ error: error.message });
//     } finally {
//       this.setState({ loading: false });
//     }
//   }

//   loadMore = () => {
//     this.setState(({ page }) => ({ page: page + 1 }));
//   };

//   searchImage = ({ search }) => {
//     this.setState({ search, items: [], page: 1 });
//   };

//   showImage = ({ largeImageURL }) => {
//     this.setState({
//       imageDetails: largeImageURL,
//       showModal: true,
//     });
//   };

//   closeModal = () => {
//     this.setState({
//       showModal: false,
//       imageDetails: null,
//     });
//   };

//   render() {
//     const { items, loading, error, showModal, imageDetails } = this.state;
//     const { searchImage, loadMore, showImage, closeModal } = this;

//     return (
//       <>
//         <Searchbar onSubmit={searchImage} />
//         <ImageGallery>
//           <ImageGalleryItem items={items} showImage={showImage} />
//         </ImageGallery>
//         {loading && <ColorRing />}
//         {error && <p>{error}</p>}
//         {Boolean(items.length) && (
//           <Button onClick={loadMore}>...Load more</Button>
//         )}
//         {showModal && (
//           <Modal close={closeModal}>
//             <ImageDetails imageDetails={imageDetails} />
//           </Modal>
//         )}
//       </>
//     );
//   }
// }

export default ImageFinder;
