import React from 'react';
import Spinner from 'react-loader-spinner';
import s from './Loader.module.css';

export default function Loader() {
  return (
    <Spinner
      className={s.Loader}
      type="Circles"
      color="#00BFFF"
      height={100}
      width={100}
      timeout={3000}
    />
  );
}
