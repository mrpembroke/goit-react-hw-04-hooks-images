import React from 'react';
import PropTypes from 'prop-types';
import s from './ImageGallery.module.css';

import ImageGalleryItem from '../ImageGalleryItem/';

export default function ImageGallery({ images, onOpenModal }) {
  return (
    <ul className={s.ImageGallery}>
      {images.map(({ id, webformatURL, largeImageURL, tags }) => (
        <ImageGalleryItem
          key={id}
          webformatURL={webformatURL}
          largeImageURL={largeImageURL}
          tags={tags}
          onOpenModal={onOpenModal}
        />
      ))}
    </ul>
  );
}

// function ImageGallery({ images, onOpenModal }) {
//   return (
//     <ul className={s.ImageGallery}>
//       {images.map(({ id, webformatURL, largeImageURL, tags }) => (
//         <ImageGalleryItem
//           key={id}
//           webformatURL={webformatURL}
//           largeImageURL={largeImageURL}
//           tags={tags}
//           onOpenModal={onOpenModal}
//         />
//       ))}
//     </ul>
//   );
// }

// export default ImageGallery;

ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
  onOpenModal: PropTypes.func.isRequired,
};
