import React from 'react';
import ImageWrapper from '../image/ImageWrapper';
import styles from './Adopt.module.css';
import Form from '../Form/Form';

function Adopt({ setDisplaying }) {
  return (
    <>
      <ImageWrapper
        image='unicorn2'
        src='/images/unicorn_pic2.jpg'
      />
      <p className={styles.imgCaption}>
        Please help me have a{' '}
        <strong>
          <em>stable</em>
        </strong>{' '}
        home life.
      </p>
      <hr className={styles.hr} />
      <p>Sign up to adopt a retired Uber-corn.</p>
      <Form setDisplaying={setDisplaying} />
    </>
  );
}

export default Adopt;
