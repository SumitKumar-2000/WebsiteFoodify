import React from 'react'
import '../../style/contactus.css';
import '../../style/ContactForm.css'
import ContactUsForm from './ContactUsForm';

const ContactUs = () => {
  return (<div id='ContactUs' className='relative mt-28 lg:mt-56 mb-28 lg:mb-64'>
            <div class="grid grid-cols-2 gap-24 lg:gap-0 w-full h-full absolute place-items-center z-10 ">
                <div><img src="./Images/Contactus_Images/leaves 1.svg" alt=""  className="w-[13rem] lg:w-[20rem]"/></div>
                <div><img src="./Images/Contactus_Images/Artboard 10 copy 8.svg" alt="" className="w-[13rem] lg:w-[20rem]" /></div>
                <div><img src="./Images/Contactus_Images/mushrooms 2.svg" alt=""  className="w-[13rem] lg:w-[20rem]"/></div>
                <div><img src="./Images/Contactus_Images/Untitled-1 3.svg" alt=""  className="w-[13rem] lg:w-[20rem]"/></div>
            </div>
            <div class="grid grid-cols-1 gap-4 place-items-center mt-10 mb-10 bg-no-repeat bg-center relative" >
            <img src="./Images/Contactus_Images/Vector.svg" alt="" className="absolute sm:hidden md:hidden lg:hidden w-[49rem]"/>
            <img src="./Images/Contactus_Images/Vector-1.svg" alt="" className="absolute hidden sm:block sm:w-[60rem] md:block lg:block w-[49rem]"/>
            <ContactUsForm/>
        </div>
  </div>
  )
}

export default ContactUs