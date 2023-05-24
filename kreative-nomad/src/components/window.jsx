import React from 'react';
import windowTemplate from '../assets/window.png';

const window = ({text, paragraph}) => {
  return (
    <div className="relative inline-block">
      <img src={windowTemplate} alt="window" className="w-full" />
      <div className="w-full absolute top-20 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white ${textSize} text-center">
        <h1 className='font-paragraph'><strong>{text}</strong></h1>
        <p>{paragraph}</p>
      </div>
    </div>
  )
}

export default window