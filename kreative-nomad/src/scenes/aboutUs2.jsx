import React, { useState, useEffect, useRef } from 'react';
import NavBar from '../components/navBar';
import Window2 from '../components/window2';
import PageMap from '../components/pageMap';
import background2 from '../assets/aboutUs2-bg.PNG';


const AboutUs2 = () => {

  return (
    <>
    <div className='relative w-screen h-screen bg-about bg-cover bg-no-repeat flex flex-col ' style={{backgroundImage: `url(${background2})`}}> 
      <div className=" top-0 left-0 w-full bg-transparent z-10">
        <div className="relative w-full h-32 flex items-center">
        </div>
      </div>
      <div class="relative bottom-14 flex mx-32">
            <div class="w-1/2"></div>
            <div class="w-1/2 flex justify-end">
            <Window2 text='SCROLL DOWN.' paragraph='For the next stop.' />
            </div>
      </div>
      <div className='relative bottom-20 w-full flex-grow snap-center'>
        <div className='mx-32'>
            <div className='flex flex-col'>
                <h1 className='font-paragraph text-5xl text-justify leading-snug'><strong>DISCOVER</strong></h1>
                <h1 className='font-paragraph text-4xl text-left pb-6 '>We hone digital marketing and provide visionary strategies.</h1>
            </div>
            <div className='flex flex-col'>
                <h1 className='font-paragraph text-5xl text-justify leading-snug'><strong>INNOVATE</strong></h1>
                <h1 className='font-paragraph text-4xl text-left pb-6'>Creativity is Infinite and so are we.</h1>
            </div>
            <div className='flex flex-col'>
                <h1 className='font-paragraph text-5xl text-justify leading-snug'><strong>EMPOWER</strong></h1>
                <h1 className='font-paragraph text-4xl text-left pb-6'>Our course of action help brands get traction online.</h1>
            </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default AboutUs2;