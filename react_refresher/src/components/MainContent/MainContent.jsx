import React from 'react';
import Schedule from '../Schedule/Schedule';
import Adopt from '../Adopt/Adopt';
import About from '../About/About';

function MainContent({ displaying }) {
  return (
    <>
      {displaying === 'About' && <About />}
      {displaying === 'Schedule' && <Schedule />}
      {displaying === 'Adopt' && <Adopt />}
    </>
  );
}

export default MainContent;
