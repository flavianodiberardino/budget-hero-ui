import Link from 'next/link';
import React, { FC } from 'react';
import { AiFillGoogleSquare, AiOutlineFacebook } from 'react-icons/ai'
import { RiGithubLine, RiGoogleLine, RiFacebookLine } from 'react-icons/ri'

interface LoginSignUpProps {
  type: 'login' | 'signup';
}

const LoginSignUp: FC<LoginSignUpProps> = ({ type }) => {
  return (
    <div className='flex flex-col bg-bh-blue-200 px-16 py-8 mt-14 rounded'>
    <form className='flex flex-col w-72 mb-6'>
      {
        type === 'signup' && (
          <>
            <label className='text-bh-gray-100 font-normal text-lg' htmlFor="first">First name</label>
            <input className='bg-bh-gray-100 outline-none h-8 text-base p-3 text-bh-blue-200 mb-3 rounded focus:outline-offset-0 focus:outline-bh-yellow-100 focus:outline-2' type="text" id="first" name="first" />
            <label className='text-bh-gray-100 font-normal text-lg' htmlFor="second">Last name</label>
            <input className='bg-bh-gray-100 outline-none h-8 text-base p-3 text-bh-blue-200 mb-3 rounded focus:outline-offset-0 focus:outline-bh-yellow-100 focus:outline-2' type="text" id="second" name="second" />
          </>
        )
      }
      <label className='text-bh-gray-100 font-normal text-lg' htmlFor="third">Email</label>
      <input className='bg-bh-gray-100 outline-none h-8 text-base p-3 text-bh-blue-200 mb-3 rounded focus:outline-offset-0 focus:outline-bh-yellow-100 focus:outline-2' type="text" id="third" name="third" />
      <div className='flex justify-between items-center'>
        <label className='text-bh-gray-100 font-normal text-lg' htmlFor="last">Password</label>
        {type === 'login' && <Link className='text-bh-yellow-100 font-light text-sm hover:text-bh-yellow-200' href={'/auth/recover'}>Forgot your password?</Link>}
      </div>
      <input className='bg-bh-gray-100 outline-none h-8 text-base p-3 text-bh-blue-200 mb-3 rounded focus:outline-offset-0 focus:outline-bh-yellow-100 focus:outline-2' type="password" id="last" name="last" />
      <button className='bg-bh-green-300 my-3 self-end text-bh-blue-200 font-normal text-base cursor-pointer rounded py-1 px-3 hover:bg-bh-green-400' type="submit">
        {type === 'login' ? 'Log in' : 'Sign up'}
      </button>
      <span
      className='text-bh-gray-100 font-light text-sm self-center mt-3'
      >
        {type === 'login' ? 'Need an account? ' : 'Already have an account? '}
        <Link
        className='text-bh-yellow-100 hover:text-bh-yellow-200'
        href={type === 'login' ? '/signup' : '/login'}
        >
          {type === 'login' ? 'Sign up' : 'Log in'}
        </Link>
      </span>
    </form>
    <hr className='text-bh-gray-100'/>
    <div className='flex justify-evenly mt-6'>
      <RiGoogleLine className='h-10 w-10 fill-bh-gray-100 hover:fill-bh-gray-300 cursor-pointer'/>
      <RiGithubLine className='h-10 w-10 fill-bh-gray-100 hover:fill-bh-gray-300 cursor-pointer'/>
      <RiFacebookLine className='h-10 w-10 fill-bh-gray-100 hover:fill-bh-gray-300 cursor-pointer'/>
    </div>
  </div>
  );
};

export default LoginSignUp;