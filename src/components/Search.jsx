import React, { useState } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import { filter } from '../actions';
import '../assets/styles/components/Search.scss';

const Search = ({ isHome, filter }) => {
  const [data, setData] = useState({});
  const inputStyle = classNames('input', { isHome });
  const handleChange = (event) => {
    if (event.target.value !== '' || event.target.value !== null) {
      console.log(event.target.value);
      filter(event.target.value);
    } 
  };
  return (
    <section className='main'>
      <h2 className='main__title'>¿Qué quieres ver hoy?</h2>
      <input type='text' className={inputStyle} placeholder='Buscar...' onChange={handleChange} />
    </section>
  );
};

const mapDispatchToProps = {
  filter,
};

export default connect(null, mapDispatchToProps)(Search);
