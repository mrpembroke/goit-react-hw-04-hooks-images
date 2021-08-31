// import React, { Component } from 'react';
import { useState, useEffect } from 'react';

import Container from './components/Container/';
import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';
import Loader from './components/Loader';
import Button from './components/Button';
import Modal from './components/Modal';
import ErrorMsg from './components/ErrorMsg/ErrorMsg';

import { ToastContainer } from 'react-toastify';
// import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import apiService from './services/apiService';

export default function App() {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [largeImageURL, setlargeImageURL] = useState('');
  const [page, setPage] = useState(1);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (!query) {
      return;
    }

    const fetchImages = async () => {
      try {
        const request = await apiService(query, page);

        if (request.length === 0) {
          return setError(`Ничего такого '${query}' - НЕТ!`);
        }

        setImages(prevImages => [...prevImages, ...request]);
      } catch (error) {
        setError('Something went wrong. Try again.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchImages();
  }, [query, page]);

  const serchImages = newSearch => {
    setQuery(newSearch);
    setImages([]);
    setPage(1);
    setError(null);
    setIsLoading(true);
  };

  const onLoadMore = () => {
    setIsLoading(true);
    setPage(prevPage => prevPage + 1);
    scrollPage();
  };

  const onOpenModal = e => {
    setlargeImageURL(e.target.dataset.source);
    toggleModal();
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const scrollPage = () => {
    setTimeout(() => {
      window.scrollBy(0, window.innerHeight + 150);
    }, 1000);
  };

  return (
    <>
      <Container>
        <Searchbar onHandleSubmit={serchImages} />

        {error && <ErrorMsg texterror={error} />}

        {images.length > 0 && (
          <ImageGallery images={images} onOpenModal={onOpenModal} />
        )}

        {isLoading && <Loader />}

        {!isLoading && images.length > 0 && <Button onLoadMore={onLoadMore} />}

        {showModal && (
          <Modal onToggleModal={toggleModal} largeImageURL={largeImageURL} />
        )}

        <ToastContainer autoClose={5000} />
      </Container>
    </>
  );
}

// class App extends Component {
//   state = {
//     query: '',
//     images: [],
//     largeImageURL: '',
//     page: 1,
//     isLoading: false,
//     error: null,
//     showModal: false,
//   };

//   componentDidUpdate(_, prevState) {
//     if (prevState.query !== this.state.query) {
//       this.setState({ images: [], page: 1 });
//     }
//   }

//   searchImages = async () => {
//     const { query, page } = this.state;

//     if (query.trim() === '') {
//       return toast.error('Sry, you are missing the letters');
//     }

//     this.toggleLoader();

//     try {
//       const request = await fetchImages(query, page);
//       this.setState(({ images, page }) => ({
//         images: [...images, ...request],
//         page: page + 1,
//       }));
//       if (request.length === 0) {
//         this.setState({ error: `No results were found for ${query}!` });
//       }
//     } catch (error) {
//       this.setState({ error: 'Something went wrong. Try again.' });
//     } finally {
//       this.toggleLoader();
//     }
//   };

//   handleChange = e => {
//     this.setState({ query: e.target.value });
//   };

//   handleSubmit = e => {
//     e.preventDefault();
//     this.searchImages();
//   };

//   onLoadMore = () => {
//     this.searchImages();
//     this.scrollPage();
//   };

//   toggleLoader = () => {
//     this.setState(({ isLoading }) => ({
//       isLoading: !isLoading,
//     }));
//   };

//   onOpenModal = e => {
//     this.setState({ largeImageURL: e.target.dataset.source });
//     this.toggleModal();
//   };

//   toggleModal = () => {
//     this.setState(({ showModal }) => ({
//       showModal: !showModal,
//     }));
//   };

//   scrollPage = () => {
//     setTimeout(() => {
//       window.scrollBy({
//         top: document.documentElement.clientHeight - 10,
//         behavior: 'smooth',
//       });
//     }, 1000);
//   };

//   render() {
//     const {
//       query,
//       images,
//       isLoading,
//       showModal,
//       largeImageURL,
//       // showButton,
//     } = this.state;

//     return (
//       <div>
//         <Searchbar
//           value={query}
//           onSubmit={this.handleSubmit}
//           onChange={this.handleChange}
//         />

//         {/* {error && <ErrorView texterror={error} />} */}
//         {images.length > 0 && (
//           <ImageGallery images={images} onOpenModal={this.onOpenModal} />
//         )}

//         {isLoading && <Loader />}
//         {!isLoading && images.length > 0 && (
//           <Button onLoadMore={this.onLoadMore} />
//         )}

//         {showModal && (
//           <Modal
//             onToggleModal={this.toggleModal}
//             largeImageURL={largeImageURL}
//           />
//         )}

//         <ToastContainer autoClose={5000} />
//       </div>
//     );
//   }
// }

// export default App;
