import React from 'react'
import { FaArrowUp } from 'react-icons/fa';
import '../style/scrollToTop.css'

const ScrollToTop = () => {

  const scrollUp = () =>{
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })
  }  

  return (
    <div onClick={scrollUp} className='upIconContainer absoluteCenter'>
        <FaArrowUp className='curPointer'/>
    </div>
  )
}

export default ScrollToTop
