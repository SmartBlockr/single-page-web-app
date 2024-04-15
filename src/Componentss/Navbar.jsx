import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import ye from '../assets/ye.jpg';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const toggleNav = () => {
    setNav(!nav);
  };

  return (
    <nav className='relative flex justify-between items-center h-25 max-w-[2400px] mx-auto px-4 text-white bg-black full'>
      <div className='block md:hidden' onClick={toggleNav}>
        {!nav ? (
          <>
            <div className='w-6 h-6 border-b-2 border-white mb-1'></div>
            <div className='w-6 h-6 border-b-2 border-white mb-1'></div>
            <div className='w-6 h-6 border-b-2 border-white'></div>
          </>
        ) : (
          <AiOutlineClose size={20} />
        )}
      </div>

      <div className='flex justify-center items-center'>
        <h1 className='text-5xl font-bold text-[#ADD8E6]'>YogaEveryday.</h1>
      </div>

      <ul className={`md:flex ${nav ? '' : 'hidden'}`}>
        <li className='p-4'>Home</li>
        <li className='p-4'>About</li>
        <li className='p-4'>Contact</li>
        <li className='p-4'>Services</li>
      </ul>

      <div className='flex justify-end items-center'>
        <img className='w-[100px] h-[100px] flex-start p-2 mr-0' src={ye} alt='Description of ye' />
      </div>

      <div className={`md:hidden ${nav ? '' : 'hidden'}`}>
        <ul className='pt 24 uppercase'>
          <li className='p-6 border-b border-white-600'>Home</li>
          <li className='p-6 border-b border-white-600'>About</li>
          <li className='p-6 border-b border-white-600'>Contact</li>
          <li className='p-6 border-b border-white-600'>Services</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
