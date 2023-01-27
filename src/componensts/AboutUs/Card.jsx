import React from 'react'

function Card({devimg,devname,devdesig}) {
  return (
    <div className="carousel-item w-full max-h-full">
        <div className='grid grid-cols-2 place-items-center gap-4 bg-[#00745B] p-5'>
            <div className='place-self-end'>
              <img
              id="dev_image"
                src={devimg}
                className="block max-w-[10rem] max-h-2 sm:max-w-[15rem] md:max-w-[20rem] lg:max-w-[25rem] rounded-md"
                alt="Wild Landscape"
              />
            </div>
          <div className='place-self-center w-full max-h-full grid grid-cols-1 gap-4 text-white'>
              <h1 id="our_team" className='font-bold text-[1.6rem] sm:text-[2.3rem] md:text-[3rem] lg:text-[5rem]'>Our Time</h1>
              <h1 id="devname" className='font-medium text-[1rem] sm:text-[1.2rem] md:text-[1.7rem] lg:text-[2rem] text-left text-xs lg:text-lg'>{devname}</h1>
              <h1 id="dev_designation" className='font-medium text-[0.6rem] sm:text-[0.9rem] md:text-[1.1rem] lg:text-[1.4rem] text-left text-xs lg:text-lg'>-{devdesig}</h1>
              <p id="aboutus_description" className='max-w-[10rem] sm:max-w-sm md:max-w-[20rem] lg:max-w-[23rem] text-[0.5rem] sm:text-[0.8rem] md:text-[1.1rem] lg:text-[1rem] text-left font-medium text-xs lg:text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dictum, augue sed semper maximus, purus ante vulputate enim, vitae eleifend dui metus facilisis leo</p>
          </div> 
        </div>
      </div>
  )
}

export default Card