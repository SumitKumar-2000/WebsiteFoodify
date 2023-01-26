import React from 'react'
import { FaArrowUp } from 'react-icons/fa';

const ScrollToTop = () => {

  const scrollUp = () =>{
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })
  }  

  return (
    <div onClick={scrollUp} className='cursor-pointer rounded-full shadow-sm bg-[#00745B] p-4 w-4 h-4 flex justify-center items-center fixed bottom-4 right-4 z-10'>
        <div>
            <FaArrowUp className=' text-gray-200'/>
        </div>
    </div>
  )
}

export default ScrollToTop