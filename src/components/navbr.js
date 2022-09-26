import React from 'react'
import '../style/navbr.css'
import { Link } from 'react-scroll'
import { useState } from 'react';
import {VscChromeClose, VscMenu} from 'react-icons/vsc'

const NavBar = () => {
  const [click, setClick] = useState(false);
  
  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);
  
  return (
    <div>
     <div className={click ? "main-container" : ""}  onClick={()=>Close()} />
      <nav className="navbar" onClick={e => e.stopPropagation()}>
        <div className="nav-container">
          <div className="nav-logo">
          <img src={require('../assets/foodifyyLogo.PNG')} alt="foodify icon" className='foodifyIcon'/>
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link
                to='home' smooth={true} offset={-100} duration={1500}
                activeClassName="active"
                className="nav-links curPointer"
                onClick={click ? handleClick : null}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to='service' smooth={true} offset={-100} duration={1500}
                activeClassName="active"
                className="nav-links curPointer"
                onClick={click ? handleClick : null}
              >
                Service
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to='about' smooth={true} offset={-100} duration={1500}
                activeClassName="active"
                className="nav-links curPointer"
                onClick={click ? handleClick : null}
              >
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to='contact' smooth={true} offset={-100} duration={1500}
                activeClassName="active"
                className="nav-links curPointer"
                onClick={click ? handleClick : null}
              >
                Contact Us
              </Link>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            {click ? <VscChromeClose /> : <VscMenu />}
          </div>
        </div>
      </nav>
    </ div>
  )
}

export default NavBar
