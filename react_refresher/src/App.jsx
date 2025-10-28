import './App.css';
import { useState } from 'react';
import Header from './components/header/Header';
import MainContent from './components/MainContent/MainContent';

function App() {
  const [displaying, setDisplaying] = useState('About');
  function setDisplay(pageToShow) {
    setDisplaying(pageToShow);
  }
  return (
    <>
      <Header
        displaying={displaying}
        setDisplay={setDisplay}
      />
      <MainContent displaying={displaying} />
    </>
  );
}

export default App;
