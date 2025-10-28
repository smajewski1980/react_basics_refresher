import React from 'react';
import Nav from '../nav/Nav';
import styles from './Header.module.css';

const Header = ({ setDisplay, displaying }) => {
  return (
    <>
      <header>
        <h1 className={styles.heading}>UNICORN RIDES</h1>
        <Nav setDisplay={setDisplay} />
        <h2>{displaying}</h2>
      </header>
    </>
  );
};

export default Header;
