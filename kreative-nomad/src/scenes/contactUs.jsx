import React from 'react';
import NavBar from '../components/navBar';
import Window from '../components/window';
import PageMap from '../components/pageMap';
import bg5 from '../assets/bg5.PNG';
import mail from '../assets/mail.png';
import ping from '../assets/ping.png';
import chrome from '../assets/chrome.png';
import FakeNavBar from '../components/FakeNavBar';
import { useNav } from '../hooks/useNav';

const ContactUs = () => {
  const contactRef = useNav('contact');

    return (
      <div ref={contactRef} className='relative w-full h-screen flex flex-col' id='contact'> 
          <img src={bg5} className="absolute inset-0 w-full h-screen object-cover" />  
        <div className='relative w-full h-screen bg-contact bg-opacity-75 flex flex-col'>
          <FakeNavBar />
          <div className='mx-72'>
            <div className='flex justify-center'>
              <h1 className='font-paragraph font-bold text-5xl text-about '>Journey with Us!</h1>
            </div>
            <div className='flex-col justify-start mt-8'>
              <div className='flex pb-4'>
                <img src={mail} alt="mail" />
                <p className='text-white text-xl px-4 font-paragraph'>admin@kreativnomad.com</p>
              </div>
              <div className='flex pb-4'>
                <img src={chrome} alt="chrome" />
                <p className='text-white text-xl pt-2 px-4 font-paragraph'>kreativnomad.com</p>
              </div>
              <div className='flex pb-4 pl-2'>
                <img src={ping} alt="ping" />
                <p className='text-white text-xl pt-2 px-5 font-paragraph'>2nd floor 290 Aguirre Ave, Phase 3, BF Homes, Parañaque City</p>
              </div>
            </div>       
          </div>
          <div className='flex justify-center pt-5'>
            <Window text='SCROLL UP' paragraph='To revisit the map!'/>
          </div>         
        </div>        
      </div>
  )
}

export default ContactUs