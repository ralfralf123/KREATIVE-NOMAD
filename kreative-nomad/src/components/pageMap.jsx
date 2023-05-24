import React, { useContext } from 'react';
import trail from '../assets/trail.png';
import '../index.css';
import { NavContext } from '../context/NavContext';

const PageMap = ({ images, fontColor }) => {
  const { activeLinkId } = useContext(NavContext);
  console.log(activeLinkId);
  
  const handleClickNav = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };


  return (
    <div
      id='pageMap'
      className={`flex p-12 pb-4 bottom-0 w-full justify-evenly bg-center bg-no-repeat sticky`}
      style={{ backgroundImage: `url(${trail})` }}
    >

        <div
          className={`group relative bottom-14 right-8 flex flex-col items-center cursor-pointer transition ease-in-out delay-50 ${activeLinkId === 'home' ? 'invert scale-110 translate-y-2' : ""}`}
          onClick={() => handleClickNav('home')}
        >
          <img
            src={images.streetsign}
            alt='streetsign'
            className={`transition ease-in-out delay-50 group-hover:scale-110 group-hover:-translate-y-2 duration-300`}
          />
          <p
            className={`text-lg mt-2 font-title ${fontColor.streetsign} transition ease-in-out delay-50 group-hover:scale-110 group-hover:-translate-y-2 duration-300`}
          >
            Start Here!
          </p>
        </div>

      
        <div
          className={`group relative bottom-8 right-12 flex flex-col items-center cursor-pointer transition ease-in-out delay-50 ${activeLinkId === 'aboutUs' ? 'invert scale-110 translate-y-2' : ""}`}
          onClick={() => handleClickNav('aboutUs')}
        >
          <img src={images.bonfire} alt='bonfire' className='transition ease-in-out delay-50 group-hover:scale-110 group-hover:-translate-y-2 duration-300' />
          <p className={`text-lg mt-2 font-title ${fontColor.bonfire} transition ease-in-out delay-50 group-hover:scale-110 group-hover:-translate-y-2 duration-300`}>The Wanderers</p>
        </div>

      
        <div
          className={`group relative bottom-14 right-24 flex flex-col items-center cursor-pointer transition ease-in-out delay-50 ${activeLinkId === 'services' ? 'invert scale-110 translate-y-2' : ""}`}
          onClick={() => handleClickNav('services')}
        >
          <img src={images.backpack} alt='backpack' className='transition ease-in-out delay-50 group-hover:scale-110 group-hover:-translate-y-2 duration-300' />
          <p className={`text-lg mt-2 font-title ${fontColor.backpack} transition ease-in-out delay-50 group-hover:scale-110 group-hover:-translate-y-2 duration-300`}>Our Services</p>
        </div>

      
        <div
          className={`group relative bottom-6 right-12 flex flex-col items-center cursor-pointer transition ease-in-out delay-50 ${activeLinkId === 'crafts' ? 'invert scale-110 translate-y-2' : ""}`}
          onClick={() => handleClickNav('crafts')}
        >
          <img src={images.axes} alt='axes' className='transition ease-in-out delay-50 group-hover:scale-110 group-hover:-translate-y-2 duration-300' />
          <p className={`text-lg mt-2 font-title ${fontColor.axes} transition ease-in-out delay-50 group-hover:scale-110 group-hover:-translate-y-2 duration-300`}>Our Crafts</p>
        </div>
      
        <div
          className={`group relative bottom-14 right-24 flex flex-col items-center cursor-pointer transition ease-in-out delay-50 ${activeLinkId === 'client' ? 'invert scale-110 translate-y-2' : ""}`}
          onClick={() => handleClickNav('client')}
        >
          <img src={images.tent} alt='tent' className='transition ease-in-out delay-50 group-hover:scale-110 group-hover:-translate-y-2 duration-300' />
          <p className={`text-lg mt-2 font-title ${fontColor.tent} transition ease-in-out delay-50 group-hover:scale-110 group-hover:-translate-y-2 duration-300`}>Our Clients</p>
        </div>

      
        <div
          className={`group relative bottom-14 left-10 flex flex-col items-center cursor-pointer transition ease-in-out delay-50 ${activeLinkId === 'contact' ? 'invert scale-110 translate-y-2' : ""}`}
          onClick={() => handleClickNav('contact')}
        >
          <img src={images.compass} alt='compass' className='transition ease-in-out delay-50 group-hover:scale-110 group-hover:-translate-y-2 duration-300' />
          <p className={`text-lg mt-2 font-title ${fontColor.compass} transition ease-in-out delay-50 group-hover:scale-110 group-hover:-translate-y-2 duration-300`}>Contact Us</p>
        </div>
    </div>
  );
};

export default PageMap;
