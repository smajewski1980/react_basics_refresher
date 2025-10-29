import React from 'react';
import styles from './Nav.module.css';

const Nav = ({ setDisplay, displaying }) => {
  return (
    <nav>
      <ul className={styles.ul}>
        <li
          className={styles.navLink}
          onClick={() => {
            setDisplay('About');
          }}
        >
          {displaying === 'About' ? <strong>about</strong> : 'about'}
        </li>
        <li
          className={styles.navLink}
          onClick={() => {
            setDisplay('Schedule');
          }}
        >
          {displaying === 'Schedule' ? <strong>schedule</strong> : 'schedule'}
        </li>
        <li
          className={styles.navLink}
          onClick={() => {
            setDisplay('Adopt');
          }}
        >
          {displaying === 'Adopt' ? <strong>adopt</strong> : 'adopt'}
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
