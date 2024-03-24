import React from 'react';
import {
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
}from "react-icons/fa";

const Footer = () => {
  return (
    <div className='max-width-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-black-300'>
      <div>
      <h1 className=' text-white m-6 font-bold w-[100px]'>YogaEveryday.</h1>
      <p className='py-4'>
      "Welcome to our Analytics section, where you can gain valuable insights into your yoga journey. Track your progress, monitor your practice frequency, and observe your growth over time. Our analytics tools empower you to understand your practice habits, celebrate your achievements, and set new goals. Whether you're a seasoned yogi or just starting your journey, our analytics page is here to support and guide you on your path to wellness."
      </p>
      <div className='flex justify-between md:w-[50%] my-4'>
        <FaFacebookSquare size={30}/>
        <FaInstagram size={30}/>
        <FaTwitterSquare size={30}/>
        <FaGithubSquare size={30} />

      </div>
    </div>
    <div className='lg:col-span-3 flex justify-between'>
      <h6 classname='font-medium text-black-400 '></h6>
      <ul>
        <li className='py-2 text-sm'>Our mission </li>
        <li className='py-2 text-sm'>Topics</li>
        <li className='py-2 text-sm'>Help & FAQs</li>
        <li className='py-2 text-sm'>Testimonals</li>
      </ul>
      <div className='lg:col-span-3 flex justify-between'>
      <h6 classname='font-medium text-black-400'></h6>
      <ul>
        <li className='py-2 text-sm'>Contact Us </li>
        <li className='py-2 text-sm'>Gift cards</li>
        <li className='py-2 text-sm'>Outtakes</li>
        <li className='py-2 text-sm'>styles</li>
      </ul>
    </div>
    <div className='lg:col-span-3 flex justify-between'>
      <h6 classname='font-medium text-black-400'></h6>
      <ul>
        <li className='py-2 text-sm'>Donate </li>
        <li className='py-2 text-sm'>Videos</li>
        <li className='py-2 text-sm'>Programs</li>
        <li className='py-2 text-sm'>Classes</li>
      </ul>
    </div>
    </div>
   
   
    </div>
   
  )
   
}

export default Footer