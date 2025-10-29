import React from 'react';
import ImageWrapper from '../image/ImageWrapper';
import styles from './About.module.css';

function About() {
  return (
    <>
      <ImageWrapper
        image='unicorn1'
        src='../public/images/unicorn_pic.jpg'
      />
      <p className={styles.aboutText}>
        Need a lyft? Sign up for uber-corn! <br />
        Our{' '}
        <strong>
          <em>friendly </em>
        </strong>
        and oh so
        <strong>
          <em> cudly</em>
        </strong>{' '}
        unicorns are ready to wisk you away to a far off place full of fantasy
        and excitement.
      </p>
    </>
  );
}

export default About;
