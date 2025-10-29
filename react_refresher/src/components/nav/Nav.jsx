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
          {displaying === 'About' ? <strong>ABOUT</strong> : 'about'}
        </li>
        <li
          className={styles.navLink}
          onClick={() => {
            setDisplay('Schedule');
          }}
        >
          {displaying === 'Schedule' ? <strong>SCHEDULE</strong> : 'schedule'}
        </li>
        <li
          className={styles.navLink}
          onClick={() => {
            setDisplay('Adopt');
          }}
        >
          {displaying === 'Adopt' ? <strong>ADOPT</strong> : 'adopt'}
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
