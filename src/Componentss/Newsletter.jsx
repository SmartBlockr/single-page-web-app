import React from 'react';

const Newsletter = () => {
  return (
    <div className='w-full py-20 text-black px-4 bg-gradient-to-r from- orange-500 to- dark orange-700'>
      <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-8'>
        <div className='lg:col-span-2 my-4'>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2 text-white'>Learn about Asanas and Meditation</h1>
          <p className='text-white'>Sign up to our platform and stay up to date.</p>
        </div>

        <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
          <input className='p-3 flex w-full rounded-md text-black bg-white placeholder-gray-500' type="email" placeholder='Enter Email' />
          <button className='bg-[#0000ff] text-white rounded-md font-medium w-full sm:w-auto mt-4 sm:mt-0 ml-0 sm:ml-4 px-6 py-3'>Notify</button>
        </div>

        <p className='text-white my-4 lg:col-span-3'>
          We care about your time and schedule. Read our <span className='text-black cursor-pointer'>instructions</span>.
        </p>
      </div>
    </div>
  );
};

export default Newsletter;
