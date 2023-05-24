import logo from '../assets/logo.png';
import hamburger from '../assets/hamburger.png';
import React, { useEffect, useRef } from 'react';

const NavBar = () => {
  return (
    <div className="top-0 left-0 w-full bg-transparent fixed ">
      <div className="relative w-full h-32 flex items-center">
        <img src={logo} alt="logo" className="ml-16 mt-14 w-28 scale-90" />
        <div className="absolute right-0 mr-16 mb-10">
          <img src={hamburger} alt="hamburger" />
        </div>
      </div>
    </div>

  )
}

export default NavBar