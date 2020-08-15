import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { registerRequest } from '../actions';
import '../assets/styles/components/Register.scss';

const Register = (props) => {
  const [form, setData] = useState({
    email: '',
    name: '',
    password: '',
  });

  const handleInput = (event) => {
    setData({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.registerRequest(form);
    props.history.push('/');
  };

  return (
    <section className='register'>
      <section className='register__container'>
        <h2>Regístrate</h2>
        <form className='register__container--form' onSubmit={handleSubmit}>
          <input
            name='name'
            className='input'
            type='text'
            placeholder='Nombre'
            onChange={handleInput}
          />
          <input
            name='email'
            className='input'
            type='text'
            placeholder='Correo'
            onChange={handleInput}
          />
          <input
            name='password'
            className='input'
            type='password'
            placeholder='Contraseña'
            onChange={handleInput}
          />
          {/* <Link to='/'> */}
            <button className='button'>Registrarme</button>
          {/* </Link> */}
        </form>
        <a href>Iniciar sesión</a>
      </section>
    </section>
  );
};

const mapDispatchToProps = () => ({
  registerRequest,
});

export default connect(null, mapDispatchToProps)(Register);