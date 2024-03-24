import React from 'react';
import Image3 from '../assets/Image3.png';

const Cards = () => {
  return (
    <div className='w-full py-[10rem] px-4 bg-white '>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Image3} alt="Description of Image3" />
                <h2 className='text-2xl font-bold text-center py-8'>Basic</h2>
                <p className='text-center text-4xl font-bold'>plan</p>
                <div className='text-center font-medium'>
                <p className='py-2 border-b mx-8 mt-8'>subscription</p>
                    <p className='py-2 border-b mx-8'>single user</p>
                   </div>
                <div>
                    <button className='bg-[#0000ff] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Lets start</button>
                    
                </div>
                </div>
                <div className='w-full shadow-xl bg-white-100 flex flex-col p-4 my-8 md:my-0 rounded-lg hover:scale-105 duration-300'>
                <img className='w-20 mx-auto mt-[-3rem] bg-transparent' src={Image3} alt="Description of Image3" />
                <h2 className='text-2xl font-bold text-center py-8'>monthly</h2>
                <p className='text-center text-4xl font-bold'>plan</p>
                <div className='text-center font-medium'>
                <p className='py-2 border-b mx-8 mt-8'>subscription</p>
                    <p className='py-2 border-b mx-8'>single user</p>
                   </div>
                <div>
                    <button className='bg-[#FFA500] w-[200px]   rounded-md font-medium my-6 mx-auto px-6 py-3'>Lets start</button>
                    
                </div>
                 </div>
                
                 <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Image3} alt="Description of Image3" />
                <h2 className='text-2xl font-bold text-center py-8'>Annual</h2>
                <p className='text-center text-4xl font-bold'>plan</p>
                <div className='text-center font-medium'>
                <p className='py-2 border-b mx-8 mt-8'>subscription</p>
                    <p className='py-2 border-b mx-8'>single user</p>
                   </div>
                <div>
                    <button className='bg-[#0000ff] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Lets start</button>
                    
                </div>
              </div>
              </div>
              </div>

  )
}

export default Cards