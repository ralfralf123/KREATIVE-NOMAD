import React, { useState, useEffect } from 'react';
import videoBG from '../assets/bg-video.mp4';
import NavBar from '../components/navBar';
import Window from '../components/window';
import PageMap from '../components/pageMap';
import FakeNavBar from '../components/FakeNavBar';
import { useNav } from '../hooks/useNav';

const HomePage = () => {
  const homeRef = useNav("home");

  return (
      <div className="bg-cover bg-yellow-400 overflow-hidden" id='home' ref={homeRef}>
      <video autoPlay muted loop className="absolute inset-0 w-full h-full object-cover">
        <source src={videoBG} type="video/mp4" />
      </video>    
      <div className="relative bg-cover bg-background bg-opacity-75 h-screen">
        <FakeNavBar />
        <div class="flex mt-10 mx-32">
            <div class="w-1/2"></div>
            <div class="w-1/2 flex justify-end">
              <Window paragraph='Click to start you journey.'/>
            </div>
        </div>

        <div className='flex justify-center p-10'>
          <h1 className='font-title text-white text-5xl text-center'>Your creative marketing journey starts here! </h1>
        </div>
        <div className="transition-opacity duration-500 ease-in-out ${isScrolled ? 'opacity-0' : 'opacity-100'}">
        </div>
      </div>
    </div>
  )
}

export default HomePage;