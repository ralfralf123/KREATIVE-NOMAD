import React from 'react';
import NavBar from '../components/navBar';
import Window from '../components/window';
import PageMap from '../components/pageMap';
import backgroundServices from '../assets/services-bg.PNG';
import backgroundDecor from '../assets/bg-decor-removebg.png'
import FakeNavBar from '../components/FakeNavBar';
import { useNav } from '../hooks/useNav';

const Services = () => {
  const serviceRef = useNav("services");
  return (
    <div className='relative w-full h-screen flex flex-col' id='services' ref={serviceRef}> 
        <img src={backgroundServices} className="absolute inset-0 w-full h-screen object-cover" />  
      <div className='relative w-full h-screen bg-services bg-opacity-75 flex flex-col'>
        <div className='absolute w-full h-screen'>
          <img src={backgroundDecor} alt="bg-decor"  />
        </div>
        <FakeNavBar />
        <div className='mx-32'>
          <div className='flex flex-col text-center justify-center p-14 pt-0'>
            <h1 className='font-paragraph text-3xl text-beige text-bold'><strong>Brand Strategy</strong></h1>
            <p className='text-white text-2xl'>(Communication and Visual Guidelines)</p>
          </div>
          <div className="absolute right-16">
            <Window text='SCROLL DOWN.' paragraph='To locate some of our crafts!' />
          </div>
          <div className='flex flex-col text-center justify-center p-14 pt-0'>
            <h1 className='font-paragraph text-3xl text-beige text-bold'><strong>Website Design and Development</strong></h1>
          </div>
          <div className='flex flex-col text-center justify-center p-14 pt-0'>
            <h1 className='font-paragraph text-3xl text-beige text-bold'><strong>Social Media Marketing</strong></h1>
          </div>
          <div className='flex flex-col text-center justify-center p-14 pt-0'>
            <h1 className='font-paragraph text-3xl text-beige text-bold'><strong>Creative Services</strong></h1>
            <p className='text-white text-2xl'>(Photoshoot, brand kit, marketing collaterals)</p>
          </div>  
        </div> 
      </div>
    </div>
  )
}

export default Services;