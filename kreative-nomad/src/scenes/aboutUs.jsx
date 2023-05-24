import React, { useState, useEffect, useRef } from 'react';
import NavBar from '../components/navBar';
import PageMap from '../components/pageMap';
import Window2 from '../components/window2';
import FakeNavBar from '../components/FakeNavBar';
import { useNav } from '../hooks/useNav';

const AboutUs = () => {
  const aboutRef = useNav("aboutUs");

  return (
    <>
      <div ref={aboutRef} className='relative w-full h-screen bg-about flex flex-col' id='aboutUs' >
        <FakeNavBar />
        <div className="relative bottom-14 flex mx-32">
          <div className="w-1/2"></div>
          <div className="w-1/2 flex justify-end">
            <Window2 text='SCROLL DOWN.' paragraph='To get to know us more!' />
          </div>
        </div>
        <div className='relative bottom-14 w-full flex-grow'>
          <div className='mx-32'>
            <h1 className='font-paragraph text-5xl text-justify leading-snug'><strong>We are Kreativ Nomad, </strong>a group of creative wanderers with years of experience in digital marketing. In the last four years, we have helped micro businesses and SME's empower their brands by crafting their creative digital marketing solution.</h1>  
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
