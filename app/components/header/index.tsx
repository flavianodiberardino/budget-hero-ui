import React from 'react';

import Link from 'next/link';

const Header = () => {
  return (
    <div className='bg-bh-blue-200 fixed top-0 w-full h-14 px-40 flex items-center overflow-visible'>
      <Link className='text-bh-yellow-100 font-bold text-3xl mr-20' href='/'>
        BudgetHero
      </Link>
      <span className='text-bh-gray-100 font-normal text-lg cursor-pointer hover:underline decoration-bh-yellow-100 decoration-1 underline-offset-4 mr-10'>
        What is BH?
      </span>
      <span className='text-bh-gray-100 font-normal text-lg cursor-pointer hover:underline decoration-bh-yellow-100 decoration-1 underline-offset-4 mr-10'>
        Share BH
      </span>
      <span className='text-bh-gray-100 font-normal text-lg cursor-pointer hover:underline decoration-bh-yellow-100 decoration-1 underline-offset-4'>
        Contribute
      </span>
      <div className='ml-auto'>
        {/* TODO: Create reusable button component */}
        <Link href='/login' className='bg-bh-gray-100 text-bh-blue-200 font-normal text-base cursor-pointer mr-4 rounded py-2 px-3 hover:bg-bh-gray-300'>
          Log in
        </Link>
        <Link href='/signup' className='bg-bh-green-300 text-bh-blue-200 font-normal text-base cursor-pointer rounded py-2 px-3 hover:bg-bh-green-400'>
          Sign up
        </Link>
      </div>
    </div>
  );
};

export default Header;
