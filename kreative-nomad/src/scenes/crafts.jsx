import NavBar from '../components/navBar';
import Window from '../components/window';
import PageMap from '../components/pageMap';
import background3 from '../assets/bg3.PNG';
import yogurt from '../assets/Asset 9 (1).png';
import lazada from '../assets/Asset 9 (2).png';
import etop from '../assets/Asset 9 (3).png';
import wetop from '../assets/Asset 9 (4).png';
import ph from '../assets/Asset 9 (5).png';
import inochi from '../assets/Asset 9 (6).png';
import phone from '../assets/Asset 9 (7).png';
import jibe1 from '../assets/Asset 9 (8).png';
import jibe2 from '../assets/Asset 9 (9).png';
import jibe3 from '../assets/Asset 9 (10).png';
import jibe4 from '../assets/Asset 9 (11).png';
import milktea from '../assets/Asset 9 (12).png';
import inochi2 from '../assets/Asset 9 (13).png';
import inochi3 from '../assets/Asset 9 (14).png';
import avengers from '../assets/Asset 9 (15).png';
import rucs from '../assets/Asset 9 (16).png';
import rucs2 from '../assets/Asset 9 (17).png';
import jibe5 from '../assets/Asset 9 (18).png';
import React, { useState, useEffect, useRef } from 'react';
import FakeNavBar from '../components/FakeNavBar';
import { useNav } from '../hooks/useNav';

const Crafts = () => {
    const craftRef = useNav("crafts");
    
    const [isVisible, setIsVisible] = useState(false);
    const imagesRef = useRef([]);
  
    useEffect(() => {
      const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5, // Adjust the threshold value to control when the images start sliding in
      };
  
      const handleIntersection = (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            entry.target.classList.add('slide-in'); // Apply the slide-in animation class
          } else {
            setIsVisible(false);
            entry.target.classList.remove('slide-in'); // Remove the slide-in animation class
          }
        });
      };
  
      const observer = new IntersectionObserver(handleIntersection, observerOptions);
  
      imagesRef.current.forEach((image) => {
        observer.observe(image);
      });
  
      return () => {
        observer.disconnect();
      };
    }, []);

  return (
    <>
    <div ref={craftRef} className='relative w-full h-screen bg-crafts bg-cover bg-no-repeat flex flex-col' style={{backgroundImage: `url(${background3})`}} id='crafts'>
        <FakeNavBar />
        <div class="relative bottom-14 flex mx-32">
            <div class="w-1/2"></div>
            <div class="w-1/2 flex justify-end">
        </div>
      </div>
      <div className='relative bottom-10 flex w-full justify-center'>
        <div className='grid grid-cols-6 grid-rows-3 grid-flow-row gap-0 '>
            <div>
                <img 
                src={yogurt} 
                alt='yogurt' 
                className="object-cover w-full h-full transition-transform duration-300 hover:transform hover:scale-110 slide-in ${isVisible ? 'visible' : ''}`}"
                />
            </div>
            <div>
                <img src={lazada} alt='lazada' className='object-cover w-full h-full transition-transform duration-300 hover:transform hover:scale-110'/>
            </div>
            <div>
                <img src={etop} alt='etop' className='object-cover w-full h-full transition-transform duration-300 hover:transform hover:scale-110'/>
            </div>
            <div>
                <img src={wetop} alt='yogurt' className='object-cover w-full h-full transition-transform duration-300 hover:transform hover:scale-110'/>
            </div>
            <div>
                <img src={ph} alt='lazada' className='object-cover w-full h-full transition-transform duration-300 hover:transform hover:scale-110'/>
            </div>
            <div>
                <img src={inochi} alt='etop' className='object-cover w-full h-full transition-transform duration-300 hover:transform hover:scale-110'/>
            </div>
            <div>
                <img src={phone} alt='yogurt' className='object-cover w-full h-full transition-transform duration-300 hover:transform hover:scale-110'/>
            </div>
            <div>
                <img src={jibe1} alt='lazada' className='object-cover w-full h-full transition-transform duration-300 hover:transform hover:scale-110'/>
            </div>
            <div>
                <img src={jibe2} alt='etop' className='object-cover w-full h-full transition-transform duration-300 hover:transform hover:scale-110'/>
            </div>
            <div>
                <img src={jibe3} alt='yogurt' className='object-cover w-full h-full transition-transform duration-300 hover:transform hover:scale-110'/>
            </div>
            <div>
                <img src={jibe4} alt='lazada' className='object-cover w-full h-full transition-transform duration-300 hover:transform hover:scale-110'/>
            </div>
            <div>
                <img src={milktea} alt='etop' className='object-cover w-full h-full transition-transform duration-300 hover:transform hover:scale-110'/>
            </div>
            <div>
                <img src={inochi2} alt='yogurt' className='object-cover w-full h-full transition-transform duration-300 hover:transform hover:scale-110'/>
            </div>
            <div>
                <img src={inochi3} alt='lazada' className='object-cover w-full h-full transition-transform duration-300 hover:transform hover:scale-110'/>
            </div>
            <div>
                <img src={avengers} alt='etop' className='object-cover w-full h-full transition-transform duration-300 hover:transform hover:scale-110'/>
            </div>
            <div>
                <img src={rucs} alt='yogurt' className='object-cover w-full h-full transition-transform duration-300 hover:transform hover:scale-110'/>
            </div>
            <div>
                <img src={rucs2} alt='lazada' className='object-cover w-full h-full transition-transform duration-300 hover:transform hover:scale-110'/>
            </div>
            <div>
                <img src={jibe5} alt='etop' className='object-cover w-full h-full transition-transform duration-300 hover:transform hover:scale-110'/>
            </div>
            <div className="absolute right-16 bottom-0">
                <Window text='SCROLL DOWN.' paragraph="To meet the brands we've worked with!" />
            </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Crafts