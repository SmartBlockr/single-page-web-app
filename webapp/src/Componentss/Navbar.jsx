import React  from 'react'
import { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import ye from '../assets/ye.jpg'

 const Navbar = () => {
      const [nav, setNav] = useState(false)

      const handleNav = () => {
        
        setNav(!nav);
          
      }
  return (

    <div className='flex justify-end items-center h-40 max-w-[2400px] mx-auto px-4 text-white bg-black full'>
    
      <div onClick={handleNav} classNAme='block md:hidden '>
        
        <img className='w-[100px]  top-40 h-30  flex-start p-2 mr-0' src={ye} alt='Description of ye'/>  
        
       <h1 className='w-full text-5xl font bold absolute top-20 left-0 h-full border-black flex justify-center text-[#ADD8E6] m-4'>YogaEveryday.</h1>
       {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
       <ul className='hidden md:flex ' >
        
           <li className='p-4 flex-end'>Home</li>
           <li className='p-4 flex-end'>About</li>
           <li className='p-4 flex-end'>Contact</li>
           <li className='p-4 flex-end'>Services</li>
            
       </ul>


        
        
       
      
       
   <div className={!nav ? 'fixed left-0 top-0 w-[15%] h-full border-r border-r-black-900 bg-gray-600 ease-in-out duration-500' : 'fixed left-[-100%]'}>
  
     <h1 className='w-full text-3xl font-bold text-white m-4'>YogaEveryday</h1>
    <ul className='flex-container '></ul>
        <ul className='pt 24 uppercase'>
           <li className='p-6 border-b border-white-600'>Home</li>
           <li className='p-6 border-b border-white-600'>About</li>
           <li className='p-6 border-b border-white-600'>Contact</li>
           <li className='p-6 border-b border-white-600'>Services</li>
        </ul>
       
       </div>
 
    </div>
  
    </div>
    
  
    
     
     );
     
     };

     export default Navbar
