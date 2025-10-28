import React from 'react';
import styles from './ImageWrapper.module.css';

function ImageWrapper({ src }) {
  return (
    <img
      className={styles.unicornPic}
      src={src}
    />
  );
}

export default ImageWrapper;
