import React from 'react'
import '../style/navbar.css'
import { Link } from 'react-scroll'


const Navbar = () => {

  return (
    <div className='navContainer'>
        <div className='featuredIcon'>
            <img src={require('../assets/foodifyyLogo.PNG')} alt="foodify icon" className='foodifyIcon'/>
        </div>
        <div className="buttonContainer">
            <Link to='home' smooth={true} offset={-100} duration={700} className='navButton curPointer'>Home</Link>
            <Link to='service' smooth={true} offset={-100} duration={700} className='navButton curPointer'>Service</Link>
            <Link to='about' smooth={true} offset={-100} duration={700} className='navButton curPointer'>About Us</Link>
            <Link to='contact' smooth={true} offset={-100} duration={700} className='navButton curPointer'>Contact Us</Link>

        </div>
    </div>
  )
}

export default Navbar
