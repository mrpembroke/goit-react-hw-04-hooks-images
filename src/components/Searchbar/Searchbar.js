// import React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';
import s from './Searchbar.module.css';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Searchbar({ onHandleSubmit }) {
  const [query, setQuery] = useState('');

  const onSubmit = e => {
    e.preventDefault();

    if (query.trim() === '') {
      return toast.error('Полууууундра!');
    }

    onHandleSubmit(query);
    setQuery('');
  };

  return (
    <header className={s.Searchbar}>
      <form className={s.SearchForm} onSubmit={onSubmit}>
        <button type="submit" className={s.button}>
          <span className={s.label}>Search</span>
        </button>
        <input
          className={s.input}
          type="text"
          autoComplete="off"
          placeholder="Search IMG"
          value={query}
          onChange={({ target }) => setQuery(target.value)}
        />
      </form>
    </header>
  );
}

// function Searchbar({ onSubmit, onChange, value }) {
//   return (
//     <header className={s.Searchbar}>
//       <form className={s.SearchForm} onSubmit={onSubmit}>
//         <button type="submit" className={s.button}>
//           <span className={s.label}>Search</span>
//         </button>

// <input
//   className={s.input}
//   type="text"
//   autoComplete="off"
//   autoFocus
//   placeholder="Search IMG"
//   value={value}
//   onChange={onChange}
// />
//       </form>
//     </header>
//   );
// }

// export default Searchbar;

Searchbar.propTypes = {
  onHandleSubmit: PropTypes.func.isRequired,
};
