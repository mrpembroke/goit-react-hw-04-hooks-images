// import React, { Component } from 'react';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import s from './Modal.module.css';

export default function Modal({ largeImageURL, onToggleModal }) {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        onToggleModal();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onToggleModal]);

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      onToggleModal();
    }
  };

  return createPortal(
    <div className={s.Overlay} onClick={handleBackdropClick}>
      <div className={s.Modal}>
        <img src={largeImageURL} alt="" />
      </div>
    </div>,
    document.querySelector('#modalPortal'),
  );
}

// class Modal extends Component {
//   componentDidMount() {
//     window.addEventListener('keydown', this.handleChange);
//   }

//   componentWillUnmount() {
//     window.removeEventListener('keydown', this.handleChange);
//   }

//   handleChange = e => {
//     if (e.code === 'Escape' || e.target === e.currentTarget) {
//       this.props.onToggleModal();
//     }
//   };

// handleKeyDown = e => {
//   if (e.code === 'Escape') {
//     this.props.onToggleModal();
//   }
// };

// handleBackdropClick = e => {
//   if (e.currentTarget === e.target) {
//     this.props.onToggleModal();
//   }
// };

//   render() {
//     const { largeImageURL } = this.props;

//     return createPortal(
//       <div className={s.Overlay} onClick={this.handleChange}>
//         <div className={s.Modal}>
//           <img src={largeImageURL} alt="" />
//         </div>
//       </div>,
//       document.querySelector('#modalPortal'),
//     );
//   }
// }

// export default Modal;

Modal.propTypes = {
  onToggleModal: PropTypes.func.isRequired,
};
