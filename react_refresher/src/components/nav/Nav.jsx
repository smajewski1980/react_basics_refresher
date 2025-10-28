import React from 'react';
import styles from './Nav.module.css';

const Nav = ({ setDisplay }) => {
  return (
    <nav>
      <ul>
        <li
          className={styles.navLink}
          onClick={() => {
            setDisplay('About');
          }}
        >
          About
        </li>
        <li
          className={styles.navLink}
          onClick={() => {
            setDisplay('Schedule');
          }}
        >
          Schedule
        </li>
        <li
          className={styles.navLink}
          onClick={() => {
            setDisplay('Adopt');
          }}
        >
          Adopt
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
