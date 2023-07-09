import React from 'react';
import LoginSignUp from '../components/login-signup';
import Header from '../components/header';

const SignUp = () => {
  return (
    <div className='h-screen w-screen flex items-center justify-center'>
      <Header/>
      <LoginSignUp type='signup'/>
    </div>
  );
};

export default SignUp;