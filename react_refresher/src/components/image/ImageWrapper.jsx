import React from 'react';
import styles from './ImageWrapper.module.css';

function ImageWrapper({ src, image }) {
  return (
    <img
      className={styles[image]}
      src={src}
    />
  );
}

export default ImageWrapper;
