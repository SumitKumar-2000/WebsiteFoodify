import React, { useState } from 'react'
import Footer from '../componensts/Footer'
import Header from '../componensts/Header'
import Navbar from '../componensts/Navbar'
import AboutUs from '../componensts/AboutUs'
import Services from '../componensts/Services'
import ScrollToTop from '../componensts/Buttons/scrollToTopButton'
import ContactUs from '../componensts/ContactUs'

const Home = () => {

  const [scrollToTopButton, setScrollToTopButton] = useState(true)
  
  window.addEventListener('scroll',()=>{
    if(window.scrollY > 200){
        setScrollToTopButton(true)
    }else{
        setScrollToTopButton(false)
    }
  })

  return (
    <div>
        {!scrollToTopButton && <Navbar/>}
        <div>
        <Header/>
        <Services/>
        <AboutUs/>
        <ContactUs/>
        <Footer/>
      </div>
        {scrollToTopButton && <ScrollToTop setScrollToTopButton={setScrollToTopButton}/>}
    </div>
  )
}

export default Home