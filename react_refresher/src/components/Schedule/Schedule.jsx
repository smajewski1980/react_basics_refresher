import React from 'react';
import styles from './Schedule.module.css';

function Schedule() {
  return (
    <div className={styles.scheduleWrapper}>
      <div className='times'>
        <p>11:00am</p>
        <p>1:00pm</p>
        <p>3:00pm</p>
        <p>5:00pm</p>
        <p>7:00pm</p>
        <p>9:00pm</p>
      </div>
      <div className='places'>
        <p>Avalon</p>
        <p>Utopia</p>
        <p>Arcadia</p>
        <p>Shangri-La</p>
        <p>Xanadu</p>
        <p>Schenectady</p>
      </div>
    </div>
  );
}

export default Schedule;
