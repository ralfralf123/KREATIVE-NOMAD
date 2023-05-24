import React from 'react';
import { useNav } from '../hooks/useNav';
import Window from '../components/window';
import background4 from '../assets/bg4-removebg.png';
import inochi from '../assets/Asset 25@72x.png';
import jyu from '../assets/Asset 26@72x.png';
import ruc from '../assets/Asset 27@72x.png';
import jibe from '../assets/Asset 28@72x.png';
import five from '../assets/Asset 29@72x.png';
import bearo from '../assets/Asset 30@72x.png';
import potato from '../assets/Asset 32@72x.png';
import milktea from '../assets/Asset 33@72x.png';
import brew from '../assets/Asset 34@72x.png';
import bayong from '../assets/Asset 35@72x.png';
import beans from '../assets/Asset 36@72x.png';
import boozie from '../assets/Asset 37@72x.png';
import coffee from '../assets/Asset 38@72x.png';
import monke from '../assets/Asset 39@72x.png';
import plant from '../assets/Asset 40@72x.png';
import note from '../assets/Asset 41@72x.png';
import cholito from '../assets/Asset 42@72x.png';
import asset44 from '../assets/Asset 43@72x.png';
import asset43 from '../assets/Asset 44@72x.png';
import FakeNavBar from '../components/FakeNavBar';

const ClientPage = () => {
  const clientRef = useNav("client");

  return (
    <>
    <div ref={clientRef} className='relative w-full h-screen bg-background bg-cover bg-no-repeat flex flex-col' style={{backgroundImage: `url(${background4})`}} id='client'> 
        <FakeNavBar />
        <div class="relative bottom-14 flex mx-32">
            <div class="w-1/2"></div>
            <div class="w-1/2 flex justify-end">
        </div>
      </div>
      <div className='relative bottom-12 flex w-full justify-center'>
        <div className='grid grid-cols-6 grid-flow-col gap-0'>
          <div>
            <img src={inochi} className='object-cover w-full h-full filter grayscale transition ease-in delay-70 hover:filter-none'/>
          </div>
          <div>
            <img src={jyu} className='object-cover w-full h-full filter grayscale transition ease-in delay-70 hover:filter-none'/>
          </div>
          <div>
            <img src={ruc} className='object-cover w-full h-full filter grayscale transition ease-in delay-70 hover:filter-none'/>
          </div>
          <div>
            <img src={jibe} className='object-cover w-full h-full filter grayscale transition ease-in delay-70 hover:filter-none'/>
          </div>
          <div>
            <img src={five} className='object-cover w-full h-full filter grayscale transition ease-in delay-70 hover:filter-none'/>
          </div>
          <div>
            <img src={bearo} className='object-cover w-full h-full filter grayscale transition ease-in delay-70 hover:filter-none'/>
          </div>      
        </div>
      </div>
      <div className='relative bottom-6 flex w-full justify-center'>
        <div className='grid grid-cols-5 grid-rows-3 gap-0'>
          <div>
            <img src={potato} className='object-cover w-full h-full filter grayscale transition ease-in delay-70 hover:filter-none'/>
          </div>
          <div>
            <img src={milktea} className='object-cover w-full h-full filter grayscale transition ease-in delay-70 hover:filter-none'/>
          </div>
          <div>
            <img src={brew} className='object-cover w-full h-full filter grayscale transition ease-in delay-70 hover:filter-none'/>
          </div>
          <div>
            <img src={bayong} className='object-cover w-full h-full filter grayscale transition ease-in delay-70 hover:filter-none'/>
          </div>
          <div>
            <img src={beans} className='object-cover w-full h-full filter grayscale transition ease-in delay-70 hover:filter-none'/>
          </div>
          <div>
            <img src={boozie} className='object-cover w-full h-full filter grayscale transition ease-in delay-70 hover:filter-none'/>
          </div>
          <div>
            <img src={coffee} className='object-cover w-full h-full filter grayscale transition ease-in delay-70 hover:filter-none'/>
          </div>
          <div>
            <img src={monke} className='object-cover w-full h-full filter grayscale transition ease-in delay-70 hover:filter-none'/>
          </div>
          <div>
            <img src={plant} className='object-cover w-full h-full filter grayscale transition ease-in delay-70 hover:filter-none'/>
          </div>
          <div>
            <img src={note} className='object-cover w-full h-full filter grayscale transition ease-in delay-70 hover:filter-none'/>
          </div>          

          <div className='grid col-start-2 col-end-5' style={{ gridTemplateColumns: 'repeat(3, 1fr)', justifyContent: 'center' }}>
            <div><img src={cholito} className='object-cover w-full h-full filter grayscale transition ease-in delay-70 hover:filter-none'/></div>
            <div><img src={asset44} className='object-cover w-full h-full filter grayscale transition ease-in delay-70 hover:filter-none'/></div>
            <div><img src={asset43} className='object-cover w-full h-full filter grayscale transition ease-in delay-70 hover:filter-none'/></div>
          </div>        
        </div>
        <div className="absolute right-32 bottom-16">
                <Window text='SCROLL DOWN.' paragraph="To contact us!" />
        </div>
      </div>
    </div>
    </>
  )
}

export default ClientPage