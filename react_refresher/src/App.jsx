import { useState } from 'react';
import Header from './components/header/Header';
import MainContent from './components/MainContent/MainContent';
import styles from './App.module.css';

function App() {
  const [displaying, setDisplaying] = useState('About');
  function setDisplay(pageToShow) {
    setDisplaying(pageToShow);
  }
  return (
    <>
      <div className={styles.app}>
        <Header
          displaying={displaying}
          setDisplay={setDisplay}
        />
        <MainContent
          displaying={displaying}
          setDisplaying={setDisplaying}
        />
      </div>
    </>
  );
}

export default App;
