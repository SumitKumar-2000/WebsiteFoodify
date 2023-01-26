import React from 'react'
import { Link } from 'react-scroll'

// foodifyy logo import
import foodifyyLogo from '../../assets/foodifyyLogo/desktop_FoodifyyLogo.svg'

const Navbar = () => {

  const scrollRoutes = [
    {route:"Header"},
    {route:"Services"},
    {route:"AboutUs"},
    {route:"ContactUs"},
  ]

  return (
    <div>
        {/* desktop navbar */}
        <div className='flex justify-between items-center px-10' >
            <div>
                <img src={foodifyyLogo} alt="foodifyy-logo"/>
            </div>
            <div className='hidden md:inline-flex' >
                <div className='flex gap-[8rem]'>
                    {
                        scrollRoutes.map((route,index) => {
                            return <div className='cursor-pointer group' key={index}>
                                <Link 
                                    to={route.route} 
                                    className='text-[#1e1e1e] group-hover:text-[#00745B] duration-500 font-semibold'
                                    smooth={true} offset={-100} duration={800}
                                >
                                    {route.route}
                                </Link>
                                <div className='bg-gradient-to-r from-[#00745B] to-[#00FFC8] w-0 group-hover:w-[3rem] h-[3px] transition-all duration-500'></div>
                            </div>
                        })
                    }
                </div>
            </div>
            <div className='md:hidden' >
            &#9776;
            </div>
        </div>
    </div>
  )
}

export default Navbar