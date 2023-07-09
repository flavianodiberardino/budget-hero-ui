import React from 'react';

import Link from 'next/link';

import { leagueSpartan } from '@/app/fonts';

import { BiWorld } from 'react-icons/bi';

import Dropdown from '../dropdown';

const Header = () => {
  const dropdownOpts = [
    { id: 1, label: 'EN' },
    { id: 2, label: 'ES' },
  ];

  return (
    <div className={`${leagueSpartan.className} bg-bh-blue-200 tracking-tight fixed shadow-xl w-full h-16 px-32 flex items-center overflow-visible`}>
      <Link className='text-bh-yellow-100 font-extrabold text-4xl mr-20' href='/'>
        BudgetHero
      </Link>
      <span className='text-bh-gray-100 font-semibold text-xl cursor-pointer hover:underline decoration-bh-yellow-100 underline-offset-4 mr-10'>
        What is BH?
      </span>
      <span className='text-bh-gray-100 font-semibold text-xl cursor-pointer hover:underline decoration-bh-yellow-100 underline-offset-4 mr-10'>
        Share BH
      </span>
      <span className='text-bh-gray-100 font-semibold text-xl cursor-pointer hover:underline decoration-bh-yellow-100 underline-offset-4'>
        Contribute
      </span>
      <div className='ml-auto'>
        {/* TODO: Create reusable button component */}
        <Link href='/login' className='bg-bh-gray-100 text-bh-blue-200 font-semibold text-xl cursor-pointer mr-4 rounded-full py-3 px-4 hover:bg-bh-gray-300'>
          Log in
        </Link>
        <Link href='/register' className='bg-bh-green-300 text-bh-blue-200 font-semibold text-xl cursor-pointer rounded-full py-3 px-4 hover:bg-bh-green-400'>
          Sign up
        </Link>
      </div>
      <Dropdown
          className='ml-20 h-6'
          items={dropdownOpts}
          value={dropdownOpts[0]}
        >
          <BiWorld className='text-bh-yellow-100 h-6 w-6 hover:text-bh-yellow-200'/>
      </Dropdown>
    </div>
  );
};

export default Header;
