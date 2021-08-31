import PropTypes from 'prop-types';
import React from 'react';
import s from './Button.module.css';

export default function Button({ onLoadMore }) {
  return (
    <div className={s.buttonContainer}>
      <button type="button" className={s.Button} onClick={onLoadMore}>
        Load more
      </button>
    </div>
  );
}

// const Button = ({ onLoadMore }) => {
//   return (
//     <div className={s.buttonContainer}>
//       <button type="button" className={s.Button} onClick={onLoadMore}>
//         Load more
//       </button>
//     </div>
//   );
// };

// export default Button;

Button.propTypes = {
  onLoadMore: PropTypes.func.isRequired,
};
