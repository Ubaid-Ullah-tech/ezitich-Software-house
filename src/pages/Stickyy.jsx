import React, { useEffect, useState } from 'react'
import ubaid from '../assets/ubaid.jpg';

const Stickyy = () => {
    const [isAnimationComplete, setAnimationComplete] = useState(false);

    useEffect(() => {
      const timer = setTimeout(() => {
        setAnimationComplete(true);
      }, 2000); // Matches the duration of the animation (2 seconds)
      return () => clearTimeout(timer);
    }, []);
  
    const animatedStyle = isAnimationComplete
      ? {
          position: 'fixed',
          bottom: '50px',
          left: '10%',
          transform: 'translateX(-10%)',
          zIndex: 1000,
        }
      : {
          position: 'fixed',
          top: '-100px',
          left: '10%',
          transform: 'translateX(-10%)',
          zIndex: 1000,
          animation: 'slideDown 2s ease-in-out forwards',
        };
  
    return (
      <div>
        <style>
          {`
            @keyframes slideDown {
              from {
                top: -100px;
              }
              to {
                top: calc(100vh - 50px);
              }
            }
          `}
        </style>
        <img
          src={ubaid} // Replace with your image path
          className='w-32 h-32 rounded-full'
          alt="Small Icon"
          style={animatedStyle}
        />
      </div>
    );
}

export default Stickyy
