import React from 'react'
import Image2 from '../assets/Image2.jpg'
import Image1 from '../assets/Image1.jpg'

const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
        <div className='max-w-[1024px] mx-auto grid md:grid-cols-2'>
            
        <img className='w-[900px] mx-auto my-4 w-full h-auto p-6' src={Image2} alt='Description of Image 1'/>  
        <div className='flex flex-col justify-center p-10'>
            <p classname='text-[#800080] font-bpld'>TRACK YOUR PROGRESS</p>
            <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold p-4'>PRACTICE SESSIONS</h1>
            <p >Discover the comprehensive world of yoga within the pages of Yoga Magazine. Dive into a wealth of knowledge encompassing yoga exercises, meditation practices, mindfulness techniques, yoga philosophy, and beyond. Explore the holistic benefits that yoga offers and deepen your understanding of this ancient discipline.

            <p>DISCOVER NEW CHALLENGES
Move and flow with a series of classes designed to help you build new skills, get in the groove, train your brain, and more.</p>




       
        <button className=' text-white bg-[#0000ff] w-[240px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>
          Get Started
        </button>




</p>
<img className='w-[900px] mx-auto my-8 w-full h-auto flex-end p-4' src={Image1} alt='Description of Image 1'/>  
        </div>
       
            

        </div>
    </div>
  )
}

export default Analytics