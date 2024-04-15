import React from 'react';
import Image3 from '../assets/Image3.png';

const Cards = () => {
  return (
    <div className='w-full py-20 px-4 bg-white'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
        <div className='w-full shadow-lg flex flex-col p-8 my-4 rounded-lg hover:shadow-xl transition duration-300'>
          <img className='w-20 mx-auto -mt-16 bg-white' src={Image3} alt="Description of Image3" />
          <h2 className='text-3xl font-bold text-center mt-8'>Basic Plan</h2>
          <p className='text-center text-4xl font-bold mt-4'>$9.99<span className='text-sm'>/month</span></p>
          <div className='text-center mt-8'>
            <p className='py-2 border-b mx-8'>Subscription</p>
            <p className='py-2 border-b mx-8'>Single User</p>
          </div>
          <button className='bg-[#0000ff] w-[200px] rounded-md font-medium my-8 mx-auto py-3'>Let's Start</button>
        </div>

        <div className='w-full shadow-lg bg-white flex flex-col p-8 my-4 md:my-0 rounded-lg hover:shadow-xl transition duration-300'>
          <img className='w-20 mx-auto -mt-16 bg-transparent' src={Image3} alt="Description of Image3" />
          <h2 className='text-3xl font-bold text-center mt-8'>Monthly Plan</h2>
          <p className='text-center text-4xl font-bold mt-4'>$19.99<span className='text-sm'>/month</span></p>
          <div className='text-center mt-8'>
            <p className='py-2 border-b mx-8'>Subscription</p>
            <p className='py-2 border-b mx-8'>Single User</p>
          </div>
          <button className='bg-[#FFA500] w-[200px] rounded-md font-medium my-8 mx-auto py-3'>Let's Start</button>
        </div>

        <div className='w-full shadow-lg flex flex-col p-8 my-4 rounded-lg hover:shadow-xl transition duration-300'>
          <img className='w-20 mx-auto -mt-16 bg-white' src={Image3} alt="Description of Image3" />
          <h2 className='text-3xl font-bold text-center mt-8'>Annual Plan</h2>
          <p className='text-center text-4xl font-bold mt-4'>$99.99<span className='text-sm'>/year</span></p>
          <div className='text-center mt-8'>
            <p className='py-2 border-b mx-8'>Subscription</p>
            <p className='py-2 border-b mx-8'>Single User</p>
          </div>
          <button className='bg-[#0000ff] w-[200px] rounded-md font-medium my-8 mx-auto py-3'>Let's Start</button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
