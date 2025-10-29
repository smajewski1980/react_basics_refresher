import React from 'react';
import styles from './Form.module.css';

function Form({ setDisplaying }) {
  function handleSubmit(e) {
    e.preventDefault();
    const form = document.querySelector('form');
    const formData = new FormData(form);
    if (form.checkValidity()) {
      console.log(
        formData.get('name'),
        formData.get('email'),
        formData.get('phone'),
      );
      alert('Please allow 4-7 minutes for your new old Uber-corn to show up.');
      setDisplaying('About');
    }
  }
  return (
    <form
      className={styles.form}
      id='form'
    >
      <div className={styles.formInput}>
        <label htmlFor='name'>name</label>
        <input
          type='text'
          name='name'
          id='name'
          autoComplete='off'
          required
        />
      </div>
      <div className={styles.formInput}>
        <label htmlFor='email'>email</label>
        <input
          type='email'
          name='email'
          id='email'
          autoComplete='off'
          required
        />
      </div>
      <div className={styles.formInput}>
        <label htmlFor='phone'>phone</label>
        <input
          type='phone'
          name='phone'
          id='phone'
          autoComplete='off'
          required
        />
      </div>
      <button onClick={handleSubmit}>sign up</button>
    </form>
  );
}

export default Form;
