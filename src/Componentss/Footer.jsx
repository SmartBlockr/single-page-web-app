import React from 'react';
import {
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className='max-w-7xl mx-auto py-12 px-4 grid grid-cols-1 lg:grid-cols-3 gap-8 text-gray-600'>
      {/* Logo and description */}
      <div className='lg:col-span-2'>
        <h1 className='text-3xl font-bold text-white mb-6'>YogaEveryday</h1>
        <p className='text-sm leading-relaxed'>
          Welcome to YogaEveryday, where you can embark on a journey to wellness through yoga. Our analytics section provides valuable insights to track your progress and guide you on your path to wellness. Whether you're a seasoned yogi or just starting, we're here to support you.
        </p>
        {/* Social media icons */}
        <div className='flex space-x-4 mt-4'>
          <FaFacebookSquare className='text-3xl text-blue-500 hover:text-blue-600' />
          <FaInstagram className='text-3xl text-purple-500 hover:text-purple-600' />
          <FaTwitterSquare className='text-3xl text-blue-400 hover:text-blue-500' />
          <FaGithubSquare className='text-3xl text-gray-500 hover:text-gray-600' />
        </div>
      </div>
      {/* Quick links */}
      <div className='flex flex-col space-y-4'>
        <h2 className='font-bold text-lg text-gray-800 mb-2'>Quick Links</h2>
        <ul className='text-sm'>
          <li>Our Mission</li>
          <li>Topics</li>
          <li>Help & FAQs</li>
          <li>Testimonials</li>
        </ul>
      </div>
      {/* Services */}
      <div className='flex flex-col space-y-4'>
        <h2 className='font-bold text-lg text-gray-800 mb-2'>Services</h2>
        <ul className='text-sm'>
          <li>Contact Us</li>
          <li>Gift Cards</li>
          <li>Outtakes</li>
          <li>Styles</li>
        </ul>
      </div>
      {/* Explore */}
      <div className='flex flex-col space-y-4'>
        <h2 className='font-bold text-lg text-gray-800 mb-2'>Explore</h2>
        <ul className='text-sm'>
          <li>Donate</li>
          <li>Videos</li>
          <li>Programs</li>
          <li>Classes</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;