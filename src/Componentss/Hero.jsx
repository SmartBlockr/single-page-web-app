import React from 'react';
import { ReactTyped } from "react-typed";

const Hero = () => {
  return (
    <div className='text-purple'>
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <p className='text-brown font-bold text-3xl md:text-4xl mb-4'>EMBARK ON PRACTICE</p>
        <h1 className='text-6xl md:text-7xl sm:text-6xl font-bold mb-8 leading-tight'>Daily Yoga To Wellness</h1>
        <div className='flex justify-center items-center mb-8'>
          <p className='text-2xl md:text-4xl sm:text-3xl font-bold mr-4 text-gray-700'>LEARNING for</p>
          <ReactTyped
            className='text-2xl md:text-4xl sm:text-3xl font-bold text-white'
            strings={[
              'Balanced being',
              'Radiant Wellness',
              'Serene Strength',
            ]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <p className='text-lg md:text-xl font-bold text-gray-700 mb-8'>
          "Elevate Your Everyday with Yoga"
        </p>
        <div className="flex justify-center">
          <button className='text-white bg-[#0000ff] w-[240px] rounded-md font-medium py-3 hover:bg-blue-600 transition duration-300 ease-in-out'>
            Get started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
