import React from 'react'
import photo from '../assets/myPhoto.png';
import '../App.css'

function Navbar() {
  return (
    <>
    <div className="MainContainer ">
    <div className='bg-olive h-12 my-10 w-100 mx-96  rounded-3xl'>
    <div className='flex justify-around'>
    <p className='bg-yellowMix text-3xl rounded-3xl inline-block mx-3 my-1.5 w-10 text-center text-gray-600'>M</p>
    <h1 className='my-1.5 inline-block text-white text-2xl'>Meraj Sayed </h1>
    <div>
      <ul className='flex justify-end gap-7 text-white my-2'>
        <li className="hover:text-yellowMix rounded-md transition-all duration-300 cursor-pointer">
          <p>Home</p>
        </li>
        <li className="hover:text-yellowMix rounded-md transition-all duration-300 cursor-pointer">
          <p>About Me!</p>
        </li>
        <li className="hover:text-yellowMix rounded-md transition-all duration-300 cursor-pointer">
          <p>Services</p>
        </li>
        <li className="hover:text-yellowMix rounded-md transition-all duration-300 cursor-pointer fonts">
          <p>Contact Me!</p>
        </li>

      
      </ul>
      
      </div>
    </div>
      
    
    </div>
    <div className="banner flex justify-center ">
      <img src={photo} alt="myphoto" className='w-72 rounded-full '/>
    </div>
    <div className="devonshire-regular text-8xl text-olive text-center">Hello World !</div>

    </div>




    </>
    
  )
}

export default Navbar