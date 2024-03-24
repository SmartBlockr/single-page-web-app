import React from 'react'

const Newsletter = () => {
  return (
    <div className='w-full py-20 text-white px-4'>
        <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
            <div className='lg:col-span-2 my-4'>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>learn about asanas and meditation</h1>
                <p>sign up to our platform and stay up to date.</p>
            </div>
            
            <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
                <input className='p-3 flex w-full rounded-md text-black' type="email" placeholder='Enter Email'/>
                <button className='bg-[#0000ff] text-white rounded-md font-medium w-[200px] ml-4 my-6 px-6 py-3'>Notify</button>
            </div>
            
            <p>We care of your time and shedule.Read our <span className='text-[#0000ff]'>instructions</span></p>

        </div>
     
    </div>
  )
}

export default Newsletter