import React from 'react';
import LoginSignUp from '../components/login-signup';
import Header from '../components/header';

const Login = () => {
  return (
    <div className='h-screen w-screen flex flex-col items-center justify-center'>
      <Header/>
      <LoginSignUp type='login'/>
    </div>
  );
};

export default Login;