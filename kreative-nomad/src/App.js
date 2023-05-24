import React, { useEffect, useRef } from 'react';
import './index.css';
import HomePage from './scenes/homePage';
import AboutUs from './scenes/aboutUs';
import AboutUs2 from './scenes/aboutUs2';
import Services from './scenes/services';
import Crafts from './scenes/crafts';
import ClientPage from './scenes/clientPage';
import ContactUs from './scenes/contactUs';
import NavBar from './components/navBar';
import PageMap from './components/pageMap';
import axes from './assets/axes.png';
import backpack from './assets/backpack.png';
import bonfire from './assets/bonfire.png';
import compass from './assets/compass.png';
import streetsign from './assets/streetsign.png';
import tent from './assets/tent.png';
import trail from './assets/trail.png';
import NavProvider from './context/NavContext';


function App() {
  const images = {
    streetsign: streetsign,
    axes: axes,
    backpack: backpack,
    bonfire: bonfire,
    compass: compass,
    tent: tent,
    trail: trail,
  };

  const colors = {
    streetsign: 'text-white',
    axes: 'text-white',
    backpack: 'text-white',
    bonfire: 'text-white',
    compass: 'text-white',
    tent: 'text-white',
    trail: 'text-white',
  };


  return (
    <NavProvider>
      <div className='container snap-mandatory snap-y overscroll-y-contain overflow-y-auto relative h-screen w-screen'>
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
          <nav>
            <NavBar />
          </nav>
          <PageMap images={images} fontColor={colors} />
      </div>
    </NavProvider>
  );
}

export default App;
