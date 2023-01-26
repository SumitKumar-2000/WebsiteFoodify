import React from 'react'

function LeftComponent() {
  return (
    <div lassName='relative' id="left-section">
        <h1 id="head" className="font-bold text-2xl sm:text-5xl md:text-[3.7rem] lg:text-[5.6rem]">Welcome To</h1>
        <h1 id="subhead" className='font-bold text-2xl sm:text-3xl md:text-5xl lg:text-7xl text-[#00745B] mb-3'>Foodifyy</h1>
        <p id="caption" className='font-semibold mb-3 text-[0.6rem] lg:text-lg'><span>Create.</span><span className='text-[#00745B]'>Collaborate.</span>Stay Fit</p>
        <p id="description" className='max-w-[12rem] sm:max-w-[14rem] md:max-w-[15rem] lg:max-w-sm text-left font-medium text-xs lg:text-xl'>Foodifyy is a machine learning based health tech startup. At Foodifyy we aim to provide you with a new experience to know more about what you are eating.</p>
    </div>
  )
}

export default LeftComponent