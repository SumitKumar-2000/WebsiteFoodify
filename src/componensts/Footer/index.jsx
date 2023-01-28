import React from 'react'
import '../../style/Footer.css'

function Footer() {
  return (
    <div>
      <div className='border-t-4 border-t-[#00745B]'></div>
      <div className="flex justify-between w-full p-1 lg:p-4 relative z-10 mt-11 mb-20 lg:mb-28">
  <div className="h-11">
    <p></p>
    <img src="./Images/FoodiFyyLogo/foodifyy logo 2.svg" alt="mainlogo" className='w-12 sm:w-16 md:w-28 lg:w-32'/>
  </div>
  <div className="flex-col justify-between h-11">
    <p className='company font-medium lg:font-semibold font-sans text-[0.9rem] sm:text-2xl md:text-3xl  lg:text-4xl text-green-800 pb-2'>Company</p>
    <div>
    <p className='sub_company_menu lg:font-medium text-[0.8rem] sm:text-lg md:text-xl lg:text-xl text-[#00745B]'><a href="#aboutus">AboutUs</a></p>
    <p className='sub_company_menu  lg:font-medium text-[0.8rem] sm:text-lg md:text-xl lg:text-xl text-[#00745B]'><a href="">Careers</a> </p>
    </div>
  </div>
  <div className="flex-col justify-between h-11">
    <p className='contactus font-medium lg:font-semibold font-sans text-[0.9rem] sm:text-2xl md:text-3xl  lg:text-4xl text-green-800 pb-2'>Contact Us</p>
    <div>
      <p><span className='sub_contactus_menu lg:font-medium text-[0.8rem] sm:text-lg md:text-xl lg:text-xl text-[#00745B]'>Call Us On:</span><span className='sub_contactus_menu lg:font-medium text-[0.8rem] sm:text-lg md:text-xl lg:text-xl text-[#00745B]'>(+91)9205851034</span></p>
      <p><span className='sub_contactus_menu lg:font-medium text-[0.8rem] sm:text-lg md:text-xl lg:text-xl text-[#00745B]'>Whatsapp us on:</span><span className='sub_contactus_menu lg:font-medium text-[0.8rem] sm:text-lg md:text-xl lg:text-xl text-[#00745B]'>+91-9205851034</span></p>
      <p><span className='sub_contactus_menu lg:font-medium text-[0.8rem] sm:text-lg md:text-xl lg:text-xl text-[#00745B]'>Mail us on: admin</span><span className='sub_contactus_menu lg:font-medium text-[0.8rem] sm:text-lg md:text-xl lg:text-xl text-[#00745B]'>@foodifyy.com</span></p>
    </div>
  </div>
  <div className="flex-col justify-between h-11">
    <a href="https://linktr.ee/foodifyy" target="_blank"><img src="./Images/SocialMediaLogo/icons8-linktree.svg" alt="logo1" className='w-6 sm:w-10 md:w-10 lg:w-10 rounded-full p-1 cursor-pointer'/></a>
    <a href="https://www.linkedin.com/company/foodifyy/" target="_blank"><img src="./Images/SocialMediaLogo/linkedin 1.svg" alt="logo2" className='w-6 sm:w-10 md:w-10 lg:w-10 rounded-full p-1 cursor-pointer'/></a>
  </div>
</div>
    </div>
  )
}

export default Footer