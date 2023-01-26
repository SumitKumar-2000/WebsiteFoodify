import React from 'react'

function RightComponent() {
  return (
    <div className='place-self-end  relative'>
      <div className='absolute grid grid-cols-2 w-full h-full gap-0 place-items-center left-0 right-0 z-10 md:bg-yellow-20'>
        {/* First Row */}
        <img src="./Images/Header/Untitled-1 2.svg" alt="bowl" className='header_images max-w-[6rem] sm:max-w-[5rem] md:max-w-[15rem] lg:max-w-[20rem]'/>
        <div className='flex justify-start w-full  '>
          <img src="./Images/Header/25gm carbs.svg" alt="bowl" className='header_images max-w-[1.4rem] sm:max-w-[2.5rem] md:max-w-[3.5rem] lg:max-w-[4.5rem] place-self-end'/>
          <img  src="./Images/Header/Artboard 10 2.svg" alt="bowl" className='header_images max-w-[3rem] sm:max-w-[5rem] md:max-w-[10rem] lg:max-w-[14rem] place-self-start'/>
          
        </div>


        {/* Second Row */}
        <div className="w-full grid grid-cols-2 place-items-end ">
          <img id="gm_protien15" src="./Images/Header/15gm protien.svg" alt="bowl" className='header_images max-w-[4rem] sm:max-w-[5rem] md:max-w-[5rem] lg:max-w-[10rem]'/>
          <img src="./Images/Header/Artboard 10 1.svg" alt="bowl" className='header_images max-w-[3rem] sm:max-w-[5rem] md:max-w-[5rem] lg:max-w-[10rem]'/>
        </div>
        <img src="./Images/Header/Artboard 10 2.svg" alt="bowl" className='header_images max-w-[3rem] sm:max-w-[5rem] md:max-w-[7rem] lg:max-w-[10rem]'/>


        {/* Last Row */}
        <div className='w-full flex justify-end'>
          <img src="./Images/Header/Artboard 10 copy 2 1.svg" alt="bowl" className='header_images max-w-[3rem] sm:max-w-[5rem] md:max-w-[15rem] lg:max-w-[16rem]'/>
        </div>
        <div className='w-full flex justify-center'>
          
          <img id="mushroom" src="./Images/Header/mushrooms 1.svg" alt="bowl" className='header_images max-w-[5rem] sm:max-w-[5rem] md:max-w-[5rem] lg:max-w-[10rem]'/>
          <img id="Artboard_106" src="./Images/Header/Artboard 10 copy 6.svg" alt="bowl" className='header_images max-w-[3rem] sm:max-w-[5rem] md:max-w-[5rem] lg:max-w-[10rem]'/>
        </div>
      </div>


      <div  className='absolute grid grid-rows-1 w-full h-full place-items-center place-content-end left-0 right-0 z-20'>
        <img id="bowl_image" src="./Images/Header/Untitled-1 1.svg" alt="bowl" className='max-w-[10rem] sm:max-w-[12rem] md:max-w-[15rem] lg:max-w-[20rem]'/>
      </div>
      <img src="./Images/Header/Vector.svg" alt="vector_image" className="w-full relative"/>
    </div>
  )
}

export default RightComponent