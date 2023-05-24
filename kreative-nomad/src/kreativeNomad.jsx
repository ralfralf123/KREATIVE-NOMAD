import React, { useRef } from 'react'
import HomePage from './scenes/homePage';
import AboutUs from './scenes/aboutUs';
import AboutUs2 from './scenes/aboutUs2';
import Services from './scenes/services';
import Crafts from './scenes/crafts';
import ClientPage from './scenes/clientPage';
import ContactUs from './scenes/contactUs';
import { ScrollContainer, ScrollSection } from 'react-scroll-snap';
import useScrollSnap from 'react-use-scroll-snap';

const KreativeNomad = () => {
    const scrollRef = useRef(null);
    useScrollSnap({ ref: scrollRef, duration: 100, delay: 50 });
    
  return (
    <div className='snap-y snap-mandatory h-screen w-screen overflow-auto'>
        <div className='snap-start'>
            <HomePage />
        </div>
        <div className='snap-start'>
            <AboutUs />  
        </div>
        <div className='snap-start'>
            <AboutUs2 />
        </div>
        <div className='snap-start'>
            <Services />
        </div>
        <div className='snap-start'>
            <Crafts />
        </div>
        <div className='snap-start'>
            <ClientPage />
        </div>
        <div className='snap-start'>
            <ContactUs />
        </div>
  </div>
  );
}

export default KreativeNomad;