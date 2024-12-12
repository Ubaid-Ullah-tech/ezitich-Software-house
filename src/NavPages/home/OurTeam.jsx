import React from 'react';
import Ezilineslide from '../../assets/Eziline-slide.png';
import ourteam from '../../assets/our-team.png';

const OurTeam = () => {
  return (
    <div>
      {/* Parent container for the image and text */}
      <div style={styles.container}>
        <img src={ourteam} alt="Our Team" style={styles.image} />
        <div style={styles.overlay}>
          <p>16 YEARS OF EXPERIENCE</p>
          <p>BEST SOFTWARE HOUSE</p>
          <p>IN 25 COUNTRIES</p>
          <p>Eziline Software House Has Completed 16 Years Working With 7500 Clients</p>
          <p>THANKS ALL FOR YOUR UNCONDITIONAL SUPPORT</p>
        </div>
      </div>

      {/* Second image */}
      <div className='flex justify-center items-center'>
        <img className='text-white' src={Ezilineslide} alt="Eziline Slide" />
      </div>
    </div>
  );
};

// Inline CSS styles
const styles = {
  container: {
    position: 'relative', // Enables positioning of child elements
    width: '100%',
    maxWidth: '100%', // Adjust as needed
  },
  image: {
    width: '100%',
    height: 'auto', // Maintain aspect ratio
  },
  overlay: {
    position: 'absolute', // Overlay the text on top of the image
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)', // Center the text
    color: 'white', // White text for visibility
    textAlign: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black background
    padding: '20px',
    borderRadius: '8px', // Optional: Rounded corners
    fontSize: '1.2rem', // Adjust font size as needed
  },
};

export default OurTeam;
