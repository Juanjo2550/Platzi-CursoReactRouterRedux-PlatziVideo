import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { loginRequest } from '../actions';
import googleIcon from '../assets/static/google-icon.png';
import twitterIcon from '../assets/static/twitter-icon.png';
import '../assets/styles/components/Login.scss';

const Login = (props) => {
  const [form, setValues] = useState({
    email: '',
    password: '',
  });

  const handleInput = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault(); //Evita que la información se envie por la URL.
    props.loginRequest(form); //Enviamos el form a la acción.
    props.history.push('/');
  };

  return (
    <section className='login__container'>
      <h2>Inicia sesión</h2>
      <form className='login__container--form' onSubmit={handleSubmit}>
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
          <button className='button'>Iniciar sesión</button>
        {/* </Link> */}
        <div className='login__container--remember-me'>
          <label htmlFor='cbox1'>
            <input type='checkbox' id='cbox1' defaultValue='first_checkbox' />
            Recuérdame
          </label>
          <a href='/'>Olvidé mi contraseña</a>
        </div>
      </form>
      <section className='login__container--social-media'>
        <div>
          <img src={googleIcon} alt='logo' />
          {' '}
          Inicia sesión con Google
        </div>
        <div>
          <img src={twitterIcon} alt='logo' />
          {' '}
          Inicia sesión con Twitter
        </div>
      </section>
      <p className='login__container--register'>
        No tienes ninguna cuenta
        {' '}
        <Link to='/register'>
          Regístrate
        </Link>
      </p>
    </section>
  );
};

const mapDispatchToProps = {
  loginRequest,
};

export default connect(null, mapDispatchToProps)(Login);
